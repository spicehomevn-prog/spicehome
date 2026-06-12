import * as React from 'react'
import type { IconName } from '../core/Icon'

export interface HostContact {
  label: string
  href?: string
  icon?: IconName
}

export interface HostCardProps {
  name: string
  /** Single-letter monogram shown in the round chip. */
  initial: string
  /** Role eyebrow, e.g. "Main Host". */
  role: string
  blurb: string
  contacts?: HostContact[]
}

/** "Meet your host" card from the About page. */
export function HostCard(props: HostCardProps): JSX.Element
