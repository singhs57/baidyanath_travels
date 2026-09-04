import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { waHref, quickContactMsg } from '../utils/whatsappMessage'

const FAQS = [
  {
    q: 'What areas do you serve?',
    a: 'We currently provide car rental services across Jharkhand, covering major cities and towns including Deoghar, Ranchi, Dumka, Dhanbad, Jamshedpur, Bokaro, Hazaribagh, Giridih, and surrounding areas. We also offer inter-city and outstation travel within Jharkhand.',
  },
  {
    q: 'Do you provide airport pickup and drop services?',
    a: 'Yes! We specialize in airport transfers within Jharkhand. We track your flight in real-time so that even if your flight is delayed, your driver will be there waiting. Available 24x7 for airports in Jharkhand.',
  },
  {
    q: 'What vehicles are available for rental?',
    a: 'We offer a wide fleet including hatchbacks (Swift, i20), sedans (City, Dzire), SUVs (Innova, Fortuner), luxury cars (Mercedes, BMW), and Tempo Travellers for group travel. All vehicles are well-maintained and GPS-enabled.',
  },
  {
    q: 'Are your drivers verified and trained?',
    a: 'All our drivers undergo thorough background verification, license validation, and professional training. They are courteous, experienced, and highly familiar with routes across Jharkhand. Your safety is our top priority.',
  },
  {
    q: 'How can I book a car rental?',
    a: 'You can book in 3 easy ways: (1) Fill the online booking form on our website, (2) WhatsApp us at +91-8210049424, or (3) Call us directly. We confirm bookings within 15 minutes.',
  },
  {
    q: 'What is included in the rental price?',
    a: 'Our rental prices include the driver, fuel, parking charges, and tolls for local trips within Jharkhand. For outstation trips, we clearly specify inclusions and exclusions upfront. No hidden charges guaranteed.',
  },
  {
    q: 'Do you offer monthly or long-term car hire?',
    a: 'Yes! We offer special monthly packages for businesses and individuals in Jharkhand who need regular transportation. Monthly packages provide significant savings compared to daily rates. Contact us for customized quotes.',
  },
  {
    q: 'What if I need to cancel my booking?',
    a: 'We have a flexible cancellation policy. Cancellations made 24+ hours before the trip get a full refund. Cancellations within 24 hours may incur a nominal charge. Contact us for specific cases.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
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
    <section className="section" id="faq" ref={ref} style={{ background: 'var(--light-2)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">FAQ</div>
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about our car rental services.
          </p>
        </div>

        <div className="faq-list reveal">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? ' open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <ChevronDown size={18} className="faq-chevron" />
              </button>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="reveal">
          <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            Still have questions? We're happy to help!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+918210049424" className="btn btn-primary">
              📞 Call Us
            </a>
            <a
              href={waHref(quickContactMsg())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
