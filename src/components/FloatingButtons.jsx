import { Phone } from 'lucide-react'
import { waHref, quickContactMsg } from '../utils/whatsappMessage'

export default function FloatingButtons() {
  return (
    <div className="floating-btns">
      <a
        href={waHref(quickContactMsg())}
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-whatsapp"
        aria-label="WhatsApp"
        style={{ position: 'relative' }}
      >
        <span style={{ fontSize: '1.5rem' }}>💬</span>
        <span className="fab-label">WhatsApp Us</span>
      </a>
      <a
        href="tel:+918210049424"
        className="fab fab-call"
        aria-label="Call Now"
        style={{ position: 'relative' }}
      >
        <Phone size={22} />
        <span className="fab-label">Call Now</span>
      </a>
    </div>
  )
}
