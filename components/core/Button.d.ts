import * as React from 'react'

/**
 * @startingPoint section="Core" subtitle="Square, uppercase, wide-tracked CTA" viewport="700x160"
 */
export interface ButtonProps {
  children: React.ReactNode
  /**
   * primary       — solid terracotta (default)
   * outline       — graphite hairline, inverts to ink on hover
   * accentOutline — terracotta outline, fills on hover
   * onDark        — white solid, for dark/image bands
   * ghostOnDark   — white hairline on dark, fills white on hover
   */
  variant?: 'primary' | 'outline' | 'accentOutline' | 'onDark' | 'ghostOnDark'
  size?: 'sm' | 'md' | 'lg'
  /** Render as an <a> link instead of a <button>. */
  href?: string
  onClick?: React.MouseEventHandler
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export function Button(props: ButtonProps): JSX.Element
