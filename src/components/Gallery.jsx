import { useEffect, useRef } from 'react'

const GALLERY_ITEMS = [
  { emoji: '🚗', label: 'Sedan Fleet', bg: 'linear-gradient(135deg, #1E3A5F, #0B5FFF)', height: '220px' },
  { emoji: '✈️', label: 'Airport Transfer', bg: 'linear-gradient(135deg, #0F172A, #00C2A8)', height: '160px' },
  { emoji: '💒', label: 'Wedding Car', bg: 'linear-gradient(135deg, #4F1D96, #7C3AED)', height: '260px' },
  { emoji: '🏙️', label: 'City Tour', bg: 'linear-gradient(135deg, #1E293B, #334155)', height: '180px' },
  { emoji: '🚌', label: 'Tempo Traveller', bg: 'linear-gradient(135deg, #14532d, #22C55E)', height: '200px' },
  { emoji: '💼', label: 'Corporate Trip', bg: 'linear-gradient(135deg, #1e1b4b, #6366F1)', height: '240px' },
  { emoji: '🏔️', label: 'Hill Station Tour', bg: 'linear-gradient(135deg, #0c4a6e, #0284C7)', height: '190px' },
  { emoji: '🏎️', label: 'Luxury BMW', bg: 'linear-gradient(135deg, #1a1a2e, #0B5FFF)', height: '170px' },
  { emoji: '🎊', label: 'Corporate Event', bg: 'linear-gradient(135deg, #7c2d12, #F97316)', height: '210px' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Family Trip', bg: 'linear-gradient(135deg, #134e4a, #14B8A6)', height: '230px' },
  { emoji: '🌴', label: 'Beach Holiday', bg: 'linear-gradient(135deg, #0F172A, #FFC857)', height: '175px' },
  { emoji: '🚐', label: 'Group Travel', bg: 'linear-gradient(135deg, #1E3A5F, #EC4899)', height: '220px' },
]

export default function Gallery() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="gallery" ref={ref} style={{ background: 'var(--light)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">Gallery</div>
          <h2 className="section-title">
            Moments From Our <span>Journeys</span>
          </h2>
          <p className="section-desc">
            A glimpse into the premium travel experiences we create every day.
          </p>
        </div>

        <div className="gallery-grid reveal">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{ transitionDelay: `${i * 0.05}s` }}
              onClick={() => {}}
            >
              <div
                className="gallery-img"
                style={{
                  background: item.bg,
                  minHeight: item.height,
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontSize: '3rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))' }}>
                  {item.emoji}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', fontWeight: '600' }}>
                  {item.label}
                </span>
              </div>
              <div className="gallery-overlay">🔍</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="reveal">
          <a href="/gallery" className="btn btn-primary btn-lg">
            View Full Gallery →
          </a>
        </div>
      </div>
    </section>
  )
}
