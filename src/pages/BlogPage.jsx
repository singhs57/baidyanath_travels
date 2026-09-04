import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { X, Calendar, Clock, Tag } from 'lucide-react'
import { waHref, blogBookingMsg } from '../utils/whatsappMessage'

const BLOGS = [
  {
    id: 1,
    emoji: '✈️',
    bg: 'linear-gradient(135deg, #0F172A, #00C2A8)',
    tag: 'Travel Tips',
    title: '10 Tips for a Stress-Free Airport Transfer',
    excerpt: 'Arriving at the airport on time is crucial. Here are expert tips to make your airport transfers smooth and hassle-free every time.',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    content: [
      {
        type: 'intro',
        text: 'Airport transfers can be one of the most stressful parts of any trip — but they don\'t have to be. Whether you\'re catching an early morning flight or arriving late at night, a little planning goes a long way. Here are 10 expert tips from the Baidyanath Travels team to make every airport transfer smooth, punctual, and stress-free.',
      },
      {
        type: 'heading',
        text: '1. Book Your Cab in Advance',
      },
      {
        type: 'para',
        text: 'Never rely on last-minute bookings, especially for early morning or late-night flights. Pre-booking your cab gives you a confirmed vehicle, a known driver, and peace of mind the night before. At Baidyanath Travels, we confirm bookings within 15 minutes.',
      },
      {
        type: 'heading',
        text: '2. Share Your Flight Details',
      },
      {
        type: 'para',
        text: 'Always share your flight number with your cab provider. We track flights in real time, so if your flight is delayed, your driver will automatically adjust the pickup time — no extra calls needed.',
      },
      {
        type: 'heading',
        text: '3. Allow Buffer Time',
      },
      {
        type: 'para',
        text: 'Plan to reach the airport at least 2 hours before a domestic flight and 3 hours before an international one. Factor in traffic, check-in queues, and security. A 20-minute buffer can save a missed flight.',
      },
      {
        type: 'heading',
        text: '4. Confirm Your Pickup Point Clearly',
      },
      {
        type: 'para',
        text: 'Airports have multiple exits and terminals. Clearly communicate your terminal, exit gate, and exact pickup spot when booking. For arrivals, ask the driver to wait at the arrivals gate with your name on a placard.',
      },
      {
        type: 'heading',
        text: '5. Keep Your Driver\'s Number Saved',
      },
      {
        type: 'para',
        text: 'Save your driver\'s contact number as soon as you receive it. In case of any confusion at the airport, a quick call resolves everything instantly.',
      },
      {
        type: 'heading',
        text: '6. Travel Light When Possible',
      },
      {
        type: 'para',
        text: 'Packing light means faster check-in, no baggage fees, and a quicker exit from the airport after landing. If you must carry heavy luggage, inform your cab provider so they can arrange an appropriate vehicle.',
      },
      {
        type: 'heading',
        text: '7. Use a Trusted Cab Service',
      },
      {
        type: 'para',
        text: 'Choose a verified, professional cab service over random app cabs for airport transfers. Professional services offer driver tracking, guaranteed vehicles, and customer support — critical when your flight schedule is at stake.',
      },
      {
        type: 'heading',
        text: '8. Check the Traffic Before You Leave',
      },
      {
        type: 'para',
        text: 'Especially for morning departures, check Google Maps or Waze for live traffic. Jamshedpur\'s NH-33 and city roads can get busy. Leaving 15 minutes earlier can be the difference between a relaxed check-in and a sprint to the gate.',
      },
      {
        type: 'heading',
        text: '9. Keep Your Documents Ready',
      },
      {
        type: 'para',
        text: 'Place your ID, boarding pass (or phone), and booking reference in an easy-to-reach pocket before you leave home. You won\'t want to dig through your bag at the check-in counter.',
      },
      {
        type: 'heading',
        text: '10. Communicate Special Needs',
      },
      {
        type: 'para',
        text: 'Travelling with elderly family members, infants, or large equipment? Let your cab service know when booking. We can arrange child seats, extra luggage space, or wheelchair-accessible vehicles on request.',
      },
      {
        type: 'closing',
        text: 'A smooth airport transfer sets the tone for your entire journey. With Baidyanath Travels, you get a professional driver, a well-maintained vehicle, and real-time flight tracking — so you can focus on your trip, not the logistics.',
      },
    ],
  },
  {
    id: 2,
    emoji: '🏔️',
    bg: 'linear-gradient(135deg, #0c4a6e, #0284C7)',
    tag: 'Destinations',
    title: 'Best Road Trip Routes in Jharkhand for 2025',
    excerpt: 'From serene waterfalls to ancient temples, explore Jharkhand\'s most breathtaking road trip routes perfect for families and adventure seekers.',
    date: 'Dec 5, 2024',
    readTime: '8 min read',
    content: [
      {
        type: 'intro',
        text: 'Jharkhand is one of India\'s most underrated road trip destinations. Lush forests, ancient temples, spectacular waterfalls, and rolling hills make every drive a visual treat. Here are the best road trip routes you should plan for 2025.',
      },
      {
        type: 'heading',
        text: 'Route 1: Jamshedpur → Deoghar (280 km)',
      },
      {
        type: 'para',
        text: 'The spiritual heart of Jharkhand, Deoghar is home to the Baba Baidyanath Jyotirlinga temple — one of the 12 sacred Jyotirlingas in India. The NH-33 drive takes about 5 hours and passes through dense forests and scenic villages. Best visited during Shravan (July–August) for the Kanwar Mela, or in winter for pleasant weather.',
      },
      {
        type: 'heading',
        text: 'Route 2: Jamshedpur → Ranchi → Netarhat (230 km)',
      },
      {
        type: 'para',
        text: 'Called the "Queen of Chotanagpur", Netarhat is famous for its stunning sunrise and sunset points. The drive via Ranchi takes you through winding hill roads surrounded by sal forests. Stay overnight to catch both sunrise and the famous Magnolia Falls nearby.',
      },
      {
        type: 'heading',
        text: 'Route 3: Jamshedpur → Dalma Wildlife Sanctuary',
      },
      {
        type: 'para',
        text: 'Just 10 km from Jamshedpur city, Dalma is a quick half-day escape. The sanctuary is home to wild elephants, leopards, and hundreds of bird species. Drive up to Dalma hills for a panoramic view of the steel city and the Subarnarekha river valley below.',
      },
      {
        type: 'heading',
        text: 'Route 4: Ranchi → Hundru Falls → Jonha Falls',
      },
      {
        type: 'para',
        text: 'Jharkhand has over 40 waterfalls, and this loop covers two of the best. Hundru Falls (98 m drop) and Jonha Falls (17 m drop) are both within 45 km of Ranchi. This is an ideal one-day road trip for families — pack a picnic and enjoy the spray.',
      },
      {
        type: 'heading',
        text: 'Route 5: Jamshedpur → Baharagora → Chandil Dam',
      },
      {
        type: 'para',
        text: 'The Chandil Dam reservoir is a serene picnic spot with boating facilities. The 50 km drive from Jamshedpur is quick and easy on NH-6. A perfect weekend escape — arrive early, hire a boat, and enjoy the reflections of the surrounding hills on the water.',
      },
      {
        type: 'heading',
        text: 'Travel Tips for Jharkhand Road Trips',
      },
      {
        type: 'para',
        text: 'Best season: October to March. Carry cash — many remote areas have no ATMs. Book a self-drive or chauffeur-driven cab from Baidyanath Travels for multi-day tours with flexible stops. Our drivers are local experts who know every shortcut and viewpoint.',
      },
      {
        type: 'closing',
        text: 'Jharkhand rewards those who explore it slowly. Rent a comfortable Innova or SUV, hire one of our experienced local drivers, and discover why this state is fast becoming one of India\'s most exciting road trip destinations.',
      },
    ],
  },
  {
    id: 3,
    emoji: '💼',
    bg: 'linear-gradient(135deg, #1e1b4b, #6366F1)',
    tag: 'Corporate',
    title: 'Why Your Business Needs a Corporate Car Rental Partner',
    excerpt: 'Corporate car rental programs save money, improve employee productivity, and enhance your company\'s professional image.',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    content: [
      {
        type: 'intro',
        text: 'Managing employee transportation is a challenge that grows with your company. Ad-hoc cabs, reimbursement headaches, inconsistent service quality — these are problems every HR and operations manager knows well. A dedicated corporate car rental partnership solves all of them.',
      },
      {
        type: 'heading',
        text: 'Consistent Quality, Every Trip',
      },
      {
        type: 'para',
        text: 'With a corporate partner, every executive gets the same clean, AC vehicle and the same professional driver — not a random app cab that may arrive late or in poor condition. First impressions matter, especially when you\'re picking up a client from the airport.',
      },
      {
        type: 'heading',
        text: 'Significant Cost Savings',
      },
      {
        type: 'para',
        text: 'Monthly corporate packages at Baidyanath Travels are priced 30–40% below daily retail rates. Combined with centralized billing, you eliminate individual reimbursement claims, reduce finance team workload, and gain full visibility into transport spending.',
      },
      {
        type: 'heading',
        text: 'Employee Safety and Accountability',
      },
      {
        type: 'para',
        text: 'All our corporate drivers are background-verified, licensed, and trained in professional conduct. GPS tracking on every vehicle means you always know where your employees are — critical for late-night shifts and remote site visits.',
      },
      {
        type: 'heading',
        text: 'Flexible Fleet for Every Need',
      },
      {
        type: 'para',
        text: 'Board-level executive? We assign a Mercedes or BMW with a suit-clad chauffeur. Team outing for 15 people? A Tempo Traveller. Daily commute for your IT workforce? Dedicated sedans on fixed routes. One partner, every need covered.',
      },
      {
        type: 'heading',
        text: 'Dedicated Account Manager',
      },
      {
        type: 'para',
        text: 'Every corporate client at Baidyanath Travels gets a dedicated account manager — a single point of contact for bookings, escalations, billing, and special requests. No call centres, no bots. Real people, real accountability.',
      },
      {
        type: 'heading',
        text: 'How to Get Started',
      },
      {
        type: 'para',
        text: 'Getting a corporate account takes less than 24 hours. Call us at +91-8210049424, share your monthly travel volume and vehicle requirements, and we\'ll send you a customised proposal. Most clients see cost savings from the very first month.',
      },
      {
        type: 'closing',
        text: 'In a competitive business environment, the companies that win are the ones that take care of their people. Reliable, comfortable, professional transportation is a small investment that delivers real returns in productivity and morale.',
      },
    ],
  },
  {
    id: 4,
    emoji: '💰',
    bg: 'linear-gradient(135deg, #14532d, #22C55E)',
    tag: 'Savings',
    title: 'Monthly Car Hire vs Daily Rental: Which Saves More?',
    excerpt: 'If you travel regularly, a monthly car hire package can save you up to 40% compared to daily booking. Here\'s the full comparison.',
    date: 'Nov 20, 2024',
    readTime: '5 min read',
    content: [
      {
        type: 'intro',
        text: 'If you\'re booking a cab more than 15 days a month, you\'re almost certainly paying more than you need to. Monthly car hire packages exist precisely for frequent travelers — and the savings can be substantial. Let\'s break down the numbers.',
      },
      {
        type: 'heading',
        text: 'The Daily Rental Math',
      },
      {
        type: 'para',
        text: 'A standard sedan rental in Jamshedpur costs approximately ₹1,200–₹1,500 per day including driver and fuel for local use. Over 25 working days, that\'s ₹30,000–₹37,500 per month. Add weekend bookings for personal use and the number climbs further.',
      },
      {
        type: 'heading',
        text: 'The Monthly Package Math',
      },
      {
        type: 'para',
        text: 'A monthly package for a dedicated sedan with driver from Baidyanath Travels starts at ₹22,000–₹25,000 per month for up to 26 days / 200 km per day. That\'s a saving of ₹8,000–₹12,000 every single month — over ₹1 lakh annually.',
      },
      {
        type: 'heading',
        text: 'What\'s Included in a Monthly Package',
      },
      {
        type: 'para',
        text: 'Our monthly packages include: dedicated vehicle and driver assigned specifically to you, fuel for up to the daily km limit, driver allowance and night halt (if applicable), priority customer support, and a monthly consolidated invoice for easy accounting.',
      },
      {
        type: 'heading',
        text: 'When Daily Rental Makes More Sense',
      },
      {
        type: 'para',
        text: 'If you travel fewer than 10–12 days a month, or your travel needs are unpredictable (different cities each week), daily rental gives you the flexibility you need without committing to a monthly fee. Many of our customers use a mix — monthly package for weekday office commutes, and daily bookings for outstation trips.',
      },
      {
        type: 'heading',
        text: 'Hidden Costs to Watch For',
      },
      {
        type: 'para',
        text: 'Always read the fine print. Some monthly packages charge separately for fuel, driver overtime, and extra kilometres. At Baidyanath Travels, we believe in transparent pricing — everything is detailed upfront, and there are no surprise charges at the end of the month.',
      },
      {
        type: 'closing',
        text: 'The bottom line: if you\'re a regular traveler or a business with ongoing transportation needs, a monthly package is almost always the smarter financial choice. Call us today for a personalised quote tailored to your exact usage pattern.',
      },
    ],
  },
  {
    id: 5,
    emoji: '🛡️',
    bg: 'linear-gradient(135deg, #7c2d12, #F97316)',
    tag: 'Safety',
    title: 'Our 10-Point Vehicle Safety Checklist',
    excerpt: 'Before every trip, our team runs a comprehensive 10-point safety check on every vehicle. Here\'s what we inspect and why it matters.',
    date: 'Nov 12, 2024',
    readTime: '4 min read',
    content: [
      {
        type: 'intro',
        text: 'At Baidyanath Travels, safety is not a checkbox — it\'s a culture. Before any vehicle leaves our fleet for a trip, our trained mechanics and fleet managers run through a strict 10-point safety inspection. Here\'s exactly what we check and why each point matters to you.',
      },
      {
        type: 'heading',
        text: '1. Tyre Condition & Pressure',
      },
      {
        type: 'para',
        text: 'Tyres are your only contact with the road. We check tread depth, sidewall condition, and tyre pressure before every trip. Under-inflated or worn tyres are a leading cause of accidents, especially on wet roads.',
      },
      {
        type: 'heading',
        text: '2. Brakes — Pads, Fluid & Responsiveness',
      },
      {
        type: 'para',
        text: 'We inspect brake pad thickness, check brake fluid levels, and do a slow-speed brake test before dispatch. Any vehicle with reduced brake responsiveness is pulled from the fleet immediately.',
      },
      {
        type: 'heading',
        text: '3. Engine Oil & Coolant Levels',
      },
      {
        type: 'para',
        text: 'Low engine oil or coolant can cause engine seizure mid-journey — a breakdown risk that can strand passengers on a highway. Both are checked and topped up as needed before every long trip.',
      },
      {
        type: 'heading',
        text: '4. All Lights — Headlights, Indicators & Reverse',
      },
      {
        type: 'para',
        text: 'Every external light is tested: headlights (high and low beam), fog lights, indicators, brake lights, and reverse lights. A faulty indicator or brake light is a safety hazard for other road users and can result in accidents at night.',
      },
      {
        type: 'heading',
        text: '5. Windscreen & Wiper Condition',
      },
      {
        type: 'para',
        text: 'A cracked windscreen or worn wiper blades severely reduces visibility in rain. We replace wipers every monsoon season and check windscreens for cracks that obscure the driver\'s line of sight.',
      },
      {
        type: 'heading',
        text: '6. AC System Functionality',
      },
      {
        type: 'para',
        text: 'Jharkhand summers are intense. A non-functional AC is not just a comfort issue — it\'s a health risk on long trips. We service AC systems quarterly and check cooling performance before every customer dispatch.',
      },
      {
        type: 'heading',
        text: '7. Seat Belts — All Rows',
      },
      {
        type: 'para',
        text: 'All seat belts — front and rear — are tested for proper latch, retraction, and tensioner function. Seat belts reduce fatal injury risk by 45%. We treat a faulty belt as a non-negotiable vehicle grounding.',
      },
      {
        type: 'heading',
        text: '8. First Aid Kit & Emergency Equipment',
      },
      {
        type: 'para',
        text: 'Every vehicle carries a stocked first aid kit, a fire extinguisher, a warning triangle, and a tow rope. In an emergency, seconds matter. Our drivers are also trained in basic first aid.',
      },
      {
        type: 'heading',
        text: '9. GPS Tracking System',
      },
      {
        type: 'para',
        text: 'All vehicles are GPS-enabled and tracked in real time. This allows our operations team to monitor routes, respond to emergencies, and share live location with customers on request.',
      },
      {
        type: 'heading',
        text: '10. Driver Fitness & Sobriety Check',
      },
      {
        type: 'para',
        text: 'No vehicle departs without a quick driver wellness check. Drivers who show signs of fatigue, illness, or any impairment are immediately replaced. Your driver\'s state of mind is as important as the vehicle\'s mechanical condition.',
      },
      {
        type: 'closing',
        text: 'These 10 checks take our team about 20 minutes per vehicle — a small investment of time for the safety of every passenger on board. When you travel with Baidyanath Travels, you travel knowing that someone cared enough to make sure everything was checked.',
      },
    ],
  },
]

function BlogModal({ post, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [onClose])

  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      <div className="blog-modal" onClick={e => e.stopPropagation()}>
        {/* Header image */}
        <div className="blog-modal-hero" style={{ background: post.bg }}>
          <span className="blog-modal-emoji">{post.emoji}</span>
          <button className="blog-modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Article */}
        <div className="blog-modal-body">
          <div className="blog-modal-meta">
            <span className="blog-tag"><Tag size={11} /> {post.tag}</span>
            <span><Calendar size={12} /> {post.date}</span>
            <span><Clock size={12} /> {post.readTime}</span>
          </div>

          <h2 className="blog-modal-title">{post.title}</h2>

          <div className="blog-modal-content">
            {post.content.map((block, i) => {
              if (block.type === 'heading') {
                return <h3 key={i} className="blog-modal-heading">{block.text}</h3>
              }
              if (block.type === 'intro' || block.type === 'closing') {
                return <p key={i} className="blog-modal-intro">{block.text}</p>
              }
              return <p key={i} className="blog-modal-para">{block.text}</p>
            })}
          </div>

          <div className="blog-modal-footer">
            <a
              href={waHref(blogBookingMsg(post.title))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              💬 Book a Ride on WhatsApp
            </a>
            <button className="btn btn-outline" onClick={onClose}>
              ← Back to Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [activePost, setActivePost] = useState(null)

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }}>
            Blog
          </div>
          <h1>Travel Tips & Insights</h1>
          <p>Stories, guides, and travel tips from the Baidyanath Travels team.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="blog-grid">
            {BLOGS.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-img" style={{ background: post.bg }}>
                  <span style={{ fontSize: '3.5rem' }}>{post.emoji}</span>
                </div>
                <div className="blog-content">
                  <span className="blog-tag">{post.tag}</span>
                  <h4>{post.title}</h4>
                  <p style={{ fontSize: '0.88rem' }}>{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>📅 {post.date}</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                  <button
                    className="btn btn-outline btn-sm"
                    style={{ marginTop: '1rem' }}
                    onClick={() => setActivePost(post)}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activePost && (
        <BlogModal post={activePost} onClose={() => setActivePost(null)} />
      )}

      <Footer />
    </>
  )
}
