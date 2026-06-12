// SpiceHome website — Hero (homepage)
function Hero({ lang, setRoute }) {
  const { Button, Icon } = window.SpiceHomeDesignSystem_e751f1
  return (
    <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <img src="../../assets/images/common/area3.jpg" alt="SpiceHome Homestay" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-scrim)' }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 var(--gutter)', maxWidth: 880, margin: '0 auto' }}>
        <p className="hero-text" style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-xs)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'rgba(196,119,59,0.9)', marginBottom: 'var(--space-6)' }}>
          {lang === 'vi' ? 'Phú Nhuận · Hồ Chí Minh' : 'Phú Nhuận · Ho Chi Minh City'}
        </p>
        <h1 className="hero-text-delay" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3rem)', lineHeight: 1.15, marginBottom: 'var(--space-6)' }}>
          {lang === 'vi' ? <>Không gian lưu trú ấm cúng<br/>giữa lòng Sài Gòn</> : <>Your cozy home<br/>in the heart of Saigon</>}
        </h1>
        <p className="hero-text-delay" style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: 560, margin: '0 auto var(--space-10)', lineHeight: 'var(--leading-relaxed)' }}>
          {lang === 'vi' ? 'Không chỉ là nơi lưu trú, mà là một góc Sài Gòn ấm áp để bạn tận hưởng và nghỉ ngơi.' : "Cozy, authentic stays — we don't just rent you a room, we share our Saigon with you."}
        </p>
        <div className="hero-cta" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)' }}>
          <Button variant="primary" onClick={() => setRoute('rooms')}>{lang === 'vi' ? 'Xem Phòng' : 'Explore Rooms'}</Button>
          <Button variant="ghostOnDark" href="https://www.airbnb.com/users/show/479055797">{lang === 'vi' ? 'Xem trên Airbnb' : 'View on Airbnb'}</Button>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
        <Icon name="chevron-down" size={28} style={{ color: 'rgba(255,255,255,0.5)' }} className="sh-bounce" />
      </div>
      <style dangerouslySetInnerHTML={{ __html: `@keyframes shBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}} .sh-bounce{animation:shBounce 1.6s ease-in-out infinite}` }} />
    </section>
  )
}
window.SH_Hero = Hero
