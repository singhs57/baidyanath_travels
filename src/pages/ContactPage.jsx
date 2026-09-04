import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }}>
            Contact
          </div>
          <h1>Get In Touch With Us</h1>
          <p>We're here to help 24x7. Call, WhatsApp or fill the form and we'll respond within 15 minutes.</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}
