import React from 'react'

/**
 * LangToggle — the VI / EN switch from the navbar. Controlled: pass the
 * current `lang` and an `onChange` that receives the other language.
 * Shows the language you'd switch TO (matches the product behaviour).
 */
export function LangToggle({ lang = 'vi', onChange, tone = 'onDark', className = '', ...rest }) {
  const other = lang === 'vi' ? 'en' : 'vi'
  const colors = {
    onDark: { color: 'rgba(255,255,255,0.6)' },
    onLight: { color: 'var(--text-muted)' },
  }
  return (
    <button
      type="button"
      onClick={() => onChange && onChange(other)}
      className={`sh-langtoggle ${className}`.trim()}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-medium)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
        transition: 'var(--transition-color)',
        ...colors[tone],
      }}
      aria-label={`Switch to ${other === 'en' ? 'English' : 'Vietnamese'}`}
      {...rest}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .sh-langtoggle:hover { color: ${tone === 'onDark' ? '#fff' : 'var(--accent)'} !important; }
      ` }} />
      {other.toUpperCase()}
    </button>
  )
}
