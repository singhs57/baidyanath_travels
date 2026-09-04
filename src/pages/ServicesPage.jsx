import Services from '../components/Services'
import Footer from '../components/Footer'
import { waHref, serviceEnquiryMsg } from '../utils/whatsappMessage'

const ALL_SERVICES = [
  {
    icon: '🏙️', title: 'Local Car Rental',
    features: ['4-hour, 8-hour & 12-hour packages', 'City-wide coverage', 'AC vehicles available', 'Professional drivers'],
    price: '₹999/4hrs onwards',
    desc: 'Perfect for shopping, doctor visits, meetings, and local travel. Hire a car with a driver for a few hours or the full day at affordable rates.',
    bg: 'linear-gradient(135deg, #0B5FFF, #3D80FF)',
  },
  {
    icon: '✈️', title: 'Airport Transfer',
    features: ['Flight tracking', 'Meet & greet service', 'All airports covered', 'Luggage assistance'],
    price: '₹799 onwards',
    desc: "Stress-free airport pickups and drops. We track your flight to ensure we're always there, even if flights are delayed.",
    bg: 'linear-gradient(135deg, #00C2A8, #14B8A6)',
  },
  {
    icon: '🛣️', title: 'Outstation Trips',
    features: ['One-way & round trips', 'Multiple vehicle options', 'Night halts covered', 'Experienced drivers'],
    price: '₹12/km onwards',
    desc: 'Explore India comfortably with our outstation cab services. Expert drivers, clean vehicles, and transparent pricing.',
    bg: 'linear-gradient(135deg, #FFC857, #F59E0B)',
  },
  {
    icon: '💼', title: 'Corporate Car Rental',
    features: ['Dedicated account manager', 'Monthly billing', 'Multiple vehicles', 'Professional chauffeurs'],
    price: 'Custom packages',
    desc: 'Elevate your business travel with premium corporate car rental services. Reliable transportation for executives, clients, and employees.',
    bg: 'linear-gradient(135deg, #6366F1, #4F46E5)',
  },
  {
    icon: '💒', title: 'Wedding Car Rental',
    features: ['Decorated vehicles', 'Luxury cars available', 'Multiple car options', 'All-day packages'],
    price: '₹2,999 onwards',
    desc: 'Make your special day even more memorable. From bridal cars to baraat processions, we handle all wedding transportation needs.',
    bg: 'linear-gradient(135deg, #EC4899, #BE185D)',
  },
  {
    icon: '📅', title: 'Monthly Car Hire',
    features: ['Dedicated vehicle & driver', 'Unlimited km packages', '30% savings vs daily', 'Flexible timings'],
    price: '₹24,999/month',
    desc: 'Regular commuters save big with our monthly car hire packages. Get a dedicated vehicle and driver for an entire month.',
    bg: 'linear-gradient(135deg, #22C55E, #16A34A)',
  },
  {
    icon: '🏭', title: 'Employee Transportation',
    features: ['Route optimization', 'Real-time tracking', 'Multiple shifts', 'Safety compliance'],
    price: 'Per employee pricing',
    desc: 'End-to-end employee transportation solutions for IT parks, factories, and corporate campuses.',
    bg: 'linear-gradient(135deg, #F97316, #EA580C)',
  },
  {
    icon: '🗺️', title: 'Tourist Packages',
    features: ['Multi-day itineraries', 'Guide & driver', 'Hotel bookings', 'Popular destinations'],
    price: '₹3,999 onwards',
    desc: "Curated travel packages to India's most beautiful destinations. All inclusive with hotels, guides, and comfortable transport.",
    bg: 'linear-gradient(135deg, #14B8A6, #0D9488)',
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }}>
            Services
          </div>
          <h1>Comprehensive Travel Services</h1>
          <p>From local rides in Jamshedpur to outstation tours across Jharkhand — one company for all your travel needs.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
            {ALL_SERVICES.map((svc, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  background: 'var(--white)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--light-3)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-xl)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
              >
                <div style={{
                  padding: '2rem',
                  background: svc.bg,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  <div style={{ fontSize: '2.5rem' }}>{svc.icon}</div>
                  <div>
                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{svc.title}</h3>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontWeight: '700' }}>{svc.price}</div>
                  </div>
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>{svc.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {svc.features.map((f, fi) => (
                      <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waHref(serviceEnquiryMsg(svc.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Book This Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
