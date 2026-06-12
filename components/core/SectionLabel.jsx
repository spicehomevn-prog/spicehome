import React from 'react'

/**
 * SectionLabel — the terracotta uppercase eyebrow that sits above section
 * headings throughout SpiceHome. Wide-tracked Inter, 12px.
 */
export function SectionLabel({ children, tone = 'accent', className = '', ...rest }) {
  const colors = {
    accent: 'var(--accent)',
    light:  'rgba(196,119,59,0.8)', // slightly softened over dark bands
    muted:  'var(--text-muted)',
  }
  return (
    <p
      className={className}
      style={{
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-medium)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
        color: colors[tone],
        margin: 0,
      }}
      {...rest}
    >
      {children}
    </p>
  )
}
