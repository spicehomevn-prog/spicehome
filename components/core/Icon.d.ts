import * as React from 'react'

export type IconName =
  | 'home' | 'coffee' | 'map' | 'star'
  | 'chevron-down' | 'chevron-left' | 'chevron-right'
  | 'menu' | 'x' | 'map-pin' | 'phone' | 'mail' | 'message-circle'
  | 'users' | 'bed-double' | 'images'
  | 'utensils' | 'shopping-bag' | 'landmark' | 'bus'
  | 'clock' | 'lightbulb' | 'external-link'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Which Lucide glyph to render. */
  name: IconName
  /** Pixel size (width = height). Default 20. */
  size?: number
  /** Stroke width. Default 2 (Lucide default). */
  strokeWidth?: number
  className?: string
}

/** A single Lucide-style stroke icon, embedded so the DS needs no icon package. */
export function Icon(props: IconProps): JSX.Element | null
