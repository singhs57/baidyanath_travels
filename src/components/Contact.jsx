import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { openWhatsApp, enquiryMsg, quickContactMsg } from '../utils/whatsappMessage'

const CONTACT_INFO = [
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91-8210049424 / 9204598801',
    sub: 'Available 24x7',
    bg: 'linear-gradient(135deg, #0B5FFF, #3D80FF)',
    href: 'tel:+918210049424',
  },
  {
    icon: <MessageCircle size={20} />,
    label: 'WhatsApp',
    value: '+91-8210049424',
    sub: 'Quick response on WhatsApp',
    bg: 'linear-gradient(135deg, #25D366, #128C7E)',
    href: 'https://wa.me/918210049424',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'baidyanath.travels@gmail.com',
    sub: 'We reply within 2 hours',
    bg: 'linear-gradient(135deg, #6366F1, #4F46E5)',
    href: 'mailto:baidyanath.travels@gmail.com',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Office',
    value: 'Jamshedpur, Jharkhand - 831016',
    sub: 'Mon–Sat 9AM to 7PM',
    bg: 'linear-gradient(135deg, #F97316, #EA580C)',
    href: '#',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    openWhatsApp(enquiryMsg(form))
    setForm({ name: '', phone: '', service: '', message: '' })
  }

  return (
    <section className="section" id="contact" ref={ref} style={{ background: 'var(--light)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">Contact Us</div>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <p className="section-desc">
            All bookings and confirmations are handled via WhatsApp or phone — fast, personal, and zero hassle.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info reveal">
            {CONTACT_INFO.map((info, i) => (
              <a key={i} href={info.href} className="contact-item" target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="contact-icon" style={{ background: info.bg }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    {info.label}
                  </div>
                  <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    {info.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {info.sub}
                  </div>
                </div>
              </a>
            ))}

            {/* Quick WhatsApp */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ justifyContent: 'center', gap: '0.75rem' }}
              onClick={e => { e.preventDefault(); openWhatsApp(quickContactMsg()) }}
            >
              <span style={{ fontSize: '1.2rem' }}>💬</span>
              Chat on WhatsApp for Instant Response
            </a>
          </div>

          {/* Right: Contact Form → sends to WhatsApp */}
          <div className="contact-form-card reveal" style={{ animationDelay: '0.2s' }}>
            <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              💬 Send Enquiry via WhatsApp
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Fill in your details and hit Send — it opens WhatsApp with your message pre-filled and ready to go.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    className="form-input"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input
                    className="form-input"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Service Required</label>
                <select
                  className="form-input"
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Select a Service</option>
                  <option>Local Rental</option>
                  <option>Airport Transfer</option>
                  <option>Outstation Trip</option>
                  <option>Corporate Rental</option>
                  <option>Wedding Car</option>
                  <option>Monthly Hire</option>
                  <option>Tourist Package</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message / Trip Details</label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="e.g. Need Innova from Jamshedpur to Deoghar on 25 Jan for 4 people..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="btn btn-whatsapp btn-lg" style={{ width: '100%' }}>
                💬 Send on WhatsApp
              </button>
              <p style={{ fontSize: '0.78rem', textAlign: 'center', color: 'var(--text-muted)', margin: 0 }}>
                We confirm bookings within 15 minutes on WhatsApp.
              </p>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="map-container reveal" style={{ marginTop: '3rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🗺️</div>
            <p style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>
              Jamshedpur, Jharkhand - 831016
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ marginTop: '1rem' }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
