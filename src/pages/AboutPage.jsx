import { useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import { CheckCircle, Award, Users, Clock, Shield, Star } from 'lucide-react'

const TEAM = [
  { name: 'Sumit Singh', role: 'Founder & Operations Director', emoji: '👩‍💼', exp: '15+ years' },
  { name: 'Sweta Singh', role: 'CEO', emoji: '👨‍💼', exp: '10+ years' },
  { name: 'Debrata Barik', role: 'Fleet Manager', emoji: '👩‍💼', exp: '12+ years' },
  { name: 'Shubham', role: 'Customer Relations', emoji: '👩‍💻', exp: '8+ years' },
  { name: 'Shankar', role: 'Staff Manager', emoji: '👨‍🔧', exp: '8+ years' },
]

const VALUES = [
  { icon: <Shield size={24} />, title: 'Safety First', desc: 'Every vehicle is thoroughly inspected before each trip. Your safety is non-negotiable.' },
  { icon: <Star size={24} />, title: 'Excellence', desc: 'We set high standards for our service, drivers, and vehicles — no compromises.' },
  { icon: <Users size={24} />, title: 'Customer Focus', desc: 'Your comfort and satisfaction drives every decision we make.' },
  { icon: <Clock size={24} />, title: 'Punctuality', desc: 'Time is precious. We ensure on-time pickups and deliveries every time.' },
]

export default function AboutPage() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }}>
            About Us
          </div>
          <h1>Your Trusted Travel Partner Since 2010</h1>
          <p>A decade of premium service, thousands of happy travelers, and an unwavering commitment to excellence.</p>
        </div>
      </div>

      <main ref={ref}>
        {/* Story Section */}
        <section className="section" style={{ background: 'var(--light)' }}>
          <div className="container">
            <div className="about-grid">
              <div className="reveal">
                <div className="section-badge">Our Story</div>
                <h2 className="section-title">From One Car to <span>100+ Vehicles</span></h2>
                <p style={{ marginBottom: '1rem' }}>
                  Baidyanath Travels was founded in 2013 by Sumit Singh with a single Tata car and a dream: to provide reliable, comfortable, and affordable transportation to every traveler in Jamshedpur and the surrounding region of Jharkhand.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  What started as a one-man operation quickly grew into a trusted name in the travel industry. Today, we operate a premium fleet of 100+ vehicles, employ 200+ professionals, and serve 5000+ happy customers every month across Jamshedpur and nearby cities in Jharkhand.
                </p>
                <p>
                  Our journey has been built on three simple principles — punctuality, professionalism, and passion for service. These values guide every hire we make, every route we plan, and every customer we serve.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '2rem' }}>
                  {[['2010', 'Founded'], ['100+', 'Vehicles'], ['5000+', 'Customers'], ['Jharkhand', 'Based In']].map(([num, label]) => (
                    <div key={label} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: '900', color: 'var(--primary)' }}>{num}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="about-img-grid reveal">
                {[
                  { emoji: '🚗', bg: 'linear-gradient(135deg, #1E3A5F, #0B5FFF)' },
                  { emoji: '🏆', bg: 'linear-gradient(135deg, #0F172A, #FFC857)', tall: true },
                  { emoji: '👨‍👩‍👧‍👦', bg: 'linear-gradient(135deg, #134e4a, #00C2A8)' },
                  { emoji: '🛣️', bg: 'linear-gradient(135deg, #1E293B, #6366F1)' },
                ].map((img, i) => (
                  <div key={i} className={`about-img-card ${img.tall ? 'tall' : ''}`} style={{ background: img.bg }}>
                    <span style={{ fontSize: img.tall ? '4.5rem' : '3rem' }}>{img.emoji}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section" style={{ background: 'var(--light-2)' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="section-badge">Our Values</div>
              <h2 className="section-title">What We <span>Stand For</span></h2>
            </div>
            <div className="about-values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {VALUES.map((v, i) => (
                <div key={i} className="service-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="service-icon" style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white' }}>
                    {v.icon}
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section" style={{ background: 'var(--light)' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="section-badge">Our Team</div>
              <h2 className="section-title">Meet the <span>People Behind</span> the Journey</h2>
            </div>
            <div className="about-team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
              {TEAM.map((member, i) => (
                <div key={i} className="glass-card reveal" style={{ padding: '2rem', textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{member.emoji}</div>
                  <h4 style={{ marginBottom: '0.25rem' }}>{member.name}</h4>
                  <div style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{member.role}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{member.exp} experience</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
