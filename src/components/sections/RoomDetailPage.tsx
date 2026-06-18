'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BedDouble, Users, Home, Lightbulb, Phone, ChevronLeft, Star } from 'lucide-react'
import type { Room } from '@/lib/data/rooms'
import { useLang } from '@/context/LanguageContext'
import { useGallery } from '@/context/GalleryContext'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { AvailabilityCalendar } from '@/components/ui/AvailabilityCalendar'

const NOTES = [
  { vi: 'Nhận phòng từ 14:00 · Trả phòng trước 11:00', en: 'Check-in from 2:00 PM · Check-out by 11:00 AM' },
  { vi: 'Nhắn tin trước cho host để được hỗ trợ nhận phòng thuận tiện nhất', en: 'Message your host ahead of time for the smoothest check-in' },
  { vi: 'Không hút thuốc trong phòng · Giữ yên lặng sau 22:00', en: 'No smoking indoors · Quiet hours after 10:00 PM' },
  { vi: 'Mang theo CCCD/hộ chiếu để đăng ký lưu trú', en: 'Bring your ID/passport for stay registration' },
]

const CONTACTS = ['(+84) 0904 955 479', '(+84) 0355 608 623', '(+84) 0979 80 4343']

interface Props {
  room: Room
}

export function RoomDetailPage({ room }: Props) {
  const { lang } = useLang()
  const { openGallery } = useGallery()

  const roomLabel = lang === 'vi' ? `Phòng ${room.number}` : `Room ${room.number}`
  const floorLabel = lang === 'vi' ? `Tầng ${room.floor}` : `Floor ${room.floor}`
  const guestLabel = lang === 'vi' ? `Tối đa ${room.capacity} khách` : `Up to ${room.capacity} guests`
  const branchAddress = room.branch === 1
    ? '124 Trần Hữu Trang, Phú Nhuận'
    : '128/4/3 Trần Hữu Trang, Phú Nhuận'

  const descParagraphs = room.description[lang].split('\n\n').filter(Boolean)

  return (
    <div>
      {/* Hero */}
      <header className="relative min-h-[65vh] flex items-end overflow-hidden">
        <Image
          src={room.images[0]}
          alt={room.name[lang]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/35" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-12 pt-32 box-border">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-1.5 text-white/60 text-xs uppercase tracking-widest mb-6 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft size={13} />
            {lang === 'vi' ? 'Tất cả phòng' : 'All rooms'}
          </Link>
          <SectionLabel className="text-accent/90 mb-2">{floorLabel} · Phú Nhuận</SectionLabel>
          <h1 className="font-playfair italic text-white text-4xl md:text-5xl mt-3 mb-4">
            {roomLabel}
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">{room.tagline[lang]}</p>
        </div>
      </header>

      {/* Meta bar */}
      <div className="bg-dark border-t border-accent">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-x-8 gap-y-2">
          <span className="inline-flex items-center gap-2 text-white/80 text-sm">
            <BedDouble size={15} className="text-accent" />
            {room.bed[lang]}
          </span>
          <span className="inline-flex items-center gap-2 text-white/80 text-sm">
            <Users size={15} className="text-accent" />
            {guestLabel}
          </span>
          <span className="inline-flex items-center gap-2 text-white/80 text-sm">
            <Home size={15} className="text-accent" />
            {floorLabel} · {branchAddress}
          </span>
        </div>
      </div>

      {/* 1. Opening */}
      <section className="bg-surface py-20 md:py-28">
        <AnimateOnScroll className="max-w-3xl mx-auto px-6">
          <SectionLabel>{lang === 'vi' ? 'Mở đầu' : 'Opening'}</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl text-primary-text mt-3 mb-8">
            {lang === 'vi' ? 'Chào mừng đến với không gian của bạn' : 'Welcome to your space'}
          </h2>
          <div className="space-y-5">
            {descParagraphs.map((p, i) => (
              <p key={i} className="text-muted-text text-lg leading-relaxed">{p}</p>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* 2. Gallery */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="mb-10">
            <SectionLabel>{lang === 'vi' ? 'Không gian' : 'The Space'}</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-primary-text mt-3">
              {lang === 'vi' ? 'Mỗi góc một câu chuyện' : 'Every corner tells a story'}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {room.images.map((src, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <button
                  onClick={() => openGallery({ images: room.images, roomLabel, initialIndex: i })}
                  className={`relative overflow-hidden cursor-zoom-in group border border-border w-full
                    ${i === 0 ? 'col-span-2 md:col-span-3 aspect-[16/9]' : 'aspect-[4/3]'}`}
                  aria-label={`${lang === 'vi' ? 'Xem ảnh' : 'View photo'} ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${room.name[lang]} ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {room.highlights.map((h, i) => (
              <span key={i} className="text-xs px-3 py-1.5 bg-surface border border-border text-muted-text">
                {h[lang]}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Amenities */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="mb-10">
            <SectionLabel>{lang === 'vi' ? 'Tiện ích' : 'Access & Amenities'}</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-primary-text mt-3">
              {lang === 'vi' ? 'Mọi thứ bạn cần' : 'Everything you need'}
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8">
            {room.amenities.map((a, i) => (
              <AnimateOnScroll key={i} delay={i * 40}>
                <div className="flex items-center gap-3 py-4 border-b border-border">
                  <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Star size={13} className="text-accent" />
                  </span>
                  <span className="text-primary-text text-sm">{a[lang]}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Availability */}
      <section id="availability" className="bg-background py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="mb-8">
            <SectionLabel>{lang === 'vi' ? 'Lịch trống' : 'Availability'}</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-primary-text mt-3 mb-2">
              {lang === 'vi' ? 'Kiểm tra lịch đặt phòng' : 'Check availability'}
            </h2>
            <p className="text-muted-text text-sm">
              {lang === 'vi'
                ? 'Ngày bôi màu = đã có khách · Ngày trắng = còn trống'
                : 'Highlighted dates = booked · White = available'}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <AvailabilityCalendar calendarSources={room.calendarSources} lang={lang} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* 5. Good to Know */}
      <section className="bg-dark py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll className="mb-10">
            <SectionLabel className="text-accent/90">
              {lang === 'vi' ? 'Lưu ý' : 'Good to Know'}
            </SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mt-3">
              {lang === 'vi' ? 'Trước khi bạn đến' : 'Before you arrive'}
            </h2>
          </AnimateOnScroll>
          <ul className="space-y-4 mb-10">
            {NOTES.map((n, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <li className="flex items-start gap-3">
                  <Lightbulb size={16} className="text-accent mt-1 shrink-0" />
                  <span className="text-white/80 leading-relaxed">{n[lang]}</span>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
          <div className="border-t border-white/10 pt-6 flex flex-wrap gap-4 items-center">
            <span className="text-white/50 text-sm">
              {lang === 'vi' ? 'Hỗ trợ 24/7:' : 'Reach us anytime:'}
            </span>
            {CONTACTS.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-white/80 text-sm">
                <Phone size={13} className="text-accent" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-accent py-16 px-6 text-center">
        <AnimateOnScroll>
          <h2 className="font-playfair text-2xl md:text-3xl text-white mb-4">
            {lang === 'vi' ? `Đặt ${roomLabel} ngay` : `Book ${roomLabel}`}
          </h2>
          <p className="text-white/85 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            {lang === 'vi'
              ? 'Đặt qua Airbnb — nhanh chóng, an toàn và được bảo vệ bởi Airbnb Guest Protection.'
              : 'Book through Airbnb — fast, secure and covered by Airbnb Guest Protection.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={room.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-accent text-xs font-medium uppercase tracking-widest
                         px-10 py-4 hover:bg-dark hover:text-white transition-colors duration-200"
            >
              {lang === 'vi' ? 'Đặt trên Airbnb' : 'Book on Airbnb'}
            </a>
            <a
              href="https://beacons.ai/spicehomesaigon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white text-xs font-medium uppercase tracking-widest
                         px-10 py-4 hover:bg-white hover:text-accent transition-colors duration-200"
            >
              {lang === 'vi' ? 'Đặt Trực Tiếp' : 'Book Directly'}
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  )
}
