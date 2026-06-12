// SpiceHome website — Local Guide page
function GuidePage({ lang }) {
  const { SectionLabel, GuideCard, Icon } = window.SpiceHomeDesignSystem_e751f1
  const Reveal = window.SH_Reveal
  const g = window.SH_DATA.guide
  const cats = [
    { key: 'food', icon: 'utensils', vi: 'Ăn uống', en: 'Where to Eat' },
    { key: 'shopping', icon: 'shopping-bag', vi: 'Mua sắm', en: 'Shopping & Essentials' },
    { key: 'attractions', icon: 'landmark', vi: 'Tham quan', en: 'Attractions' },
    { key: 'transport', icon: 'bus', vi: 'Di chuyển', en: 'Getting Around' },
  ]
  return (
    <>
      <section style={{ background: 'var(--bg-inverse)', padding: 'var(--section-y) var(--gutter)', textAlign: 'center' }}>
        <SectionLabel tone="light">{lang === 'vi' ? 'Khám phá Sài Gòn' : 'Explore Saigon'}</SectionLabel>
        <h1 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff', fontSize: 'clamp(2rem, 4.5vw, 2.75rem)', margin: 'var(--space-3) auto 0', maxWidth: 640 }}>{lang === 'vi' ? 'Hướng dẫn địa phương' : 'Your local guide to the neighbourhood'}</h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 540, margin: 'var(--space-5) auto 0', lineHeight: 'var(--leading-relaxed)' }}>{lang === 'vi' ? 'Những gợi ý thật lòng từ Hải và Thanh — quán ăn ngon, chỗ mua sắm, điểm tham quan và cách đi lại quanh Phú Nhuận.' : "Honest recommendations from Hải and Thanh — great food, shopping, sights and how to get around Phú Nhuận."}</p>
      </section>

      {cats.map((cat, ci) => (
        <section key={cat.key} style={{ background: ci % 2 === 0 ? 'var(--bg-page)' : 'var(--bg-surface)', padding: 'var(--section-y) var(--gutter)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <Reveal style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-10)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={cat.icon} size={18} style={{ color: 'var(--accent)' }} /></div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: 0 }}>{lang === 'vi' ? cat.vi : cat.en}</h2>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
              {g[cat.key].map((item, i) => (
                <Reveal key={i} delay={i * 100}><GuideCard item={item} lang={lang} /></Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
window.SH_GuidePage = GuidePage
