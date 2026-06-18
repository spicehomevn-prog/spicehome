'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { CalendarSource } from '@/lib/data/rooms'

interface Props {
  calendarSources: CalendarSource[]
  lang: 'vi' | 'en'
}

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY

// Returns every YYYY-MM-DD string between start (inclusive) and end (exclusive).
// Uses UTC midnight to avoid local-timezone shifts (e.g. UTC+7 would push dates back one day).
function expandDateRange(startStr: string, endStr: string): string[] {
  const dates: string[] = []
  const cur = new Date(startStr + 'T00:00:00Z')
  const end = new Date(endStr + 'T00:00:00Z')
  while (cur < end) {
    dates.push(cur.toISOString().slice(0, 10))
    cur.setUTCDate(cur.getUTCDate() + 1)
  }
  return dates
}

// In dev: set NEXT_PUBLIC_FUNCTION_URL=http://localhost:8888 in .env.local and run node dev-functions.js
// In production (Netlify): leave unset — uses the relative path automatically
const PROXY = (process.env.NEXT_PUBLIC_FUNCTION_URL ?? '') + '/.netlify/functions/ical-proxy'

async function fetchBookedDates(
  sources: CalendarSource[],
  year: number,
  month: number, // 0-indexed
): Promise<Set<string>> {
  const monthStart = `${year}-${String(month + 1).padStart(2, '0')}-01`
  const nextMonth = new Date(year, month + 1, 1)
  const monthEnd = `${nextMonth.getFullYear()}-${String(nextMonth.getMonth() + 1).padStart(2, '0')}-01`

  const booked = new Set<string>()

  await Promise.all(
    sources.map(async (source) => {
      try {
        if (source.type === 'ical') {
          // Fetch Airbnb iCal via Netlify proxy (avoids CORS)
          const res = await fetch(`${PROXY}?url=${encodeURIComponent(source.id)}`)
          if (!res.ok) return
          const events: Array<{ start: string; end: string }> = await res.json()
          for (const { start, end } of events) {
            for (const d of expandDateRange(start, end)) {
              if (d >= monthStart && d < monthEnd) booked.add(d)
            }
          }
        } else {
          // Google Calendar API (personal/group calendars, public)
          if (!API_KEY || API_KEY === 'YOUR_KEY_HERE') return
          const url = new URL(
            `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(source.id)}/events`,
          )
          url.searchParams.set('key', API_KEY)
          url.searchParams.set('timeMin', new Date(year, month, 1).toISOString())
          url.searchParams.set('timeMax', new Date(year, month + 1, 1).toISOString())
          url.searchParams.set('singleEvents', 'true')
          url.searchParams.set('maxResults', '100')

          const res = await fetch(url.toString())
          if (!res.ok) return

          const data = await res.json()
          const items: Array<{
            summary?: string
            start: { date?: string; dateTime?: string }
            end: { date?: string; dateTime?: string }
          }> = data.items ?? []

          for (const event of items) {
            if (source.filter && !event.summary?.startsWith(source.filter)) continue
            const startDate = event.start.date ?? event.start.dateTime?.slice(0, 10)
            const endDate = event.end.date ?? event.end.dateTime?.slice(0, 10)
            if (!startDate || !endDate) continue
            for (const d of expandDateRange(startDate, endDate)) {
              booked.add(d)
            }
          }
        }
      } catch {
        // silently ignore per-source errors
      }
    }),
  )

  return booked
}

const VI_MONTHS = [
  'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
  'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',
]
const VI_DAYS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
const EN_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export function AvailabilityCalendar({ calendarSources, lang }: Props) {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [bookedDates, setBookedDates] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)

  const load = useCallback(async (y: number, m: number) => {
    setLoading(true)
    const dates = await fetchBookedDates(calendarSources, y, m)
    setBookedDates(dates)
    setLoading(false)
  }, [calendarSources])

  useEffect(() => {
    load(year, month)
  }, [load, year, month])

  const prevMonth = () => {
    if (year === today.getFullYear() && month === today.getMonth()) return
    if (month === 0) { setYear(y => y - 1); setMonth(11) }
    else setMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0) }
    else setMonth(m => m + 1)
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDow = new Date(year, month, 1).getDay() // 0=Sun
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const isCurrentMonth = year === today.getFullYear() && month === today.getMonth()

  const dayLabels = lang === 'vi' ? VI_DAYS : EN_DAYS
  const monthLabel = lang === 'vi'
    ? `${VI_MONTHS[month]} ${year}`
    : new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  // Build grid: leading empty cells + day cells
  const cells: Array<number | null> = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  // Pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <div className="border border-border bg-surface p-6 md:p-8 max-w-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          disabled={isCurrentMonth}
          aria-label={lang === 'vi' ? 'Tháng trước' : 'Previous month'}
          className="w-8 h-8 flex items-center justify-center text-muted-text hover:text-primary-text disabled:opacity-25 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="font-medium text-primary-text text-sm uppercase tracking-widest">
          {loading ? '···' : monthLabel}
        </span>
        <button
          onClick={nextMonth}
          aria-label={lang === 'vi' ? 'Tháng sau' : 'Next month'}
          className="w-8 h-8 flex items-center justify-center text-muted-text hover:text-primary-text transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 mb-2">
        {dayLabels.map(d => (
          <div key={d} className="text-center text-xs text-muted-text uppercase tracking-wide py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className={`grid grid-cols-7 transition-opacity duration-200 ${loading ? 'opacity-40' : 'opacity-100'}`}>
        {cells.map((day, i) => {
          if (day === null) return <div key={`e-${i}`} />

          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
          const isBooked = bookedDates.has(dateStr)
          const isToday = dateStr === todayStr
          const isPast = dateStr < todayStr

          return (
            <div
              key={dateStr}
              className={[
                'relative flex items-center justify-center aspect-square text-sm select-none',
                isPast && !isBooked ? 'text-muted-text/35' : '',
                isBooked ? 'bg-accent/10 text-accent font-medium' : '',
                isToday ? 'ring-1 ring-inset ring-accent' : '',
                !isPast && !isBooked ? 'text-primary-text' : '',
              ].join(' ')}
            >
              {day}
              {isBooked && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent/60" />
              )}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border">
        <span className="flex items-center gap-1.5 text-xs text-muted-text">
          <span className="inline-block w-3 h-3 bg-accent/10 ring-1 ring-accent/30" />
          {lang === 'vi' ? 'Đã có khách' : 'Booked'}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-muted-text">
          <span className="inline-block w-3 h-3 border border-border" />
          {lang === 'vi' ? 'Còn trống' : 'Available'}
        </span>
        {(!API_KEY || API_KEY === 'YOUR_KEY_HERE') && (
          <span className="ml-auto text-xs text-muted-text/60 italic">
            {lang === 'vi' ? '(ngoài sàn chưa kết nối)' : '(direct bookings not connected)'}
          </span>
        )}
      </div>
    </div>
  )
}
