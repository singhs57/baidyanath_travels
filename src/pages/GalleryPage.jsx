import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function GalleryPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }}>
            Gallery
          </div>
          <h1>Moments From Our Journeys</h1>
          <p>A glimpse of the premium travel experiences we've created — from weddings to corporate trips.</p>
        </div>
      </div>
      <Gallery />
      <Footer />
    </>
  )
}
