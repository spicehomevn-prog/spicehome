import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LanguageProvider } from '@/context/LanguageContext'

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
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
