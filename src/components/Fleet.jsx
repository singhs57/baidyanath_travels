import { useState, useEffect, useRef } from 'react'
import { Users, Fuel, Wind, Star } from 'lucide-react'
import { waHref, vehicleBookingMsg } from '../utils/whatsappMessage'

const VEHICLES = [
  {
    name: 'Maruti Swift',
    category: 'Hatchback',
    emoji: '🚗',
    passengers: 4,
    ac: 'AC',
    fuel: 'Petrol',
    price: '₹999/day',
    badge: 'Popular',
    bgGrad: 'linear-gradient(135deg, #1E3A5F, #0B5FFF)',
  },
  {
    name: 'Honda City',
    category: 'Sedan',
    emoji: '🚙',
    passengers: 5,
    ac: 'AC',
    fuel: 'Petrol',
    price: '₹1,499/day',
    badge: 'Best Seller',
    bgGrad: 'linear-gradient(135deg, #1E293B, #00C2A8)',
  },
  {
    name: 'Toyota Innova',
    category: 'SUV',
    emoji: '🚐',
    passengers: 7,
    ac: 'AC',
    fuel: 'Diesel',
    price: '₹2,199/day',
    badge: 'Family Choice',
    bgGrad: 'linear-gradient(135deg, #0F172A, #334155)',
  },
  {
    name: 'Mercedes E-Class',
    category: 'Luxury Cars',
    emoji: '🏎️',
    passengers: 4,
    ac: 'AC',
    fuel: 'Petrol',
    price: '₹5,999/day',
    badge: 'Premium',
    bgGrad: 'linear-gradient(135deg, #1a1a2e, #6366F1)',
  },
  {
    name: 'Maruti Dzire',
    category: 'Sedan',
    emoji: '🚙',
    passengers: 5,
    ac: 'AC',
    fuel: 'CNG',
    price: '₹1,199/day',
    badge: 'Budget',
    bgGrad: 'linear-gradient(135deg, #134e4a, #14B8A6)',
  },
  {
    name: 'Toyota Fortuner',
    category: 'SUV',
    emoji: '🚙',
    passengers: 7,
    ac: 'AC',
    fuel: 'Diesel',
    price: '₹3,499/day',
    badge: 'Luxury SUV',
    bgGrad: 'linear-gradient(135deg, #1c1917, #F97316)',
  },
  {
    name: 'Force Tempo Traveller',
    category: 'Tempo Traveller',
    emoji: '🚌',
    passengers: 17,
    ac: 'AC',
    fuel: 'Diesel',
    price: '₹4,999/day',
    badge: 'Group Travel',
    bgGrad: 'linear-gradient(135deg, #14532d, #22C55E)',
  },
  {
    name: 'BMW 5 Series',
    category: 'Luxury Cars',
    emoji: '🏎️',
    passengers: 5,
    ac: 'AC',
    fuel: 'Petrol',
    price: '₹6,999/day',
    badge: 'Corporate',
    bgGrad: 'linear-gradient(135deg, #0c4a6e, #0284C7)',
  },
  {
    name: 'Hyundai i20',
    category: 'Hatchback',
    emoji: '🚗',
    passengers: 5,
    ac: 'AC',
    fuel: 'Petrol',
    price: '₹1,099/day',
    badge: 'Economy',
    bgGrad: 'linear-gradient(135deg, #1E3A5F, #3B82F6)',
  },
]

const FILTERS = ['All', 'Hatchback', 'Sedan', 'SUV', 'Luxury Cars', 'Tempo Traveller']

export default function Fleet() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)

  const filtered = active === 'All' ? VEHICLES : VEHICLES.filter(v => v.category === active)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [active])

  return (
    <section className="section" id="fleet" ref={ref} style={{ background: 'var(--light)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">Our Fleet</div>
          <h2 className="section-title">
            Choose From Our <span>Premium Fleet</span>
          </h2>
          <p className="section-desc">
            Well-maintained, GPS-enabled vehicles for every budget and occasion.
          </p>
        </div>

        <div className="fleet-filters reveal">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="fleet-grid">
          {filtered.map((v, i) => (
            <div className="vehicle-card reveal" key={v.name} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className="vehicle-img" style={{ background: v.bgGrad }}>
                <span className="vehicle-emoji">{v.emoji}</span>
                <span className="vehicle-badge">{v.badge}</span>
              </div>
              <div className="vehicle-info">
                <h4>{v.name}</h4>
                <div className="vehicle-meta">
                  <span className="vehicle-tag"><Users size={11} /> {v.passengers} Seats</span>
                  <span className="vehicle-tag"><Wind size={11} /> {v.ac}</span>
                  <span className="vehicle-tag"><Fuel size={11} /> {v.fuel}</span>
                </div>
                <div className="vehicle-price">
                  <div className="price-text">
                    <span className="price-from">Starting from</span>
                    <span className="price-amount">{v.price}</span>
                  </div>
                  <a
                    href={waHref(vehicleBookingMsg(v.name, v.price))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
          <a href="/fleet" className="btn btn-outline btn-lg">
            View Full Fleet →
          </a>
        </div>
      </div>
    </section>
  )
}
