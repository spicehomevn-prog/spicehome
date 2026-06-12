import * as React from 'react'

export interface SectionLabelProps {
  children: React.ReactNode
  /** accent (default) on light, light over dark bands, muted for secondary use */
  tone?: 'accent' | 'light' | 'muted'
  className?: string
}

/** The terracotta uppercase eyebrow shown above section headings. */
export function SectionLabel(props: SectionLabelProps): JSX.Element
