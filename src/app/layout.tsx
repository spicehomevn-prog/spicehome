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
  metadataBase: new URL('https://spicehomevn.netlify.app'),
  title: 'SpiceHome Homestay — Phú Nhuận, Sài Gòn',
  description:
    'Homestay ấm cúng giữa lòng Phú Nhuận, TP. Hồ Chí Minh. Cozy and authentic homestay in the heart of Phú Nhuận, Ho Chi Minh City.',
  keywords: ['homestay', 'saigon', 'ho chi minh city', 'phu nhuan', 'spicehome', 'vietnam'],
  openGraph: {
    title: 'SpiceHome Homestay',
    description: 'Cozy authentic homestay in Phú Nhuận, Saigon',
    type: 'website',
    url: 'https://spicehomevn.netlify.app',
    siteName: 'SpiceHome Homestay',
    locale: 'vi_VN',
    images: [
      {
        url: '/images/common/area3.jpg',
        alt: 'SpiceHome Homestay — Khu vực chung, Phú Nhuận, Sài Gòn',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpiceHome Homestay',
    description: 'Cozy authentic homestay in Phú Nhuận, Saigon',
    images: ['/images/common/area3.jpg'],
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
