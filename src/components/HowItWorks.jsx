import { useEffect, useRef } from 'react'
import { waHref, quickContactMsg } from '../utils/whatsappMessage'

const STEPS = [
  {
    num: '01',
    icon: '🚗',
    title: 'Select Vehicle',
    desc: 'Browse our premium fleet and choose the perfect vehicle for your trip — from economy to luxury.',
  },
  {
    num: '02',
    icon: '📝',
    title: 'Submit Inquiry',
    desc: 'Fill in your trip details using our quick booking form or message us on WhatsApp for instant response.',
  },
  {
    num: '03',
    icon: '✅',
    title: 'Confirm Booking',
    desc: 'Receive booking confirmation with driver details, vehicle info, and trip itinerary within minutes.',
  },
  {
    num: '04',
    icon: '🛣️',
    title: 'Enjoy Your Journey',
    desc: 'Sit back and relax while our professional driver takes you safely to your destination.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-scale').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="how-it-works" ref={ref} style={{ background: 'var(--light-2)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">Process</div>
          <h2 className="section-title">
            How It <span>Works</span>
          </h2>
          <p className="section-desc">
            Booking a car with Baidyanath Travels is simple, fast, and hassle-free. Just 4 easy steps.
          </p>
        </div>

        <div className="steps-grid">
          {STEPS.map((step, i) => (
            <div className="step-card reveal-scale" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="step-number">{step.num}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
          <a
            href={waHref(quickContactMsg())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            💬 Start Your Booking Now
          </a>
        </div>
      </div>
    </section>
  )
}
