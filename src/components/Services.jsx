import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: "🏙️",
    title: "Local Rentals",
    desc: "Hourly and full-day car rentals within the city for errands, meetings, shopping, or leisure.",
    color: "rgba(11, 95, 255, 0.1)",
    iconBg: "linear-gradient(135deg, #0B5FFF, #3D80FF)",
  },
  {
    icon: "✈️",
    title: "Airport Transfer",
    desc: "Timely airport pick-up and drop with flight tracking. Never miss your flight again.",
    color: "rgba(0, 194, 168, 0.1)",
    iconBg: "linear-gradient(135deg, #00C2A8, #00A891)",
  },
  {
    icon: "🛣️",
    title: "Outstation Trips",
    desc: "Comfortable one-way and round-trip outstation travel with clean, AC vehicles.",
    color: "rgba(255, 200, 87, 0.1)",
    iconBg: "linear-gradient(135deg, #FFC857, #E6A800)",
  },
  {
    icon: "💼",
    title: "Corporate Car Rental",
    desc: "Professional chauffeur services for executives, client pickups, and corporate events.",
    color: "rgba(99, 102, 241, 0.1)",
    iconBg: "linear-gradient(135deg, #6366F1, #4F46E5)",
  },
  {
    icon: "💒",
    title: "Wedding Car Rental",
    desc: "Elegant and decorated vehicles for bridal parties, barat, and wedding celebrations.",
    color: "rgba(236, 72, 153, 0.1)",
    iconBg: "linear-gradient(135deg, #EC4899, #BE185D)",
  },
  {
    icon: "📅",
    title: "Monthly Car Hire",
    desc: "Economical monthly subscription packages for regular commuting with dedicated drivers.",
    color: "rgba(34, 197, 94, 0.1)",
    iconBg: "linear-gradient(135deg, #22C55E, #16A34A)",
  },
  {
    icon: "🏭",
    title: "Employee Transportation",
    desc: "Reliable staff pickup and drop services for IT parks, factories, and business hubs.",
    color: "rgba(249, 115, 22, 0.1)",
    iconBg: "linear-gradient(135deg, #F97316, #EA580C)",
  },
  {
    icon: "🗺️",
    title: "Tourist Packages",
    desc: "Curated multi-day tour packages to popular destinations with experienced tour guides.",
    color: "rgba(20, 184, 166, 0.1)",
    iconBg: "linear-gradient(135deg, #14B8A6, #0D9488)",
  },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section"
      id="services"
      ref={ref}
      style={{ background: "var(--light-2)" }}
    >
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">Our Services</div>
          <h2 className="section-title">
            Everything You Need for <span>Comfortable Travel</span>
          </h2>
          <p className="section-desc">
            From quick city rides in Jamshedpur to outstation trips across
            Jharkhand — we have the perfect vehicle and service for every
            occasion. Serving Jamshedpur and all nearby cities.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <div
              className="service-card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div
                className="service-icon"
                style={{ background: svc.iconBg, fontSize: "1.6rem" }}
              >
                {svc.icon}
              </div>
              <h4>{svc.title}</h4>
              <p>{svc.desc}</p>
              <Link
                to="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  marginTop: "1rem",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "var(--primary)",
                }}
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div
          style={{ textAlign: "center", marginTop: "3rem" }}
          className="reveal"
        >
          <Link to="/services" className="btn btn-primary btn-lg">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
