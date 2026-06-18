'use client'

import { useState } from 'react'
import Image from 'next/image'
import { REVIEWS, type Review } from '@/lib/data/reviews'
import { useLang } from '@/context/LanguageContext'

type TestimonialsProps = {
  bgImage?: string
  reviews?: Review[]
  airbnbUrl?: string
  heading?: string
  eyebrow?: string
}

const ACCENT_BORDER = '1px solid var(--accent)'

function Stars({ rating = 5, size = 15 }: { rating?: number; size?: number }) {
  return (
    <span role="img" aria-label={`${rating} out of 5`} style={{ display: 'inline-flex', gap: 2 }}>
      {[0, 1, 2, 3, 4].map((i) => {
        const on = i < Math.round(rating)
        return (
          <svg
            key={i} width={size} height={size} viewBox="0 0 24 24"
            fill={on ? 'var(--accent)' : 'none'} stroke={on ? 'var(--accent)' : '#C9C3B8'}
            strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        )
      })}
    </span>
  )
}

function Monogram({ initial, size = 42 }: { initial: string; size?: number }) {
  return (
    <span
      style={{
        width: size, height: size, flexShrink: 0, borderRadius: 'var(--radius-pill)',
        background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)',
        fontSize: size * 0.42, lineHeight: 1,
      }}
    >
      {initial}
    </span>
  )
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 500,
  letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
}

function ReviewCard({ review }: { review: Review }) {
  const [vi, setVi] = useState(false)
  const meta = [review.country, review.date].filter(Boolean).join(' · ')
  const canTranslate = Boolean(review.textVi)

  return (
    <figure
      className="sh-review"
      style={{
        background: 'var(--bg-surface)', border: 'var(--border)', margin: 0,
        padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        breakInside: 'avoid',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <Stars rating={review.rating} />
        <span style={{ ...labelStyle, color: 'var(--accent)' }}>Room {review.room}</span>
      </div>

      <blockquote
        style={{
          margin: 0, color: 'var(--text-body)', fontSize: 'var(--text-lg)',
          lineHeight: 'var(--leading-relaxed)', fontFamily: 'var(--font-display)', textWrap: 'pretty' as React.CSSProperties['textWrap'],
        }}
      >
        {'“' + (vi ? review.textVi : review.text) + '”'}
      </blockquote>

      {canTranslate && (
        <button
          type="button"
          onClick={() => setVi((v) => !v)}
          style={{
            ...labelStyle, alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center',
            gap: 6, background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer',
            color: 'var(--accent)',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
            <path d="M5 8l6 6" /><path d="M4 14l6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="M22 22l-5-10-5 10" /><path d="M14 18h6" />
          </svg>
          {vi ? 'Xem bản gốc' : 'Dịch sang Tiếng Việt'}
        </button>
      )}

      <figcaption style={{ marginTop: 'auto', paddingTop: 'var(--space-2)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Monogram initial={review.initial} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: 'var(--text-base)' }}>{review.name}</span>
            {meta && <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>{meta}</span>}
          </div>
        </div>
        <a
          href={`https://www.airbnb.com.vn/h/spicehome${review.room}`}
          target="_blank" rel="noopener noreferrer"
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--accent)" style={{ display: 'block' }}><circle cx="12" cy="12" r="5" /></svg>
          <span style={{ ...labelStyle, color: 'var(--text-muted)' }}>Verified review on Airbnb</span>
        </a>
      </figcaption>
    </figure>
  )
}

export default function Testimonials({
  bgImage = '/images/common-area.jpg',
  reviews = REVIEWS,
  airbnbUrl = 'https://www.airbnb.com/users/show/479055797',
  heading,
  eyebrow,
}: TestimonialsProps) {
  const { lang } = useLang()

  const resolvedHeading = heading ?? (lang === 'vi'
    ? 'Khách nói gì sau khi lưu trú tại SpiceHome'
    : 'What guests say after staying with us')
  const resolvedEyebrow = eyebrow ?? (lang === 'vi' ? 'Câu chuyện của khách' : 'Guest Stories')
  const seeAllLabel = lang === 'vi' ? 'Xem tất cả đánh giá trên Airbnb' : 'See all reviews on Airbnb'
  const subLabel = lang === 'vi'
    ? 'Mỗi đánh giá dưới đây là lời thật từ khách đã ở tại SpiceHome — thu thập từ các listing Airbnb của chúng tôi.'
    : 'Every word below is a real review left on our Airbnb listings — gathered from guests across our rooms.'

  return (
    <section id="reviews" aria-label={resolvedEyebrow}>
      <style dangerouslySetInnerHTML={{ __html: `
        .sh-wall { column-gap: var(--space-6); column-count: 1; }
        @media (min-width: 700px)  { .sh-wall { column-count: 2; } }
        @media (min-width: 1040px) { .sh-wall { column-count: 3; } }
        .sh-wall > * { margin-bottom: var(--space-6); break-inside: avoid; }
        .sh-review { transition: box-shadow var(--duration-medium, .3s) var(--ease-out, ease-out); }
        .sh-review:hover { box-shadow: var(--shadow-hover); }
      ` }} />

      {/* Header band over the common-area photo */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 380, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={bgImage} alt="" fill className="object-cover" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,26,24,0.55), rgba(26,26,24,0.78))' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 720, padding: 'var(--space-16) var(--gutter)' }}>
          <p style={{ ...labelStyle, color: 'var(--accent)', margin: '0 0 var(--space-4)' }}>{resolvedEyebrow}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.15, color: '#fff', fontSize: 'clamp(1.875rem, 4vw, 2.75rem)' }}>
            {resolvedHeading}
          </h2>
        </div>
      </div>

      {/* Testimonial wall */}
      <div style={{ background: 'var(--bg-page)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto var(--space-12)', color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)' }}>
            {subLabel}
          </p>

          <div className="sh-wall">
            {reviews.map((r, i) => (
              <ReviewCard key={`${r.name}-${i}`} review={r} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
            <a
              href={airbnbUrl}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '14px 28px', border: ACCENT_BORDER,
                color: 'var(--text-heading)', textDecoration: 'none', ...labelStyle,
              }}
            >
              {seeAllLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
