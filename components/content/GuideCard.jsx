import React from 'react'
import { Icon } from '../core/Icon.jsx'

/**
 * GuideCard — a single local-guide listing (eatery, shop, attraction, transit).
 * Flat surface card with optional address, hours, host tip and a maps link.
 */
export function GuideCard({ item, lang = 'en' }) {
  const t = (b) => (b && typeof b === 'object' ? b[lang] : b)
  return (
    <div className="sh-guidecard" style={{ background: 'var(--bg-surface)', border: 'var(--border)', padding: 'var(--space-6)' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .sh-guidecard { transition: box-shadow var(--duration-medium) ease; }
        .sh-guidecard:hover { box-shadow: var(--shadow-hover); }
        .sh-guidecard a.sh-maplink:hover { color: var(--accent-hover); }
      ` }} />
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', color: 'var(--text-heading)', margin: '0 0 var(--space-2)' }}>{t(item.name)}</h3>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 var(--space-4)' }}>{t(item.description)}</p>

      {item.address && (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 8 }}>
          <Icon name="map-pin" size={13} style={{ color: 'var(--accent)', marginTop: 2 }} /><span>{item.address}</span>
        </div>
      )}
      {item.hours && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 8 }}>
          <Icon name="clock" size={13} style={{ color: 'var(--accent)' }} /><span>{item.hours}</span>
        </div>
      )}
      {item.tip && (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 'var(--text-xs)', color: 'var(--text-body)', background: 'var(--bg-page)', border: 'var(--border)', padding: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
          <Icon name="lightbulb" size={13} style={{ color: 'var(--accent)', marginTop: 2 }} /><span>{t(item.tip)}</span>
        </div>
      )}
      {item.mapsUrl && (
        <a href={item.mapsUrl} target="_blank" rel="noopener noreferrer" className="sh-maplink"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 'var(--space-4)', fontFamily: 'var(--font-label)', fontSize: 'var(--text-xs)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--accent)' }}>
          {lang === 'vi' ? 'Xem bản đồ' : 'View on Map'}<Icon name="external-link" size={11} />
        </a>
      )}
    </div>
  )
}
