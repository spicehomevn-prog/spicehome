import { notFound } from 'next/navigation'
import { rooms } from '@/lib/data/rooms'
import { RoomDetailPage } from '@/components/sections/RoomDetailPage'

export function generateStaticParams() {
  return rooms.map(r => ({ id: r.id }))
}

export default function Page({ params }: { params: { id: string } }) {
  const room = rooms.find(r => r.id === params.id)
  if (!room) notFound()
  return <RoomDetailPage room={room} />
}
