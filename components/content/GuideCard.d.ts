import * as React from 'react'

export type BilingualText = { vi: string; en: string } | string

export interface GuideItem {
  name: BilingualText
  description: BilingualText
  address?: string
  hours?: string
  tip?: BilingualText
  mapsUrl?: string
}

export interface GuideCardProps {
  item: GuideItem
  lang?: 'vi' | 'en'
}

/** A single local-guide listing: eatery, shop, attraction or transit tip. */
export function GuideCard(props: GuideCardProps): JSX.Element
