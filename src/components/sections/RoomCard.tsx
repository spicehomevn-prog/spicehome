'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Users, BedDouble, Images } from 'lucide-react'
import type { Room } from '@/lib/data/rooms'
import { useLang } from '@/context/LanguageContext'
import { useGallery } from '@/context/GalleryContext'

interface Props {
  room: Room
  layout?: 'card' | 'list'
}

export function RoomCard({ room, layout = 'card' }: Props) {
  const { lang } = useLang()
  const { openGallery } = useGallery()

  if (layout === 'list') {
    const listRoomLabel = lang === 'vi' ? `Phòng ${room.number}` : `Room ${room.number}`
    return (
      <div className="flex flex-col md:flex-row gap-0 border border-border hover:shadow-md transition-shadow duration-300 bg-surface">
        {/* Clickable image */}
        <button
          onClick={() => openGallery({ images: room.images, roomLabel: listRoomLabel })}
          className="relative w-full md:w-2/5 h-64 md:h-80 shrink-0 overflow-hidden cursor-zoom-in"
          aria-label={`${lang === 'vi' ? 'Xem ảnh' : 'View photos'} ${listRoomLabel}`}
        >
          <Image
            src={room.images[0]}
            alt={room.name[lang]}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          {room.images.length > 1 && (
            <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs
                             flex items-center gap-1.5 px-2.5 py-1">
              <Images size={12} />
              {room.images.length}
            </span>
          )}
        </button>

        {/* Details */}
        <div className="flex flex-col justify-center p-8 flex-1">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
            {lang === 'vi' ? `Phòng ${room.number}` : `Room ${room.number}`}
          </p>
          <p className="text-sm text-muted-text italic mb-4">{room.tagline[lang]}</p>
          <p className="text-sm text-primary-text/80 leading-relaxed mb-6 whitespace-pre-line">
            {room.description[lang]}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-text">
            <span className="flex items-center gap-1.5">
              <BedDouble size={15} className="text-accent" />
              {room.bed[lang]}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={15} className="text-accent" />
              {lang === 'vi' ? `Tối đa ${room.capacity} khách` : `Up to ${room.capacity} guests`}
            </span>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-7">
            {room.amenities.slice(0, 5).map((a, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-background border border-border text-muted-text"
              >
                {a[lang]}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={room.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white text-xs font-medium uppercase tracking-widest
                         px-7 py-3 hover:bg-accent-hover transition-colors duration-200"
            >
              {lang === 'vi' ? 'XEM TRÊN AIRBNB' : 'Book on Airbnb'}
            </a>
            <a
              href="https://beacons.ai/spicehomesaigon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-accent text-accent text-xs font-medium uppercase tracking-widest
                         px-7 py-3 hover:bg-accent hover:text-white transition-colors duration-200"
            >
              {lang === 'vi' ? 'Đặt Trực Tiếp' : 'Book Directly'}
            </a>
          </div>
        </div>
      </div>

    )
  }

  // Card layout (homepage featured)
  const roomLabel = lang === 'vi' ? `Phòng ${room.number}` : `Room ${room.number}`

  return (
    <div className="bg-surface border border-border hover:shadow-md transition-shadow duration-300 group">
      {/* Clickable image */}
      <button
        onClick={() => openGallery({ images: room.images, roomLabel })}
        className="relative h-56 w-full overflow-hidden block cursor-zoom-in"
        aria-label={`${lang === 'vi' ? 'Xem ảnh' : 'View photos'} ${roomLabel}`}
      >
        <Image
          src={room.images[0]}
          alt={room.name[lang]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {room.images.length > 1 && (
          <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs
                           flex items-center gap-1.5 px-2.5 py-1">
            <Images size={12} />
            {room.images.length}
          </span>
        )}
      </button>

      {/* Content */}
      <div className="px-6 py-4">
        <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
          {roomLabel}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {room.highlights.map((h, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 bg-background border border-border text-muted-text"
            >
              {h[lang]}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
