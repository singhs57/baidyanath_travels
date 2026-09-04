import { useState, useEffect, useRef } from 'react'
import { Phone, MessageCircle, MapPin, Calendar, Users, ChevronDown } from 'lucide-react'
import { openWhatsApp, bookingRequestMsg, quickContactMsg } from '../utils/whatsappMessage'

export default function Hero() {
  const [typeText, setTypeText] = useState('')
  const phrases = ['Every Journey', 'Airport Transfers', 'Business Trips', 'Wedding Travel', 'Outstation Tours']
  const phraseIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)

  const [form, setForm] = useState({
    name: '', phone: '', tripType: 'Select Trip Type', date: '', vehicle: 'Any Vehicle', location: '',
  })
  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  useEffect(() => {
    const tick = () => {
      const current = phrases[phraseIdx.current]
      if (!deleting.current) {
        setTypeText(current.slice(0, charIdx.current + 1))
        charIdx.current++
        if (charIdx.current === current.length) {
          deleting.current = true
          setTimeout(tick, 1800)
          return
        }
      } else {
        setTypeText(current.slice(0, charIdx.current - 1))
        charIdx.current--
        if (charIdx.current === 0) {
          deleting.current = false
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length
        }
      }
      setTimeout(tick, deleting.current ? 60 : 90)
    }
    const t = setTimeout(tick, 400)
    return () => clearTimeout(t)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    openWhatsApp(bookingRequestMsg(form))
  }

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-circle hero-bg-circle-1" />
        <div className="hero-bg-circle hero-bg-circle-2" />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'rgba(11,95,255,0.3)' : 'rgba(0,194,168,0.3)',
            top: `${15 + i * 13}%`,
            left: `${5 + i * 14}%`,
            animation: `float ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }} />
        ))}
      </div>

      <div className="container" style={{ paddingTop: 'var(--nav-height)', width: '100%' }}>
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span>⭐</span> Jamshedpur's Trusted Car Rental Partner
            </div>

            <h1 className="hero-title">
              Reliable Car Rentals For{' '}
              <span className="typewriter">{typeText}</span>
            </h1>

            <p className="hero-subtitle">
              Premium car rental services in Jamshedpur & nearby cities across Jharkhand — professional drivers for local, airport, corporate, wedding, and outstation travel. Safe, comfortable & affordable.
            </p>

            <div className="hero-cta">
              <a
                href="#booking"
                className="btn btn-primary btn-lg"
              >
                <Calendar size={18} />
                Book Now
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                onClick={e => { e.preventDefault(); openWhatsApp(quickContactMsg()) }}
              >
                <span>💬</span>
                Get Quote on WhatsApp
              </a>
            </div>

            <div className="hero-stats">
              {[
                { num: '5000+', label: 'Happy Customers' },
                { num: '100+', label: 'Vehicles' },
                { num: '24x7', label: 'Support' },
              ].map((s, i) => (
                <div className="hero-stat" key={i}>
                  <span className="hero-stat-num">{s.num}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="hero-booking-card" id="booking">
            <h3>
              <Calendar size={20} color="var(--primary)" />
              Quick Booking Enquiry
            </h3>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input className="form-input" placeholder="Full Name" required value={form.name} onChange={set('name')} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" placeholder="+91 XXXXX XXXXX" required value={form.phone} onChange={set('phone')} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Trip Type</label>
                <select className="form-input" value={form.tripType} onChange={set('tripType')}>
                  <option>Select Trip Type</option>
                  <option>Local Rental</option>
                  <option>Airport Transfer</option>
                  <option>Outstation Trip</option>
                  <option>Corporate Rental</option>
                  <option>Wedding Car</option>
                  <option>Monthly Hire</option>
                  <option>Tourist Package</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Pickup Date</label>
                  <input type="date" className="form-input" required value={form.date} onChange={set('date')} />
                </div>
                <div className="form-group">
                  <label className="form-label">Vehicle Type</label>
                  <select className="form-input" value={form.vehicle} onChange={set('vehicle')}>
                    <option>Any Vehicle</option>
                    <option>Hatchback</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Luxury Car</option>
                    <option>Tempo Traveller</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Pickup Location</label>
                <input className="form-input" placeholder="City / Area / Station" value={form.location} onChange={set('location')} />
              </div>

              <button type="submit" className="btn btn-whatsapp" style={{ width: '100%' }}>
                💬 Send Booking on WhatsApp
              </button>

              <p style={{ fontSize: '0.78rem', textAlign: 'center', color: 'var(--text-muted)', margin: 0 }}>
                We'll call you back within 15 minutes!
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.5)',
        animation: 'float 2s ease-in-out infinite',
        zIndex: 2,
      }}>
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
