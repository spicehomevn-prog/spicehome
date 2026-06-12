// SpiceHome website — scroll-reveal wrapper (fade-up via IntersectionObserver)
function Reveal({ children, delay = 0, style = {}, as = 'div' }) {
  const ref = React.useRef(null)
  const [seen, setSeen] = React.useState(false)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const Tag = as
  return (
    <Tag ref={ref} style={{
      opacity: seen ? 1 : 0,
      transform: seen ? 'translateY(0)' : 'translateY(var(--reveal-offset))',
      transition: `opacity var(--duration-slow) var(--ease-out) ${delay}ms, transform var(--duration-slow) var(--ease-out) ${delay}ms`,
      ...style,
    }}>{children}</Tag>
  )
}
window.SH_Reveal = Reveal
