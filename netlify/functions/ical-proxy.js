// Proxies Airbnb iCal feeds to avoid CORS restrictions in the browser.
// Only allows requests to airbnb.com / airbnb.com.vn.

const ALLOWED_HOSTS = ['www.airbnb.com', 'www.airbnb.com.vn']

exports.handler = async (event) => {
  const { url } = event.queryStringParameters || {}

  if (!url) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing url param' }) }
  }

  let parsed
  try {
    parsed = new URL(url)
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid URL' }) }
  }

  if (!ALLOWED_HOSTS.includes(parsed.hostname)) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Forbidden host' }) }
  }

  let ical
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SpiceHomeCalBot/1.0)' },
    })
    if (!res.ok) {
      return { statusCode: 502, body: JSON.stringify({ error: `Upstream ${res.status}` }) }
    }
    ical = await res.text()
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: String(e) }) }
  }

  const events = parseIcal(ical)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300',
    },
    body: JSON.stringify(events),
  }
}

/**
 * Parse VEVENT blocks from an iCal string.
 * Returns [{start: 'YYYY-MM-DD', end: 'YYYY-MM-DD'}] (end is exclusive, as per iCal spec).
 */
function parseIcal(text) {
  // Unfold RFC 5545 continuation lines
  const unfolded = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n[ \t]/g, '')

  const events = []
  const veventRe = /BEGIN:VEVENT([\s\S]*?)END:VEVENT/g
  let m
  while ((m = veventRe.exec(unfolded)) !== null) {
    const block = m[1]
    const start = extractDate(block, 'DTSTART')
    const end = extractDate(block, 'DTEND')
    if (start && end) events.push({ start, end })
  }
  return events
}

// Handles DATE (20260611) and DATETIME (20260611T140000Z / 20260611T140000+07:00)
function extractDate(block, prop) {
  const re = new RegExp(`${prop}[^:]*:(\\d{8})`)
  const m = block.match(re)
  if (!m) return null
  const s = m[1]
  return `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`
}
