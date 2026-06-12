// SpiceHome website — Gallery lightbox (recreation of GalleryModal)
function GalleryModal({ images, roomLabel, onClose }) {
  const { Icon } = window.SpiceHomeDesignSystem_e751f1
  const [current, setCurrent] = React.useState(0)
  const prev = React.useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length])
  const next = React.useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])
  React.useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose, prev, next])

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--overlay-deep)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div onClick={e => e.stopPropagation()} style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-4) var(--space-6)' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-label)', fontSize: 'var(--text-xs)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', margin: 0 }}>{roomLabel} — {current + 1} / {images.length}</p>
        <button onClick={onClose} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}><Icon name="x" size={24} /></button>
      </div>

      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: 980, height: '74vh', padding: '0 var(--space-16)', boxSizing: 'border-box' }}>
        <img src={images[current]} alt={`${roomLabel} ${current + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {images.length > 1 && (
        <>
          <button onClick={e => { e.stopPropagation(); prev() }} className="sh-galnav" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', border: 'none', cursor: 'pointer', color: '#fff', padding: 12, transition: 'var(--transition-color)' }}><Icon name="chevron-left" size={24} /></button>
          <button onClick={e => { e.stopPropagation(); next() }} className="sh-galnav" style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', border: 'none', cursor: 'pointer', color: '#fff', padding: 12, transition: 'var(--transition-color)' }}><Icon name="chevron-right" size={24} /></button>
        </>
      )}

      <div onClick={e => e.stopPropagation()} className="scrollbar-none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', gap: 8, justifyContent: 'center', padding: 'var(--space-3) var(--space-4)', overflowX: 'auto' }}>
        {images.map((src, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ flexShrink: 0, width: 56, height: 40, padding: 0, border: 'none', cursor: 'pointer', overflow: 'hidden', outline: i === current ? '2px solid var(--accent)' : 'none', opacity: i === current ? 1 : 0.4, transition: 'opacity var(--duration-fast) ease' }}>
            <img src={src} alt={`Thumb ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </button>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.sh-galnav:hover { background: var(--accent) !important; }` }} />
    </div>
  )
}
window.SH_GalleryModal = GalleryModal
