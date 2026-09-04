import Fleet from '../components/Fleet'
import Footer from '../components/Footer'

export default function FleetPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }}>
            Our Fleet
          </div>
          <h1>Premium Vehicle Fleet</h1>
          <p>Choose from hatchbacks to luxury SUVs — all GPS-enabled, AC, and maintained for your comfort.</p>
        </div>
      </div>
      <Fleet />
      <Footer />
    </>
  )
}
