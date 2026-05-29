'use client'

import { MapPin, Clock, Lightbulb, ExternalLink } from 'lucide-react'
import type { GuideItem } from '@/lib/data/guide'
import { useLang } from '@/context/LanguageContext'

interface Props {
  item: GuideItem
}

export function GuideCard({ item }: Props) {
  const { lang } = useLang()

  return (
    <div className="bg-surface border border-border p-6 hover:shadow-md transition-shadow duration-300">
      <h3 className="font-playfair text-lg text-primary-text mb-2">{item.name[lang]}</h3>
      <p className="text-sm text-muted-text leading-relaxed mb-4">{item.description[lang]}</p>

      {item.address && (
        <div className="flex items-start gap-2 text-xs text-muted-text mb-2">
          <MapPin size={13} className="text-accent mt-0.5 shrink-0" />
          <span>{item.address}</span>
        </div>
      )}

      {item.hours && (
        <div className="flex items-center gap-2 text-xs text-muted-text mb-2">
          <Clock size={13} className="text-accent shrink-0" />
          <span>{item.hours}</span>
        </div>
      )}

      {item.tip && (
        <div className="flex items-start gap-2 text-xs text-primary-text/70 bg-background border border-border p-3 mt-3">
          <Lightbulb size={13} className="text-accent mt-0.5 shrink-0" />
          <span>{item.tip[lang]}</span>
        </div>
      )}

      {item.mapsUrl && (
        <a
          href={item.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium uppercase tracking-widest
                     text-accent hover:text-accent-hover transition-colors duration-200"
        >
          {lang === 'vi' ? 'Xem bản đồ' : 'View on Map'}
          <ExternalLink size={11} />
        </a>
      )}
    </div>
  )
}
