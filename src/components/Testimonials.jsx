import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Ramesh Kumar',
    location: 'Jamshedpur',
    trip: 'Family Trip · Ranchi Airport',
    text: 'Baidyanath Travels made our family trip to Ranchi Airport absolutely wonderful. The driver was punctual, polite, and the car was spotlessly clean. Highly recommend!',
    rating: 5,
    initials: 'RK',
    bg: 'linear-gradient(135deg, #0B5FFF, #3D80FF)',
  },
  {
    name: 'Priya Sharma',
    location: 'Ranchi',
    trip: 'Airport Transfer',
    text: 'Used their airport transfer service multiple times. Always on time, professional drivers, and great communication. The best cab service I have used.',
    rating: 5,
    initials: 'PS',
    bg: 'linear-gradient(135deg, #00C2A8, #14B8A6)',
  },
  {
    name: 'Arjun Mehta',
    location: 'Jamshedpur',
    trip: 'Wedding Car · Decorated',
    text: 'Booked a luxury car for my wedding. The decorated vehicle was beyond expectations. All my guests were impressed. Thank you Baidyanath Travels!',
    rating: 5,
    initials: 'AM',
    bg: 'linear-gradient(135deg, #EC4899, #BE185D)',
  },
  {
    name: 'Sunita Patel',
    location: 'Ranchi',
    trip: 'Corporate Monthly Package',
    text: 'Our company uses Baidyanath Travels for all employee transportation. Reliable, punctual and very professional. The monthly package is excellent value.',
    rating: 5,
    initials: 'SP',
    bg: 'linear-gradient(135deg, #F97316, #EA580C)',
  },
  {
    name: 'Vikram Singh',
    location: 'Jamshedpur',
    trip: 'Outstation · Agra',
    text: 'Booked an outstation trip to Agra. The driver knew every route, was very polite and made the journey enjoyable. Will definitely book again!',
    rating: 5,
    initials: 'VS',
    bg: 'linear-gradient(135deg, #6366F1, #4F46E5)',
  },
  {
    name: 'Meena Krishnan',
    location: 'Ranchi',
    trip: 'Local City Ride',
    text: 'Very happy with the service. Booking was easy on WhatsApp, they sent driver details immediately and the car arrived 10 minutes early. Perfect!',
    rating: 5,
    initials: 'MK',
    bg: 'linear-gradient(135deg, #22C55E, #16A34A)',
  },
]

const TRUST_BADGES = [
  {
    icon: '🚗',
    title: 'GPS-Enabled Fleet',
    desc: 'Every vehicle tracked live for your safety',
    color: '#0B5FFF',
    bg: 'rgba(11, 95, 255, 0.08)',
    border: 'rgba(11, 95, 255, 0.18)',
  },
  {
    icon: '👨‍✈️',
    title: 'Verified Drivers',
    desc: 'Background-checked & licensed professionals',
    color: '#00C2A8',
    bg: 'rgba(0, 194, 168, 0.08)',
    border: 'rgba(0, 194, 168, 0.18)',
  },
  {
    icon: '🛡️',
    title: '100% Safe Travel',
    desc: 'Fully insured rides with 24×7 support',
    color: '#F97316',
    bg: 'rgba(249, 115, 22, 0.08)',
    border: 'rgba(249, 115, 22, 0.18)',
  },
  {
    icon: '🏆',
    title: '10+ Years of Trust',
    desc: 'Serving thousands of happy travellers',
    color: '#6366F1',
    bg: 'rgba(99, 102, 241, 0.08)',
    border: 'rgba(99, 102, 241, 0.18)',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [perSlide, setPerSlide] = useState(3)
  const autoRef = useRef(null)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 600) setPerSlide(1)
      else if (window.innerWidth < 900) setPerSlide(2)
      else setPerSlide(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxSlide = Math.ceil(TESTIMONIALS.length / perSlide) - 1

  const go = (dir) => {
    setCurrent(c => {
      if (dir === 1) return c >= maxSlide ? 0 : c + 1
      return c <= 0 ? maxSlide : c - 1
    })
  }

  useEffect(() => {
    autoRef.current = setInterval(() => go(1), 5000)
    return () => clearInterval(autoRef.current)
  }, [perSlide, maxSlide])

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Testimonials</div>
          <h2 className="section-title">
            Trusted by <span>Thousands of Travellers</span>
          </h2>
          <p className="section-desc">
            Real experiences from real people — families, professionals, and explorers who chose Baidyanath Travels.
          </p>
        </div>

        {/* Slider */}
        <div className="testimonials-slider">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(TESTIMONIALS.length / perSlide) }).map((_, groupIdx) => (
              <div
                key={groupIdx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${perSlide}, 1fr)`,
                  gap: '1.5rem',
                  minWidth: '100%',
                  flexShrink: 0,
                }}
              >
                {TESTIMONIALS.slice(groupIdx * perSlide, (groupIdx + 1) * perSlide).map((t, i) => (
                  <div className="testimonial-card" key={i}>
                    <div className="testimonial-card-top">
                      <div className="stars">
                        {[...Array(t.rating)].map((_, si) => (
                          <span key={si} style={{ color: '#FFC857', fontSize: '0.95rem' }}>★</span>
                        ))}
                      </div>
                      <div className="testimonial-quote-icon">
                        <Quote size={16} />
                      </div>
                    </div>
                    {t.trip && (
                      <div className="testimonial-trip-tag">{t.trip}</div>
                    )}
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-author">
                      <div className="author-avatar" style={{ background: t.bg }}>
                        {t.initials}
                      </div>
                      <div>
                        <div className="author-name">{t.name}</div>
                        <div className="author-location">📍 {t.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="slider-controls">
          <button className="slider-arrow" onClick={() => go(-1)} aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          {Array.from({ length: maxSlide + 1 }).map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
          <button className="slider-arrow" onClick={() => go(1)} aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="trust-badges-grid">
          {TRUST_BADGES.map((badge, i) => (
            <div
              key={i}
              className="trust-badge-card"
              style={{
                background: badge.bg,
                border: `1px solid ${badge.border}`,
              }}
            >
              <div className="trust-badge-icon" style={{ color: badge.color }}>
                {badge.icon}
              </div>
              <div className="trust-badge-title" style={{ color: badge.color }}>
                {badge.title}
              </div>
              <div className="trust-badge-desc">{badge.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
