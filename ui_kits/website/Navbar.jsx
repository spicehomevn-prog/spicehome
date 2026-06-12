// SpiceHome website — Navbar
const SH_NAV_LINKS = [
  { key: 'home',   vi: 'Trang Chủ',   en: 'Home' },
  { key: 'rooms',  vi: 'Phòng',        en: 'Rooms' },
  { key: 'guide',  vi: 'Khám Phá',     en: 'Local Guide' },
  { key: 'about',  vi: 'Về Chúng Tôi', en: 'About' },
]

function Navbar({ lang, setLang, route, setRoute }) {
  const { LangToggle, Button } = window.SpiceHomeDesignSystem_e751f1
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg-inverse)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)', height: 'var(--navbar-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => setRoute('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.25rem', letterSpacing: '0.03em' }}>
          Spice<span style={{ color: 'var(--accent)' }}>Home</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
          {SH_NAV_LINKS.map(l => {
            const active = route === l.key
            return (
              <button key={l.key} onClick={() => setRoute(l.key)} className="sh-navlink"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-label)', fontSize: 'var(--text-xs)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: active ? 'var(--accent)' : 'rgba(255,255,255,0.8)', transition: 'var(--transition-color)' }}>
                {lang === 'vi' ? l.vi : l.en}
              </button>
            )
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <LangToggle lang={lang} onChange={setLang} />
          <Button variant="ghostOnDark" size="sm" href="https://beacons.ai/spicehomesaigon">{lang === 'vi' ? 'Đặt Phòng' : 'Book Now'}</Button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.sh-navlink:hover { color: var(--accent) !important; }` }} />
    </nav>
  )
}
window.SH_Navbar = Navbar
