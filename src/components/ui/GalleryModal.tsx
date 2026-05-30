'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  images: string[]
  initialIndex?: number
  roomLabel: string
  onClose: () => void
}

export function GalleryModal({ images, initialIndex = 0, roomLabel, onClose }: Props) {
  const [current, setCurrent] = useState(initialIndex)

  const prev = useCallback(() =>
    setCurrent(i => (i - 1 + images.length) % images.length), [images.length])

  const next = useCallback(() =>
    setCurrent(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/92 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="absolute top-0 inset-x-0 flex items-center justify-between px-6 py-4"
        onClick={e => e.stopPropagation()}
      >
        <p className="text-white/70 text-xs font-medium uppercase tracking-widest">
          {roomLabel} — {current + 1} / {images.length}
        </p>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Close gallery"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main image */}
      <div
        className="relative w-full max-w-5xl px-0 md:px-16 h-[85vh] md:h-[75vh]"
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={images[current]}
          alt={`${roomLabel} — photo ${current + 1}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Prev / Next arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-accent
                       text-white p-3 transition-colors duration-200"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-accent
                       text-white p-3 transition-colors duration-200"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Thumbnail strip */}
      <div
        className="absolute bottom-0 inset-x-0 flex gap-2 justify-start md:justify-center px-4 py-3 overflow-x-auto scrollbar-none"
        onClick={e => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative shrink-0 w-16 h-10 md:w-14 md:h-10 overflow-hidden transition-opacity duration-200
              ${i === current ? 'ring-2 ring-accent opacity-100' : 'opacity-40 hover:opacity-70'}`}
          >
            <Image src={src} alt={`Thumb ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
