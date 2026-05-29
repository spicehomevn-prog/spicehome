'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export function Hero() {
  const { lang } = useLang()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/common/area3.jpg"
        alt="SpiceHome Homestay"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="hero-text text-xs font-medium uppercase tracking-widest text-accent/90 mb-6">
          {lang === 'vi' ? 'Phú Nhuận · Hồ Chí Minh' : 'Phú Nhuận · Ho Chi Minh City'}
        </p>

        <h1 className="hero-text-delay font-playfair italic text-white text-4xl md:text-5xl leading-tight mb-6">
          {lang === 'vi' ? (
            <>Không gian lưu trú ấm cúng<br />giữa lòng Sài Gòn</>
          ) : (
            <>Your cozy home<br />in the heart of Saigon</>
          )}
        </h1>

        <p className="hero-text-delay font-inter text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {lang === 'vi'
            ? 'Không chỉ là nơi lưu trú, mà là một góc Sài Gòn ấm áp để bạn tận hưởng và nghỉ ngơi.'
            : 'Cozy, authentic stays — we don\'t just rent you a room, we share our Saigon with you.'}
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/rooms"
            className="bg-accent text-white text-sm font-medium uppercase tracking-widest px-8 py-3
                       hover:bg-accent-hover transition-colors duration-200"
          >
            {lang === 'vi' ? 'Xem Phòng' : 'Explore Rooms'}
          </Link>
          <a
            href="https://www.airbnb.com.vn/users/show/spicehomevn"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/70 text-white text-sm font-medium uppercase tracking-widest px-8 py-3
                       hover:bg-white hover:text-dark transition-colors duration-200"
          >
            {lang === 'vi' ? 'XEM TRÊN AIRBNB' : 'Book Now'}
          </a>
          <a
            href="https://beacons.ai/spicehomesaigon"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent text-accent text-sm font-medium uppercase tracking-widest px-8 py-3
                       hover:bg-accent hover:text-white transition-colors duration-200"
          >
            {lang === 'vi' ? 'Đặt Trực Tiếp' : 'Book Directly'}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center">
        <ChevronDown size={28} className="text-white/50 animate-bounce" />
      </div>
    </section>
  )
}
