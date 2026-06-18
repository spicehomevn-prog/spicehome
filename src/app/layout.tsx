import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { GalleryProvider } from '@/context/GalleryContext'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SpiceHome Homestay — Phú Nhuận, Sài Gòn',
  description:
    'Homestay ấm cúng giữa lòng Phú Nhuận, TP. Hồ Chí Minh. Cozy and authentic homestay in the heart of Phú Nhuận, Ho Chi Minh City.',
  keywords: ['homestay', 'saigon', 'ho chi minh city', 'phu nhuan', 'spicehome', 'vietnam'],
  openGraph: {
    title: 'SpiceHome Homestay',
    description: 'Cozy authentic homestay in Phú Nhuận, Saigon',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <LanguageProvider>
          <GalleryProvider>
            {children}
          </GalleryProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
