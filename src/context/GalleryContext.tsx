'use client'

import { createContext, useContext, useState, useCallback, useRef, useEffect, ReactNode } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryData {
  images: string[]
  roomLabel: string
  initialIndex?: number
}

interface GalleryContextType {
  openGallery: (data: GalleryData) => void
}

const GalleryContext = createContext<GalleryContextType | null>(null)

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [gallery, setGallery] = useState<GalleryData | null>(null)
  const [current, setCurrent] = useState(0)
  const thumbsRef = useRef<HTMLDivElement>(null)

  const openGallery = useCallback((data: GalleryData) => {
    setCurrent(data.initialIndex ?? 0)
    setGallery(data)
  }, [])

  const closeGallery = useCallback(() => setGallery(null), [])

  const prev = useCallback(() => {
    if (!gallery) return
    setCurrent(i => (i - 1 + gallery.images.length) % gallery.images.length)
  }, [gallery])

  const next = useCallback(() => {
    if (!gallery) return
    setCurrent(i => (i + 1) % gallery.images.length)
  }, [gallery])

  useEffect(() => {
    if (!gallery) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGallery()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [gallery, closeGallery, prev, next])

  useEffect(() => {
    if (!thumbsRef.current || !gallery) return
    const el = thumbsRef.current.children[current] as HTMLElement
    el?.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' })
  }, [current, gallery])

  const stop = (e: React.SyntheticEvent) => e.stopPropagation()

  return (
    <GalleryContext.Provider value={{ openGallery }}>
      {children}

      {gallery && (
        /* Dark backdrop — click or touch anywhere outside the image/controls to close */
        <div
          className="fixed inset-0 z-[200] bg-black/92 flex flex-col"
          onClick={closeGallery}
          onTouchEnd={e => { if (e.target === e.currentTarget) closeGallery() }}
        >
          {/* Counter strip */}
          <div className="flex items-center px-5 py-3 shrink-0" onClick={stop} onTouchEnd={stop}>
            <span className="text-white/50 text-xs font-medium tracking-widest select-none">
              {gallery.roomLabel} &nbsp;·&nbsp; {current + 1} / {gallery.images.length}
            </span>
          </div>

          {/* Image row — no stopPropagation so dark areas around image close the gallery */}
          <div className="flex-1 flex items-center justify-center gap-3 min-h-0 px-2">

            {/* Left arrow */}
            {gallery.images.length > 1 ? (
              <button
                onClick={e => { stop(e); prev() }}
                onTouchEnd={e => { stop(e); prev() }}
                className="shrink-0 w-12 h-12 flex items-center justify-center
                           bg-white/15 hover:bg-accent text-white transition-colors duration-200"
                aria-label="Previous photo"
              >
                <ChevronLeft size={26} />
              </button>
            ) : (
              <div className="w-12 shrink-0" />
            )}

            {/* Photo */}
            <div onClick={stop} onTouchEnd={stop}>
              <Image
                key={gallery.images[current]}
                src={gallery.images[current]}
                alt={`${gallery.roomLabel} — photo ${current + 1}`}
                width={1600}
                height={1200}
                className="block"
                style={{
                  maxHeight: '75vh',
                  maxWidth: 'calc(90vw - 144px)',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                }}
                priority
              />
            </div>

            {/* Right arrow */}
            {gallery.images.length > 1 ? (
              <button
                onClick={e => { stop(e); next() }}
                onTouchEnd={e => { stop(e); next() }}
                className="shrink-0 w-12 h-12 flex items-center justify-center
                           bg-white/15 hover:bg-accent text-white transition-colors duration-200"
                aria-label="Next photo"
              >
                <ChevronRight size={26} />
              </button>
            ) : (
              <div className="w-12 shrink-0" />
            )}
          </div>

          {/* Thumbnail strip */}
          {gallery.images.length > 1 && (
            <div
              ref={thumbsRef}
              className="flex items-center gap-2 px-4 py-3 overflow-x-auto shrink-0 justify-center"
              style={{ scrollbarWidth: 'none' }}
              onClick={stop}
              onTouchEnd={stop}
            >
              {gallery.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`shrink-0 overflow-hidden transition-all duration-200
                    ${i === current ? 'ring-2 ring-accent opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  <Image
                    src={src}
                    alt={`Thumb ${i + 1}`}
                    width={80}
                    height={56}
                    className="object-cover block"
                    style={{ width: 80, height: 56 }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </GalleryContext.Provider>
  )
}

export function useGallery() {
  const ctx = useContext(GalleryContext)
  if (!ctx) throw new Error('useGallery must be used within GalleryProvider')
  return ctx
}
