'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { RoomCard } from '@/components/sections/RoomCard'
import { rooms } from '@/lib/data/rooms'
import { useLang } from '@/context/LanguageContext'

export default function RoomsPage() {
  const { lang } = useLang()

  const branch1 = rooms.filter(r => r.branch === 1)
  const branch2 = rooms.filter(r => r.branch === 2)

  return (
    <>
      {/* Page header */}
      <div className="bg-dark pt-32 pb-16 px-6 text-center">
        <SectionLabel className="text-accent/80">SpiceHome</SectionLabel>
        <h1 className="font-playfair italic text-white text-4xl md:text-5xl">
          {lang === 'vi' ? 'Phòng của chúng tôi' : 'Our Rooms'}
        </h1>
        <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          {lang === 'vi'
            ? 'Mỗi phòng có phong cách riêng, đầy đủ tiện nghi và ấm cúng.'
            : '8 rooms across 2 floors — each with its own character, full amenities, and private bathroom.'}
        </p>
      </div>

      {/* Room list */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* Branch 1 */}
          <div>
            <AnimateOnScroll>
              <div className="mb-8 pb-3 border-b border-border">
                <p className="text-xs font-medium uppercase tracking-widest text-accent mb-0.5">
                  {lang === 'vi' ? 'Chi nhánh 1' : 'Branch 1'}
                </p>
                <p className="text-sm text-muted-text">124 Trần Hữu Trang, Phú Nhuận</p>
              </div>
            </AnimateOnScroll>
            <div className="space-y-8">
              {branch1.map((room, i) => (
                <AnimateOnScroll key={room.id} delay={i * 80}>
                  <RoomCard room={room} layout="list" />
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Branch 2 */}
          <div>
            <AnimateOnScroll>
              <div className="mb-8 pb-3 border-b border-border">
                <p className="text-xs font-medium uppercase tracking-widest text-accent mb-0.5">
                  {lang === 'vi' ? 'Chi nhánh 2' : 'Branch 2'}
                </p>
                <p className="text-sm text-muted-text">128/4/3 Trần Hữu Trang, Phú Nhuận</p>
              </div>
            </AnimateOnScroll>
            <div className="space-y-8">
              {branch2.map((room, i) => (
                <AnimateOnScroll key={room.id} delay={i * 80}>
                  <RoomCard room={room} layout="list" />
                </AnimateOnScroll>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Book CTA */}
      <section className="bg-accent py-14 text-center px-6">
        <h2 className="font-playfair text-2xl md:text-3xl text-white mb-4">
          {lang === 'vi' ? 'Tìm được phòng ưng ý?' : 'Found the perfect room?'}
        </h2>
        <p className="text-white/80 mb-7 text-sm">
          {lang === 'vi'
            ? 'Đặt ngay trực tiếp với chúng tôi hoặc qua Airbnb'
            : 'Book now via Airbnb — instant confirmation, secure payment.'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.airbnb.com/users/show/479055797"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-accent text-xs font-medium uppercase tracking-widest
                       px-8 py-3 hover:bg-dark hover:text-white transition-colors duration-200"
          >
            {lang === 'vi' ? 'Xem Tất Cả Trên Airbnb' : 'View All on Airbnb'}
          </a>
          <a
            href="https://beacons.ai/spicehomesaigon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white text-xs font-medium uppercase tracking-widest
                       px-8 py-3 hover:bg-white hover:text-accent transition-colors duration-200"
          >
            {lang === 'vi' ? 'Đặt Trực Tiếp' : 'Book Directly'}
          </a>
        </div>
      </section>
    </>
  )
}
