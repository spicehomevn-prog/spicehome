'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Home, Coffee, Map, Star } from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { RoomCard } from '@/components/sections/RoomCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { featuredRooms } from '@/lib/data/rooms'
import { useLang } from '@/context/LanguageContext'

const whyItems = [
  {
    icon: Home,
    vi: { title: 'Không gian như nhà', desc: 'Phòng riêng tư, sạch sẽ — ấm cúng như ngôi nhà của chính bạn.' },
    en: { title: 'Home-like comfort', desc: 'Private, clean rooms — as warm and cosy as your own home.' },
  },
  {
    icon: Coffee,
    vi: { title: 'Vị trí đắc địa', desc: 'Ngay giữa Phú Nhuận — tiện đi lại, gần ăn uống, gần trung tâm.' },
    en: { title: 'Prime location', desc: 'Right in Phú Nhuận — easy commute, great food nearby, close to the centre.' },
  },
  {
    icon: Map,
    vi: { title: 'Host am hiểu địa phương', desc: 'Hải và Thanh sẵn sàng gợi ý quán ăn, điểm vui chơi và mọi thứ bạn cần.' },
    en: { title: 'Local hosts', desc: 'Hải and Thanh are always ready with food tips, activity suggestions, and anything you need.' },
  },
  {
    icon: Star,
    vi: { title: 'Trải nghiệm chân thật', desc: 'Không phải khách sạn — chúng tôi chia sẻ Sài Gòn với bạn như một người bạn địa phương.' },
    en: { title: 'Authentic experience', desc: 'Not a hotel — we share our Saigon with you like a local friend would.' },
  },
]

export default function HomePage() {
  const { lang } = useLang()

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Brand Intro */}
      <section className="bg-surface py-20 md:py-28">
        <AnimateOnScroll className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>
            {lang === 'vi' ? 'Về SpiceHome' : 'About SpiceHome'}
          </SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl text-primary-text mb-6">
            {lang === 'vi'
              ? 'Nhà của bạn — giữa lòng thành phố năng động nhất Việt Nam'
              : 'Your home — in the heart of Vietnam\'s most vibrant city'}
          </h2>
          <p className="text-muted-text leading-relaxed text-base md:text-lg">
            {lang === 'vi'
              ? 'SpiceHome không đơn thuần là nơi lưu trú. Chúng tôi muốn bạn cảm nhận Sài Gòn như một người dân địa phương — từ bát phở buổi sáng đến con hẻm yên tĩnh buổi chiều. Hải và Thanh luôn ở đây, sẵn sàng giúp bạn khám phá thành phố này theo cách tốt nhất.'
              : 'SpiceHome is more than a place to sleep. We want you to experience Saigon like a local — from a morning bowl of phở to a quiet alley in the afternoon. Hải and Thanh are always here, ready to help you discover this city the right way.'}
          </p>
        </AnimateOnScroll>
      </section>

      {/* 3. Featured Rooms */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="text-center mb-14">
            <SectionLabel>
              {lang === 'vi' ? 'Phòng nổi bật' : 'Featured Rooms'}
            </SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-primary-text">
              {lang === 'vi' ? 'Không gian của bạn' : 'Your space'}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRooms.map((room, i) => (
              <AnimateOnScroll key={room.id} delay={i * 100}>
                <RoomCard room={room} layout="card" />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-12">
            <Link
              href="/rooms"
              className="inline-block border border-primary-text/30 text-primary-text text-xs font-medium
                         uppercase tracking-widest px-8 py-3 hover:bg-dark hover:text-white hover:border-dark
                         transition-colors duration-200"
            >
              {lang === 'vi' ? 'Xem tất cả phòng' : 'View All Rooms'}
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4. Why SpiceHome */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="text-center mb-14">
            <SectionLabel>
              {lang === 'vi' ? 'Tại sao chọn chúng tôi' : 'Why SpiceHome'}
            </SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-primary-text">
              {lang === 'vi' ? 'Chúng tôi khác biệt ra sao' : 'What makes us different'}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {whyItems.map((item, i) => {
              const Icon = item.icon
              const content = lang === 'vi' ? item.vi : item.en
              return (
                <AnimateOnScroll key={i} delay={i * 100} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-playfair text-lg text-primary-text mb-2">{content.title}</h3>
                  <p className="text-sm text-muted-text leading-relaxed">{content.desc}</p>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Local Guide Teaser */}
      <section className="relative bg-dark py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/common/area1.jpg"
          alt="Phú Nhuận neighbourhood"
          fill
          className="object-cover opacity-20"
        />
        <AnimateOnScroll className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionLabel className="text-accent">
            {lang === 'vi' ? 'Khám phá xung quanh' : 'Explore the neighbourhood'}
          </SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
            {lang === 'vi'
              ? 'Phú Nhuận — Sài Gòn nguyên bản'
              : 'Phú Nhuận — authentic Saigon'}
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            {lang === 'vi'
              ? 'Từ bát phở sáng sớm đến phố đi bộ về khuya — chúng tôi đã chuẩn bị sẵn hướng dẫn địa phương dành riêng cho bạn.'
              : 'From an early morning bowl of phở to a late-night walking street — we\'ve put together a local guide just for you.'}
          </p>
          <Link
            href="/local-guide"
            className="inline-block bg-accent text-white text-xs font-medium uppercase tracking-widest
                       px-8 py-3 hover:bg-accent-hover transition-colors duration-200"
          >
            {lang === 'vi' ? 'Xem Hướng Dẫn Địa Phương' : 'Explore Local Guide'}
          </Link>
        </AnimateOnScroll>
      </section>

      {/* 6. Book CTA */}
      <section className="bg-accent py-16 md:py-20">
        <AnimateOnScroll className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
            {lang === 'vi' ? 'Sẵn sàng đặt phòng?' : 'Ready to book?'}
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            {lang === 'vi'
              ? 'Đặt phòng qua Airbnb — nhanh chóng, an toàn và được đảm bảo bởi Airbnb Guest Protection.'
              : 'Book through Airbnb — fast, secure and covered by Airbnb Guest Protection.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.airbnb.com.vn/users/show/spicehomevn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-accent text-sm font-medium uppercase tracking-widest
                         px-10 py-4 hover:bg-dark hover:text-white transition-colors duration-200"
            >
              {lang === 'vi' ? 'Đặt Phòng Ngay' : 'Book on Airbnb'}
            </a>
            <a
              href="https://beacons.ai/spicehomesaigon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white text-sm font-medium uppercase tracking-widest
                         px-10 py-4 hover:bg-white hover:text-accent transition-colors duration-200"
            >
              {lang === 'vi' ? 'Đặt Trực Tiếp' : 'Book Directly'}
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  )
}
