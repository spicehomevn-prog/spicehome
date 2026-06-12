import React from 'react'
import { Tag } from '../core/Tag.jsx'
import { Icon } from '../core/Icon.jsx'

/**
 * RoomCard — the featured-room card from the homepage / rooms list.
 * `card` layout = compact image + highlight chips. `list` = wide row with
 * full description, meta, amenities and booking buttons.
 */
export function RoomCard({ room, layout = 'card', onOpenGallery, lang = 'en' }) {
  const t = (b) => (b && typeof b === 'object' ? b[lang] : b)
  const roomLabel = lang === 'vi' ? `Phòng ${room.number}` : `Room ${room.number}`

  const ImageButton = (
    <button
      type="button"
      onClick={() => onOpenGallery && onOpenGallery(room)}
      style={{
        position: 'relative', display: 'block', width: '100%', height: '100%',
        padding: 0, border: 'none', background: 'none', cursor: 'zoom-in', overflow: 'hidden',
      }}
      aria-label={`${lang === 'vi' ? 'Xem ảnh' : 'View photos'} ${roomLabel}`}
      className="sh-roomimg"
    >
      <img src={room.images[0]} alt={t(room.name)} className="sh-roomimg-img"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform var(--duration-medium) var(--ease-out)' }} />
      {room.images.length > 1 && (
        <span style={{
          position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.6)',
          color: '#fff', fontSize: 'var(--text-xs)', display: 'inline-flex', alignItems: 'center',
          gap: 6, padding: '0.25rem 0.625rem', fontFamily: 'var(--font-body)',
        }}>
          <Icon name="images" size={12} />{room.images.length}
        </span>
      )}
    </button>
  )

  const hoverCss = `
    .sh-roomcard { transition: box-shadow var(--duration-medium) ease; }
    .sh-roomcard:hover { box-shadow: var(--shadow-hover); }
    .sh-roomcard:hover .sh-roomimg-img { transform: scale(1.05); }
  `

  if (layout === 'list') {
    return (
      <div className="sh-roomcard" style={{ display: 'flex', flexWrap: 'wrap', border: 'var(--border)', background: 'var(--bg-surface)' }}>
        <style dangerouslySetInnerHTML={{ __html: hoverCss }} />
        <div style={{ position: 'relative', flex: '1 1 320px', minHeight: 300 }}>{ImageButton}</div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'var(--space-8)', flex: '1 1 340px' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-sm)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--accent)', margin: '0 0 var(--space-3)' }}>{roomLabel}</p>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', margin: '0 0 var(--space-4)' }}>{t(room.tagline)}</p>
          <p style={{ color: 'var(--text-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 var(--space-6)', whiteSpace: 'pre-line' }}>{t(room.description)}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="bed-double" size={15} style={{ color: 'var(--accent)' }} />{t(room.bed)}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="users" size={15} style={{ color: 'var(--accent)' }} />{lang === 'vi' ? `Tối đa ${room.capacity} khách` : `Up to ${room.capacity} guests`}</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {(room.amenities || []).slice(0, 5).map((a, i) => <Tag key={i}>{t(a)}</Tag>)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="sh-roomcard" style={{ background: 'var(--bg-surface)', border: 'var(--border)' }}>
      <style dangerouslySetInnerHTML={{ __html: hoverCss }} />
      <div style={{ position: 'relative', height: 224 }}>{ImageButton}</div>
      <div style={{ padding: 'var(--space-4) var(--space-6)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-sm)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--accent)', margin: '0 0 var(--space-3)' }}>{roomLabel}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {(room.highlights || []).map((h, i) => <Tag key={i}>{t(h)}</Tag>)}
        </div>
      </div>
    </div>
  )
}
