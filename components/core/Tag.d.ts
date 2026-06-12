import * as React from 'react'

export interface TagProps {
  children: React.ReactNode
  /** default = hairline chip on cream; accent = soft terracotta fill */
  tone?: 'default' | 'accent'
  className?: string
}

/** Small square chip for room highlights, amenities, and meta labels. */
export function Tag(props: TagProps): JSX.Element
