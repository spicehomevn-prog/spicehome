import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { rooms } from '@/lib/data/rooms'
import { RoomDetailPage } from '@/components/sections/RoomDetailPage'

export function generateStaticParams() {
  return rooms.map(r => ({ id: r.id }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const room = rooms.find(r => r.id === params.id)
  if (!room) return {}
  return {
    title: `${room.name.vi} — SpiceHome Homestay`,
    description: room.tagline.vi,
    openGraph: {
      title: room.name.vi,
      description: room.tagline.vi,
      images: [{ url: `/images/rooms/${room.id}/og.jpg`, width: 1200, height: 630, alt: `${room.name.vi} — SpiceHome Homestay` }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/images/rooms/${room.id}/og.jpg`],
    },
  }
}

export default function Page({ params }: { params: { id: string } }) {
  const room = rooms.find(r => r.id === params.id)
  if (!room) notFound()
  return <RoomDetailPage room={room} />
}
