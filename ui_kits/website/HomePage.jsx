// SpiceHome website — Home page
function HomePage({ lang, setRoute, openGallery }) {
  const { SectionLabel, Button, RoomCard, Icon } = window.SpiceHomeDesignSystem_e751f1
  const Reveal = window.SH_Reveal
  const featured = window.SH_DATA.rooms.filter(r => r.featured)

  const why = [
    { icon: 'home',   vi: { t: 'Không gian ấm cúng cảm giác như ở nhà', d: 'Phòng riêng tư, sạch sẽ — ấm cúng như ngôi nhà của chính bạn.' }, en: { t: 'Home-like comfort', d: 'Private, clean rooms — as warm and cosy as your own home.' } },
    { icon: 'coffee', vi: { t: 'Vị trí đắc địa', d: 'Ngay giữa Phú Nhuận — tiện đi lại, gần ăn uống, gần trung tâm.' }, en: { t: 'Prime location', d: 'Right in Phú Nhuận — easy commute, great food nearby, close to the centre.' } },
    { icon: 'map',    vi: { t: 'Host am hiểu địa phương', d: 'Hải và Thanh sẵn sàng gợi ý quán ăn, điểm vui chơi và mọi thứ bạn cần.' }, en: { t: 'Local hosts', d: 'Hải and Thanh are always ready with food tips and suggestions.' } },
    { icon: 'star',   vi: { t: 'Trải nghiệm chân thật', d: 'Không phải khách sạn — chúng tôi chia sẻ Sài Gòn với bạn như một người bạn địa phương.' }, en: { t: 'Authentic experience', d: 'Not a hotel — we share our Saigon with you like a local friend would.' } },
  ]
  const heading = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: 'var(--text-heading)', margin: 0 }

  return (
    <>
      <window.SH_Hero lang={lang} setRoute={setRoute} />

      {/* Brand intro */}
      <section style={{ background: 'var(--bg-surface)', padding: 'var(--section-y) var(--gutter)' }}>
        <Reveal style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel>{lang === 'vi' ? 'Về SpiceHome' : 'About SpiceHome'}</SectionLabel>
          <h2 style={{ ...heading, margin: 'var(--space-3) 0 var(--space-6)' }}>{lang === 'vi' ? 'Không chỉ là nơi ở — còn là trải nghiệm cuộc sống địa phương giữa lòng Sài Gòn' : 'Not just a place to stay — a local living experience in the heart of Saigon'}</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', fontSize: 'var(--text-lg)', margin: 0 }}>{lang === 'vi' ? 'SpiceHome không đơn thuần là nơi lưu trú. Chúng tôi muốn bạn cảm nhận Sài Gòn như một người dân địa phương — từ đường phố nhộn nhịp ban ngày đến con phố yên tĩnh ban đêm.' : 'SpiceHome is more than a place to sleep. We want you to experience Saigon like a local — from the bustling streets by day to the quiet neighbourhood at night.'}</p>
        </Reveal>
      </section>

      {/* Featured rooms */}
      <section style={{ background: 'var(--bg-page)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-14)' }}>
            <SectionLabel>{lang === 'vi' ? 'Phòng nổi bật' : 'Featured Rooms'}</SectionLabel>
            <h2 style={{ ...heading, marginTop: 'var(--space-3)' }}>{lang === 'vi' ? 'Không gian của bạn' : 'Your space'}</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {featured.map((room, i) => (
              <Reveal key={room.number} delay={i * 100}><RoomCard room={room} layout="card" lang={lang} onOpenGallery={openGallery} /></Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
            <Button variant="outline" onClick={() => setRoute('rooms')}>{lang === 'vi' ? 'Xem tất cả phòng' : 'View All Rooms'}</Button>
          </Reveal>
        </div>
      </section>

      {/* Why */}
      <section style={{ background: 'var(--bg-surface)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-14)' }}>
            <SectionLabel>{lang === 'vi' ? 'Tại sao chọn chúng tôi' : 'Why SpiceHome'}</SectionLabel>
            <h2 style={{ ...heading, marginTop: 'var(--space-3)' }}>{lang === 'vi' ? 'Chúng tôi khác biệt ra sao' : 'What makes us different'}</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-8)' }}>
            {why.map((item, i) => {
              const c = lang === 'vi' ? item.vi : item.en
              return (
                <Reveal key={i} delay={i * 100} style={{ textAlign: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-pill)', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)' }}><Icon name={item.icon} size={20} style={{ color: 'var(--accent)' }} /></div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', color: 'var(--text-heading)', margin: '0 0 var(--space-2)' }}>{c.t}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{c.d}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local guide teaser (dark band w/ image) */}
      <section style={{ position: 'relative', background: 'var(--bg-inverse)', padding: 'var(--section-y) var(--gutter)', overflow: 'hidden' }}>
        <img src="../../assets/images/common/area1.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
        <Reveal style={{ position: 'relative', zIndex: 1, maxWidth: 'var(--container-prose)', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel tone="light">{lang === 'vi' ? 'Khám phá xung quanh' : 'Explore the neighbourhood'}</SectionLabel>
          <h2 style={{ ...heading, color: '#fff', margin: 'var(--space-3) 0 var(--space-6)' }}>{lang === 'vi' ? 'Phú Nhuận — Sài Gòn nguyên bản' : 'Phú Nhuận — authentic Saigon'}</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 var(--space-10)' }}>{lang === 'vi' ? 'Từ bát phở sáng sớm đến phố đi bộ về khuya — chúng tôi đã chuẩn bị sẵn hướng dẫn địa phương dành riêng cho bạn.' : "From an early morning bowl of phở to a late-night walking street — we've put together a local guide just for you."}</p>
          <Button variant="primary" onClick={() => setRoute('guide')}>{lang === 'vi' ? 'Xem Hướng Dẫn Địa Phương' : 'Explore Local Guide'}</Button>
        </Reveal>
      </section>

      {/* Book CTA */}
      <section style={{ background: 'var(--accent)', padding: 'var(--space-16) var(--gutter)' }}>
        <Reveal style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ ...heading, color: '#fff', margin: '0 0 var(--space-4)' }}>{lang === 'vi' ? 'Sẵn sàng đặt phòng?' : 'Ready to book?'}</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', margin: '0 0 var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>{lang === 'vi' ? 'Đặt phòng qua Airbnb — nhanh chóng, an toàn và được đảm bảo bởi Airbnb Guest Protection.' : 'Book through Airbnb — fast, secure and covered by Airbnb Guest Protection.'}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-4)' }}>
            <Button variant="onDark" size="lg" href="https://www.airbnb.com/users/show/479055797">{lang === 'vi' ? 'Đặt Phòng Ngay' : 'Book on Airbnb'}</Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
window.SH_HomePage = HomePage
