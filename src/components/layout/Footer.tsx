'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export function Footer() {
  const { lang } = useLang()

  return (
    <footer className="bg-dark text-white">
      {/* Accent top rule */}
      <div className="h-px bg-accent" />

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-playfair text-2xl mb-3">
            Spice<span className="text-accent">Home</span>
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            {lang === 'vi'
              ? 'Homestay ấm cúng, chân thật ngay giữa lòng Phú Nhuận — Sài Gòn.'
              : 'A warm, authentic homestay in the heart of Phú Nhuận, Saigon.'}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
            {lang === 'vi' ? 'Trang' : 'Pages'}
          </p>
          <ul className="space-y-2">
            {[
              { href: '/',             vi: 'Trang Chủ',    en: 'Home' },
              { href: '/rooms',        vi: 'Phòng',         en: 'Rooms' },
              { href: '/local-guide',  vi: 'Khám Phá',      en: 'Local Guide' },
              { href: '/house-manual', vi: 'Hướng Dẫn',     en: 'House Manual' },
              { href: '/about',        vi: 'Về Chúng Tôi',  en: 'About' },
            ].map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                >
                  {lang === 'vi' ? link.vi : link.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
            {lang === 'vi' ? 'Liên hệ' : 'Contact'}
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin size={15} className="mt-0.5 text-accent shrink-0" />
              <span>Phú Nhuận, Hồ Chí Minh</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Phone size={15} className="text-accent shrink-0" />
              <a href="tel:+84904955479" className="hover:text-accent transition-colors">
                +84 904 955 479
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Phone size={15} className="text-accent shrink-0" />
              <a href="tel:+84979804343" className="hover:text-accent transition-colors">
                +84 979 80 4343
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Phone size={15} className="text-accent shrink-0" />
              <a href="tel:+84355608623" className="hover:text-accent transition-colors">
                +84 355 608 623
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Mail size={15} className="text-accent shrink-0" />
              <a href="mailto:spicehomevn@gmail.com" className="hover:text-accent transition-colors">
                spicehomevn@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Book */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
            {lang === 'vi' ? 'Đặt phòng' : 'Book a Stay'}
          </p>
          <p className="text-sm text-white/60 mb-4 leading-relaxed">
            {lang === 'vi'
              ? 'Đặt phòng nhanh chóng tiện lợi và an toàn'
              : 'Book quickly, conveniently and safely.'}
          </p>
          <a
            href="https://beacons.ai/spicehomesaigon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-medium uppercase tracking-widest border border-accent text-accent
                       px-5 py-2 hover:bg-accent hover:text-white transition-colors duration-200"
          >
            {lang === 'vi' ? 'Đặt Phòng' : 'Book Now'}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} SpiceHome Homestay. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Phú Nhuận, Hồ Chí Minh City, Vietnam
          </p>
        </div>
      </div>
    </footer>
  )
}
