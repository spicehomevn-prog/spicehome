import * as React from 'react'

export type BilingualText = { vi: string; en: string } | string

export interface Room {
  number: string
  name: BilingualText
  tagline?: BilingualText
  description?: BilingualText
  images: string[]
  highlights?: BilingualText[]
  amenities?: BilingualText[]
  bed?: BilingualText
  capacity?: number
}

/**
 * @startingPoint section="Content" subtitle="Featured-room card with gallery + chips" viewport="700x380"
 */
export interface RoomCardProps {
  room: Room
  /** card = compact (homepage grid); list = wide row with full detail */
  layout?: 'card' | 'list'
  /** Called with the room when the image is clicked (open lightbox). */
  onOpenGallery?: (room: Room) => void
  lang?: 'vi' | 'en'
}

/** A SpiceHome room, in compact card or wide list layout. */
export function RoomCard(props: RoomCardProps): JSX.Element
