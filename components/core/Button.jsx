import React from 'react'

/**
 * SpiceHome Button — square, uppercase, wide-tracked. The house CTA style.
 * Renders an <a> when `href` is given, otherwise a <button>.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-label)',
    fontWeight: 'var(--weight-medium)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    borderRadius: 'var(--radius-none)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'var(--transition-color)',
    textAlign: 'center',
    lineHeight: 1,
    whiteSpace: 'nowrap',
  }

  const sizes = {
    sm: { fontSize: 'var(--text-xs)', padding: '0.625rem 1.25rem' },
    md: { fontSize: 'var(--text-xs)', padding: '0.75rem 2rem' },
    lg: { fontSize: 'var(--text-sm)', padding: '1rem 2.5rem' },
  }

  const variants = {
    primary:      { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' },
    outline:      { background: 'transparent', color: 'var(--text-body)', borderColor: 'rgba(44,44,42,0.3)' },
    accentOutline:{ background: 'transparent', color: 'var(--accent)', borderColor: 'var(--accent)' },
    onDark:       { background: '#fff', color: 'var(--accent)', borderColor: '#fff' },
    ghostOnDark:  { background: 'transparent', color: '#fff', borderColor: 'var(--border-on-inverse)' },
  }

  const style = { ...base, ...sizes[size], ...variants[variant] }

  const hoverClass = `sh-btn sh-btn--${variant}`
  const props = {
    className: `${hoverClass} ${className}`.trim(),
    style,
    'data-variant': variant,
    ...rest,
  }

  // Per-variant hover handled via a scoped <style> injected once.
  const hoverCss = `
    .sh-btn--primary:not([aria-disabled="true"]):hover { background: var(--accent-hover) !important; border-color: var(--accent-hover) !important; }
    .sh-btn--outline:not([aria-disabled="true"]):hover { background: var(--bg-inverse) !important; color: #fff !important; border-color: var(--bg-inverse) !important; }
    .sh-btn--accentOutline:not([aria-disabled="true"]):hover { background: var(--accent) !important; color: #fff !important; }
    .sh-btn--onDark:not([aria-disabled="true"]):hover { background: var(--bg-inverse) !important; color: #fff !important; border-color: var(--bg-inverse) !important; }
    .sh-btn--ghostOnDark:not([aria-disabled="true"]):hover { background: #fff !important; color: var(--accent) !important; border-color: #fff !important; }
  `

  const inner = (
    <>
      <style dangerouslySetInnerHTML={{ __html: hoverCss }} />
      {children}
    </>
  )

  if (href && !disabled) {
    return <a href={href} {...props} onClick={onClick}>{inner}</a>
  }
  return (
    <button type={type} disabled={disabled} aria-disabled={disabled} onClick={onClick} {...props}>
      {inner}
    </button>
  )
}
