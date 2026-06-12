// SpiceHome website — About page
function AboutPage({ lang }) {
  const { SectionLabel, HostCard, Button } = window.SpiceHomeDesignSystem_e751f1
  const Reveal = window.SH_Reveal
  const heading = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: 'var(--text-heading)', margin: 0 }
  return (
    <>
      <section style={{ background: 'var(--bg-inverse)', padding: 'var(--section-y) var(--gutter)', textAlign: 'center' }}>
        <SectionLabel tone="light">{lang === 'vi' ? 'Câu chuyện của chúng tôi' : 'Our Story'}</SectionLabel>
        <h1 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff', fontSize: 'clamp(2rem, 4.5vw, 2.75rem)', margin: 'var(--space-3) auto 0', maxWidth: 640 }}>{lang === 'vi' ? 'Gặp gỡ những người chủ nhà' : 'Meet your hosts'}</h1>
      </section>

      {/* Story w/ image */}
      <section style={{ background: 'var(--bg-page)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', border: 'var(--border)' }}>
              <img src="../../assets/images/common/staircase.jpg" alt="Inside SpiceHome" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionLabel>{lang === 'vi' ? 'Về SpiceHome' : 'About SpiceHome'}</SectionLabel>
            <h2 style={{ ...heading, margin: 'var(--space-3) 0 var(--space-6)' }}>{lang === 'vi' ? 'Một góc nhỏ ấm áp giữa Sài Gòn' : 'A warm little corner of Saigon'}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
              <p>{lang === 'vi' ? 'SpiceHome bắt đầu từ một mong muốn đơn giản: mang đến cho du khách cảm giác như đang ở nhà ngay giữa lòng Sài Gòn nhộn nhịp.' : 'SpiceHome started from a simple wish: to give travellers the feeling of being at home, right in the middle of bustling Saigon.'}</p>
              <p>{lang === 'vi' ? 'Chúng tôi tin rằng điều khiến một chuyến đi đáng nhớ không phải là khách sạn sang trọng, mà là những trải nghiệm chân thật và sự ấm áp của con người địa phương.' : "We believe what makes a trip memorable isn't a luxury hotel, but authentic experiences and the warmth of local people."}</p>
              <p>{lang === 'vi' ? 'Những gì bạn thấy chính là những gì bạn nhận — không phóng đại, không hứa hẹn suông.' : 'What you see is exactly what you get — no exaggeration, no empty promises.'}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hosts */}
      <section style={{ background: 'var(--bg-surface)', padding: 'var(--section-y) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-14)' }}>
            <SectionLabel>{lang === 'vi' ? 'Chủ nhà' : 'Your Hosts'}</SectionLabel>
            <h2 style={{ ...heading, marginTop: 'var(--space-3)' }}>{lang === 'vi' ? 'Hải & Thanh' : 'Hải & Thanh'}</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-6)' }}>
            <Reveal>
              <HostCard name="Hải (Hailey)" initial="H" role={lang === 'vi' ? 'Chủ nhà chính' : 'Main Host'}
                blurb={lang === 'vi' ? 'Nói tiếng Việt, tiếng Anh và tiếng Trung giao tiếp. Chuyên gợi ý ẩm thực, điểm vui chơi và mọi điều về Sài Gòn.' : 'Speaks Vietnamese, English and communicative Mandarin. Specialises in local food, attractions, and all things Saigon.'}
                contacts={[{ icon: 'message-circle', label: 'WhatsApp / Viber / Zalo', href: 'https://wa.me/84904955479' }, { icon: 'phone', label: '(+84) 0904 955 479', href: 'tel:+84904955479' }]} />
            </Reveal>
            <Reveal delay={100}>
              <HostCard name="Thanh" initial="T" role={lang === 'vi' ? 'Đồng chủ nhà' : 'Co-Host'}
                blurb={lang === 'vi' ? 'Luôn sẵn lòng hỗ trợ check-in, dọn phòng và giải đáp mọi thắc mắc trong suốt kỳ nghỉ của bạn.' : 'Always ready to help with check-in, housekeeping, and any questions throughout your stay.'}
                contacts={[{ icon: 'phone', label: '(+84) 0355 608 623', href: 'tel:+840355608623' }, { icon: 'phone', label: '(+84) 0979 80 4343', href: 'tel:+840979804343' }]} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ background: 'var(--accent)', padding: 'var(--space-16) var(--gutter)', textAlign: 'center' }}>
        <Reveal style={{ maxWidth: 'var(--container-prose)', margin: '0 auto' }}>
          <h2 style={{ ...heading, color: '#fff', margin: '0 0 var(--space-4)' }}>{lang === 'vi' ? 'Hãy ghé thăm chúng tôi' : 'Come stay with us'}</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', margin: '0 0 var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>{lang === 'vi' ? 'Nhắn tin cho mình để giữ phòng nhé — mình luôn sẵn sàng đón bạn.' : "Message us to reserve your room — we'd love to host you."}</p>
          <Button variant="onDark" size="lg" href="https://beacons.ai/spicehomesaigon">{lang === 'vi' ? 'Liên hệ ngay' : 'Get in Touch'}</Button>
        </Reveal>
      </section>
    </>
  )
}
window.SH_AboutPage = AboutPage
