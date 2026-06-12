import * as React from 'react'

export type Lang = 'vi' | 'en'

export interface LangToggleProps {
  /** Current language. */
  lang?: Lang
  /** Called with the OTHER language when clicked. */
  onChange?: (next: Lang) => void
  /** onDark (navbar) or onLight. */
  tone?: 'onDark' | 'onLight'
  className?: string
}

/** The VI / EN language switch from the SpiceHome navbar. */
export function LangToggle(props: LangToggleProps): JSX.Element
