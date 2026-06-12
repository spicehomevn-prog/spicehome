import React from 'react'
import { Icon } from '../core/Icon.jsx'

/**
 * HostCard — meet-your-host card from the About page. Round monogram chip,
 * name, role eyebrow, blurb, and contact rows.
 */
export function HostCard({ name, initial, role, blurb, contacts = [] }) {
  return (
    <div style={{ background: 'var(--bg-surface)', border: 'var(--border)', padding: 'var(--space-8)', textAlign: 'center' }}>
      <div style={{
        width: 80, height: 80, borderRadius: 'var(--radius-pill)', background: 'var(--accent-soft)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-5)',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: 'var(--text-h3)' }}>{initial}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', color: 'var(--text-heading)', margin: '0 0 4px' }}>{name}</h3>
      <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-xs)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--accent)', margin: '0 0 var(--space-4)' }}>{role}</p>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 var(--space-5)' }}>{blurb}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {contacts.map((c, i) => {
          const inner = (
            <>
              <Icon name={c.icon || 'phone'} size={13} style={{ color: 'var(--accent)' }} />
              <span>{c.label}</span>
            </>
          )
          const style = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }
          return c.href
            ? <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={style}>{inner}</a>
            : <p key={i} style={{ ...style, margin: 0 }}>{inner}</p>
        })}
      </div>
    </div>
  )
}
