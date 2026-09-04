import Hero from '../components/Hero'
import { waHref, quickContactMsg } from '../utils/whatsappMessage'
import About from '../components/About'
import Services from '../components/Services'
import Fleet from '../components/Fleet'
import Stats from '../components/Stats'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// CTA Section Component
function CTASection() {
  return (
    <section className="cta-section">
      <div className="bg-blob" style={{ width: '400px', height: '400px', background: 'white', top: '-100px', right: '-100px' }} />
      <div className="bg-blob" style={{ width: '300px', height: '300px', background: 'white', bottom: '-80px', left: '-80px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2>Ready to Book Your <br />Premium Car Rental?</h2>
        <p>Get the best rates with our transparent pricing. Professional drivers, clean cars, and 24x7 support.</p>
        <div className="cta-buttons">
          <a href="#booking" className="btn btn-secondary btn-lg">
            📋 Book Online
          </a>
          <a
            href={waHref(quickContactMsg())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            💬 WhatsApp Us
          </a>
          <a href="tel:+918210049424" className="btn btn-secondary btn-lg">
            📞 +91-8210049424
          </a>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  )
}
