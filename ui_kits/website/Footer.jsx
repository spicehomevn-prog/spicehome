// SpiceHome website — Footer
function Footer({ lang, setRoute }) {
  const { Button, Icon } = window.SpiceHomeDesignSystem_e751f1
  const links = SH_NAV_LINKS
  const col = { fontFamily: 'var(--font-label)', fontSize: 'var(--text-xs)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'rgba(255,255,255,0.4)', margin: '0 0 var(--space-4)' }
  const contact = { display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.6)' }
  return (
    <footer style={{ background: 'var(--bg-inverse)', color: '#fff' }}>
      <div style={{ height: 1, background: 'var(--accent)' }} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-14) var(--gutter)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-10)' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '0 0 var(--space-3)' }}>Spice<span style={{ color: 'var(--accent)' }}>Home</span></p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
            {lang === 'vi' ? 'Homestay ấm cúng, chân thật ngay giữa lòng Phú Nhuận — Sài Gòn.' : 'A warm, authentic homestay in the heart of Phú Nhuận, Saigon.'}
          </p>
        </div>
        <div>
          <p style={col}>{lang === 'vi' ? 'Trang' : 'Pages'}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {links.map(l => (
              <li key={l.key}><button onClick={() => setRoute(l.key)} className="sh-footlink" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.6)', transition: 'var(--transition-color)', fontFamily: 'var(--font-body)' }}>{lang === 'vi' ? l.vi : l.en}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <p style={col}>{lang === 'vi' ? 'Liên hệ' : 'Contact'}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <li style={{ ...contact, alignItems: 'flex-start' }}><Icon name="map-pin" size={15} style={{ color: 'var(--accent)', marginTop: 2 }} /><span>Phú Nhuận, Hồ Chí Minh</span></li>
            <li style={contact}><Icon name="phone" size={15} style={{ color: 'var(--accent)' }} /><span>(+84) 0904 955 479</span></li>
            <li style={contact}><Icon name="phone" size={15} style={{ color: 'var(--accent)' }} /><span>(+84) 0355 608 623 · (+84) 0979 80 4343</span></li>
            <li style={contact}><Icon name="mail" size={15} style={{ color: 'var(--accent)' }} /><span>spicehomevn@gmail.com</span></li>
          </ul>
        </div>
        <div>
          <p style={col}>{lang === 'vi' ? 'Đặt phòng' : 'Book a Stay'}</p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.6)', margin: '0 0 var(--space-4)', lineHeight: 'var(--leading-relaxed)' }}>
            {lang === 'vi' ? 'Đặt phòng nhanh chóng, tiện lợi và an toàn.' : 'Book quickly, conveniently and safely.'}
          </p>
          <Button variant="accentOutline" size="sm" href="https://beacons.ai/spicehomesaigon">{lang === 'vi' ? 'Đặt Phòng' : 'Book Now'}</Button>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-on-inverse-faint)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-5) var(--gutter)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8 }}>
          <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.3)', margin: 0 }}>© 2026 SpiceHome Homestay. All rights reserved.</p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.3)', margin: 0 }}>Phú Nhuận, Hồ Chí Minh City, Vietnam</p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.sh-footlink:hover { color: var(--accent) !important; }` }} />
    </footer>
  )
}
window.SH_Footer = Footer
