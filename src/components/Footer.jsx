import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import logoSvg from '../assets/logo.png'
import { waHref, quickContactMsg } from '../utils/whatsappMessage'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/fleet', label: 'Our Fleet' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const SERVICES = [
  'Local Car Rental',
  'Airport Transfer',
  'Outstation Trips',
  'Corporate Rental',
  'Wedding Car',
  'Monthly Hire',
  'Tourist Packages',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <img
                src={logoSvg}
                alt="Baidyanath Travels"
                style={{
                  width: '58px', height: '58px',
                  objectFit: 'contain',
                  flexShrink: 0,
                  filter: 'drop-shadow(0 1px 6px rgba(0,0,0,0.5))',
                }}
              />
              <div>
                <div style={{ fontWeight: '800', fontSize: '1rem', color: 'white' }}>Baidyanath Travels</div>
                <div style={{ fontSize: '0.63rem', color: 'rgba(232,184,75,0.9)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Premium Car Rentals</div>
              </div>
            </div>
            <p>
              Your trusted travel partner for premium car rental services in Jamshedpur and nearby cities across Jharkhand. Professional drivers, GPS-enabled fleet, and 24x7 support for all your travel needs.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1.5rem' }}>
              <a href="tel:+918210049424" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', textDecoration: 'none' }}>
                <Phone size={14} color="var(--primary-light)" />
                +91-8210049424 / 9204598801
              </a>
              <a href="mailto:baidyanath.travels@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', textDecoration: 'none' }}>
                <Mail size={14} color="var(--primary-light)" />
                baidyanath.travels@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>
              <MapPin size={14} color="var(--primary-light)" style={{ marginTop: '2px', flexShrink: 0 }} />
                Jamshedpur, Jharkhand - 831016
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              {QUICK_LINKS.map(link => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="footer-heading">Our Services</h5>
            <ul className="footer-links">
              {SERVICES.map(svc => (
                <li key={svc}>
                  <Link to="/services">{svc}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Now */}
          <div>
            <h5 className="footer-heading">Book Instantly</h5>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              No backend, no forms, no waiting. Every booking is handled personally via WhatsApp or phone.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={waHref(quickContactMsg())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ justifyContent: 'center' }}
              >
                💬 Book on WhatsApp
              </a>
              <a
                href="tel:+918210049424"
                className="btn btn-sm"
                style={{ justifyContent: 'center', background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                📞 Call +91-8210049424
              </a>
              <a
                href="tel:+919204598801"
                className="btn btn-sm"
                style={{ justifyContent: 'center', background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                📞 Call +91-9204598801
              </a>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginTop: '1rem' }}>
              ⏱ We confirm bookings within 15 minutes
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Baidyanath Travels. All Rights Reserved. | Crafted with ❤️ in India</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
