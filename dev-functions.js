/**
 * Local dev server that serves Netlify functions at /.netlify/functions/*
 * Run alongside `npm run dev`:
 *   node dev-functions.js
 * Then set NEXT_PUBLIC_FUNCTION_URL=http://localhost:8888 in .env.local
 */
const http = require('http')
const { handler: icalProxy } = require('./netlify/functions/ical-proxy.js')

const PORT = 8888

const HANDLERS = {
  '/.netlify/functions/ical-proxy': icalProxy,
}

const server = http.createServer(async (req, res) => {
  const { pathname, searchParams } = new URL(req.url, `http://localhost:${PORT}`)

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return }

  const fn = HANDLERS[pathname]
  if (!fn) { res.writeHead(404); res.end('Not found'); return }

  const queryStringParameters = {}
  searchParams.forEach((v, k) => { queryStringParameters[k] = v })

  try {
    const result = await fn({ queryStringParameters })
    const headers = { 'Content-Type': 'application/json', ...(result.headers ?? {}) }
    res.writeHead(result.statusCode, headers)
    res.end(result.body)
  } catch (e) {
    res.writeHead(500); res.end(String(e))
  }
})

server.listen(PORT, () => {
  console.log(`\n  Functions server → http://localhost:${PORT}`)
  console.log(`  Test: http://localhost:${PORT}/.netlify/functions/ical-proxy?url=<encoded-ical-url>\n`)
})
