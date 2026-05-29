'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

const navLinks = [
  { href: '/',             vi: 'Trang Chủ',    en: 'Home' },
  { href: '/rooms',        vi: 'Phòng',         en: 'Rooms' },
  { href: '/local-guide',  vi: 'Khám Phá',      en: 'Local Guide' },
  { href: '/house-manual', vi: 'Hướng Dẫn',     en: 'House Manual' },
  { href: '/about',        vi: 'Về Chúng Tôi',  en: 'About' },
]

export function Navbar() {
  const { lang, setLang } = useLang()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-dark">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-playfair text-white text-xl tracking-wide">
          Spice<span className="text-accent">Home</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium uppercase tracking-widest transition-colors duration-200
                  ${active
                    ? 'text-accent'
                    : 'text-white/80 hover:text-accent'
                  }`}
              >
                {lang === 'vi' ? link.vi : link.en}
              </Link>
            )
          })}
        </div>

        {/* Right side: language toggle + book CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            {lang === 'vi' ? 'EN' : 'VI'}
          </button>

          <a
            href="https://beacons.ai/spicehomesaigon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium uppercase tracking-widest border border-white/60 text-white px-4 py-2
                       hover:bg-accent hover:border-accent transition-colors duration-200"
          >
            {lang === 'vi' ? 'Đặt Phòng' : 'Book Now'}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            {lang === 'vi' ? 'EN' : 'VI'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-dark border-t border-white/10">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-sm font-medium uppercase tracking-widest border-b border-white/5
                transition-colors duration-200
                ${pathname === link.href ? 'text-accent' : 'text-white/80 hover:text-accent'}`}
            >
              {lang === 'vi' ? link.vi : link.en}
            </Link>
          ))}
          <a
            href="https://beacons.ai/spicehomesaigon"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-4 text-sm font-medium uppercase tracking-widest text-accent"
          >
            {lang === 'vi' ? 'Đặt Phòng' : 'Book Now'}
          </a>
        </div>
      )}
    </nav>
  )
}
