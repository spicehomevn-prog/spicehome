import React from 'react'

/**
 * Lucide icon paths used across SpiceHome. The product uses lucide-react;
 * these are the exact lucide path definitions, embedded so design-system
 * components stay self-contained (React-only, no npm icon dependency).
 * Stroke style matches lucide defaults: 24×24, stroke-width 2, round caps.
 */
const PATHS = {
  home: 'M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z|M9 22V12h6v10',
  coffee: 'M10 2v2|M14 2v2|M6 2v2|M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1',
  map: 'M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3z|M9 3v15|M15 6v15',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01z',
  'chevron-down': 'm6 9 6 6 6-6',
  'chevron-left': 'm15 18-6-6 6-6',
  'chevron-right': 'm9 18 6-6-6-6',
  menu: 'M4 6h16|M4 12h16|M4 18h16',
  x: 'M18 6 6 18|M6 6l12 12',
  'map-pin': 'M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0Z|M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  phone: 'M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39',
  mail: 'm22 7-9 5.73a2 2 0 0 1-2.02 0L2 7|M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  'message-circle': 'M7.9 20A9 9 0 1 0 4 16.1L2 22z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2|M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z|M22 21v-2a4 4 0 0 0-3-3.87|M16 3.13a4 4 0 0 1 0 7.75',
  'bed-double': 'M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8|M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4|M12 4v6|M2 18h20',
  images: 'M18 22H4a2 2 0 0 1-2-2V6|m22 13-1.3-1.3a2.41 2.41 0 0 0-3.4 0L11 18|M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z|M6 2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z',
  utensils: 'M3 2v7c0 1.1.9 2 2 2h2.5a.5.5 0 0 0 .5-.5V2|M7 2v20|M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2z',
  'shopping-bag': 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z|M3 6h18|M16 10a4 4 0 0 1-8 0',
  landmark: 'M3 22h18|M6 18v-7|M10 18v-7|M14 18v-7|M18 18v-7|M12 2 20 7H4z',
  bus: 'M8 6v6|M15 6v6|M2 12h19.6|M18 18h3a1 1 0 0 0 1-1v-5a8 8 0 0 0-8-8H6a4 4 0 0 0-4 4v9a1 1 0 0 0 1 1h2|M9 18h6|M5 18a2 2 0 1 0 0 .01|M18 18a2 2 0 1 0 0 .01',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z|M12 6v6l4 2',
  lightbulb: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5|M9 18h6|M10 22h4',
  'external-link': 'M15 3h6v6|M10 14 21 3|M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
}

/** A single Lucide-style stroke icon. */
export function Icon({ name, size = 20, strokeWidth = 2, className = '', style = {}, ...rest }) {
  const d = PATHS[name]
  if (!d) return null
  const segs = d.split('|')
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'block', flexShrink: 0, ...style }}
      aria-hidden="true"
      {...rest}
    >
      {segs.map((seg, i) => <path key={i} d={seg} />)}
    </svg>
  )
}
