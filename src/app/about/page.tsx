'use client'

import Image from 'next/image'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLang } from '@/context/LanguageContext'

export default function AboutPage() {
  const { lang } = useLang()

  return (
    <>
      {/* Page header */}
      <div className="bg-dark pt-32 pb-16 px-6 text-center">
        <SectionLabel className="text-accent/80">SpiceHome</SectionLabel>
        <h1 className="font-playfair italic text-white text-4xl md:text-5xl">
          {lang === 'vi' ? 'Về Chúng Tôi' : 'About Us'}
        </h1>
        <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          {lang === 'vi'
            ? 'Những người bạn địa phương — sẵn sàng chia sẻ Sài Gòn với bạn.'
            : 'Your local friends — ready to share Saigon with you.'}
        </p>
      </div>

      {/* Brand story */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="relative h-80 md:h-[480px] overflow-hidden">
                <Image
                  src="/images/common/staircase.jpg"
                  alt="SpiceHome interior"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <SectionLabel>
                {lang === 'vi' ? 'Câu chuyện của chúng tôi' : 'Our story'}
              </SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl text-primary-text mb-6">
                {lang === 'vi'
                  ? 'Không chỉ là phòng — là trải nghiệm'
                  : 'Not just a room — an experience'}
              </h2>
              <div className="space-y-4 text-muted-text leading-relaxed text-sm md:text-base">
                <p>
                  {lang === 'vi'
                    ? 'SpiceHome ra đời từ tình yêu dành cho Sài Gòn và mong muốn chia sẻ thành phố này với du khách theo cách chân thật nhất. Chúng tôi không muốn bạn chỉ ngủ và ra đi — chúng tôi muốn bạn thật sự cảm nhận được nhịp sống của khu phố Phú Nhuận.'
                    : 'SpiceHome was born from a love of Saigon and the desire to share this city with travellers in the most authentic way. We don\'t want you to just sleep and leave — we want you to truly feel the rhythm of life in Phú Nhuận.'}
                </p>
                <p>
                  {lang === 'vi'
                    ? 'Từ những bát phở buổi sáng ở góc phố quen, những quán cà phê cóc yên tĩnh đến chợ truyền thống tấp nập — Phú Nhuận có tất cả những gì làm nên Sài Gòn chân thật. Và chúng tôi ở đây để dẫn bạn khám phá điều đó.'
                    : 'From morning phở at the familiar corner stall, to quiet neighbourhood cafes and bustling traditional markets — Phú Nhuận has everything that makes Saigon real. And we are here to guide you through it.'}
                </p>
                <p>
                  {lang === 'vi'
                    ? 'Mỗi phòng tại SpiceHome được thiết kế để bạn cảm thấy như đang ở nhà — không quá xa hoa, không quá tối giản. Đúng mức để bạn thoải mái, thư giãn và sẵn sàng cho những chuyến khám phá tiếp theo.'
                    : 'Every room at SpiceHome is designed to make you feel at home — not too lavish, not too bare. Just right for you to relax, unwind, and be ready for the next adventure.'}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Hosts */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="text-center mb-14">
            <SectionLabel>
              {lang === 'vi' ? 'Host của bạn' : 'Your hosts'}
            </SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-primary-text">
              {lang === 'vi' ? 'Gặp gỡ chúng tôi' : 'Meet us'}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Hải */}
            <AnimateOnScroll>
              <div className="bg-surface border border-border p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-playfair text-accent text-2xl">H</span>
                </div>
                <h3 className="font-playfair text-xl text-primary-text mb-1">Hải (Hailey)</h3>
                <p className="text-xs font-medium uppercase tracking-widest text-accent mb-4">
                  {lang === 'vi' ? 'Host chính' : 'Main Host'}
                </p>
                <p className="text-sm text-muted-text leading-relaxed mb-5">
                  {lang === 'vi'
                    ? 'Nói được tiếng Việt, tiếng Anh và giao tiếp được bằng tiếng Trung. Chuyên gợi ý ẩm thực địa phương, điểm tham quan và mọi thứ về Sài Gòn.'
                    : 'Speaks Vietnamese, English and communicative Mandarin. Specialises in local food recommendations, attractions, and all things Saigon.'}
                </p>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/84904955479"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-xs text-muted-text hover:text-accent transition-colors"
                  >
                    <MessageCircle size={13} className="text-accent" />
                    WhatsApp / Viber / Zalo
                  </a>
                  <a
                    href="tel:+84904955479"
                    className="flex items-center justify-center gap-2 text-xs text-muted-text hover:text-accent transition-colors"
                  >
                    <Phone size={13} className="text-accent" />
                    +84 904 955 479
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Thanh */}
            <AnimateOnScroll delay={100}>
              <div className="bg-surface border border-border p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-playfair text-accent text-2xl">T</span>
                </div>
                <h3 className="font-playfair text-xl text-primary-text mb-1">Thanh</h3>
                <p className="text-xs font-medium uppercase tracking-widest text-accent mb-4">
                  {lang === 'vi' ? 'Host hỗ trợ' : 'Support Host'}
                </p>
                <p className="text-sm text-muted-text leading-relaxed mb-5">
                  {lang === 'vi'
                    ? 'Hỗ trợ khách hàng và giải đáp các câu hỏi. Luôn sẵn sàng giúp đỡ bạn trong suốt thời gian lưu trú.'
                    : 'Guest support and answering enquiries. Always ready to help you throughout your stay.'}
                </p>
                <div className="space-y-2">
                  <p className="flex items-center justify-center gap-2 text-xs text-muted-text">
                    <MessageCircle size={13} className="text-accent" />
                    Zalo
                  </p>
                  <a
                    href="tel:0979804343"
                    className="flex items-center justify-center gap-2 text-xs text-muted-text hover:text-accent transition-colors"
                  >
                    <Phone size={13} className="text-accent" />
                    0979 80 4343
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <SectionLabel>
              {lang === 'vi' ? 'Cam kết của chúng tôi' : 'Our values'}
            </SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-primary-text mb-10">
              {lang === 'vi'
                ? '"Nơi lưu trú ấm cúng, giữa thành phố sôi động"'
                : '"A cozy home in a vibrant city"'}
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {[
              {
                vi: { h: 'Chân thật', p: 'Không hứa hẹn vượt thực tế. Những gì bạn thấy chính là những gì bạn nhận được.' },
                en: { h: 'Authentic', p: 'No over-promising. What you see is exactly what you get.' },
              },
              {
                vi: { h: 'Tận tâm', p: 'Mọi yêu cầu đều được phản hồi nhanh chóng. Sự hài lòng của bạn là ưu tiên số 1.' },
                en: { h: 'Attentive', p: 'Every request gets a quick response. Your satisfaction is priority number one.' },
              },
              {
                vi: { h: 'Am hiểu địa phương', p: 'Chúng tôi sống ở đây. Những gợi ý của chúng tôi đến từ kinh nghiệm thực tế.' },
                en: { h: 'Local knowledge', p: 'We live here. Our recommendations come from real everyday experience.' },
              },
            ].map((v, i) => {
              const c = lang === 'vi' ? v.vi : v.en
              return (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="border-l-2 border-accent pl-5">
                    <h3 className="font-playfair text-lg text-primary-text mb-2">{c.h}</h3>
                    <p className="text-sm text-muted-text leading-relaxed">{c.p}</p>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <SectionLabel>
              {lang === 'vi' ? 'Liên hệ' : 'Get in touch'}
            </SectionLabel>
            <h2 className="font-playfair text-3xl text-primary-text mb-8">
              {lang === 'vi' ? 'Chúng tôi luôn ở đây' : 'We\'re always here'}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100} className="space-y-4">
            <a
              href="https://wa.me/84904955479"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-border bg-surface p-4
                         hover:border-accent hover:bg-accent/5 transition-colors duration-200 group"
            >
              <MessageCircle size={18} className="text-accent" />
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-text">WhatsApp / Viber / Zalo</p>
                <p className="text-sm text-primary-text group-hover:text-accent transition-colors">+84 904 955 479</p>
              </div>
            </a>
            <a
              href="mailto:spicehomevn@gmail.com"
              className="flex items-center justify-center gap-3 border border-border bg-surface p-4
                         hover:border-accent hover:bg-accent/5 transition-colors duration-200 group"
            >
              <Mail size={18} className="text-accent" />
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-text">Email</p>
                <p className="text-sm text-primary-text group-hover:text-accent transition-colors">spicehomevn@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.airbnb.com.vn/users/show/spicehomevn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-border bg-surface p-4
                         hover:border-accent hover:bg-accent/5 transition-colors duration-200 group"
            >
              <Phone size={18} className="text-accent" />
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-text">Airbnb</p>
                <p className="text-sm text-primary-text group-hover:text-accent transition-colors">
                  {lang === 'vi' ? 'Xem trang Airbnb của chúng tôi' : 'View our Airbnb profile'}
                </p>
              </div>
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
