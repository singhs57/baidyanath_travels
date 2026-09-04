import { useState, useEffect, useRef } from 'react'
import { Car, Users, Headphones, MapPin, Star } from 'lucide-react'

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const interval = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(interval)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const STATS = [
  { icon: <Users size={24} />, num: 5000, suffix: '+', label: 'Happy Customers', desc: 'Trusted by families and businesses alike' },
  { icon: <Car size={24} />, num: 100, suffix: '+', label: 'Vehicles', desc: 'Well-maintained GPS-enabled fleet' },
  { icon: <Headphones size={24} />, num: 24, suffix: 'x7', label: 'Support', desc: 'Always available when you need us' },
  { icon: <Star size={24} />, num: 98, suffix: '%', label: 'Satisfaction Rate', desc: 'Consistently 5-star rated service' },
  { icon: <MapPin size={24} />, num: 50, suffix: '+', label: 'Cities Covered', desc: 'Pan-India travel network' },
]

export default function Stats() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.stat-item, .reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section stats-section" ref={ref}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(11,95,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,194,168,0.15) 0%, transparent 50%)',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header reveal">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.15)' }}>
            Why Choose Us
          </div>
          <h2 className="section-title" style={{ color: 'white' }}>
            Numbers That <span>Speak For Themselves</span>
          </h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.65)' }}>
            A decade of trust, thousands of happy journeys, and an unwavering commitment to excellence.
          </p>
        </div>

        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div className="stat-item" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-number">
                <Counter target={s.num} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.4rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
