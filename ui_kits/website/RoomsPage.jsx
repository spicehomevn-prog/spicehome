// SpiceHome website — Rooms page
function RoomsPage({ lang, openGallery }) {
  const { SectionLabel, RoomCard, Button } = window.SpiceHomeDesignSystem_e751f1
  const Reveal = window.SH_Reveal
  const rooms = window.SH_DATA.rooms
  return (
    <>
      <section style={{ background: 'var(--bg-inverse)', padding: 'calc(var(--section-y)) var(--gutter)', textAlign: 'center' }}>
        <SectionLabel tone="light">{lang === 'vi' ? 'Phòng nghỉ' : 'Our Rooms'}</SectionLabel>
        <h1 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff', fontSize: 'clamp(2rem, 4.5vw, 2.75rem)', margin: 'var(--space-3) auto 0', maxWidth: 640 }}>{lang === 'vi' ? 'Tìm không gian phù hợp với bạn' : 'Find the space that suits you'}</h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: 'var(--space-5) auto 0', lineHeight: 'var(--leading-relaxed)' }}>{lang === 'vi' ? 'Mỗi phòng một cá tính riêng — tất cả đều ấm cúng, sạch sẽ và đầy ánh sáng tự nhiên.' : 'Each room has its own character — all cosy, spotless, and full of natural light.'}</p>
      </section>

      <section style={{ background: 'var(--bg-page)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {rooms.map((room, i) => (
            <Reveal key={room.number} delay={(i % 2) * 100}>
              <RoomCard room={room} layout="list" lang={lang} onOpenGallery={openGallery} />
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--bg-surface)', padding: 'var(--space-16) var(--gutter)', textAlign: 'center' }}>
        <Reveal style={{ maxWidth: 'var(--container-prose)', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: '0 0 var(--space-4)' }}>{lang === 'vi' ? 'Cần giúp chọn phòng?' : 'Need help choosing?'}</h2>
          <p style={{ color: 'var(--text-muted)', margin: '0 0 var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>{lang === 'vi' ? 'Nhắn tin cho Hải hoặc Thanh — chúng tôi sẽ tư vấn phòng phù hợp nhất với bạn.' : 'Message Hải or Thanh — we will help you pick the room that fits you best.'}</p>
          <Button variant="primary" href="https://wa.me/84904955479">{lang === 'vi' ? 'Nhắn tin cho Host' : 'Message the Host'}</Button>
        </Reveal>
      </section>
    </>
  )
}
window.SH_RoomsPage = RoomsPage
