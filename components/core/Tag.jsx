import React from 'react'

/**
 * Tag — the small bordered chip used for room highlights & amenities.
 * Square, hairline border, muted text on the page background.
 */
export function Tag({ children, tone = 'default', className = '', ...rest }) {
  const tones = {
    default: { background: 'var(--bg-page)', color: 'var(--text-muted)', borderColor: 'var(--border-hairline)' },
    accent:  { background: 'var(--accent-soft)', color: 'var(--accent)', borderColor: 'transparent' },
  }
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        lineHeight: 1.4,
        padding: '0.25rem 0.625rem',
        border: '1px solid',
        borderRadius: 'var(--radius-none)',
        ...tones[tone],
      }}
      {...rest}
    >
      {children}
    </span>
  )
}
