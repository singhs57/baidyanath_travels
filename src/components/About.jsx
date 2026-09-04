import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Shield, Clock, Users } from "lucide-react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.15 },
    );
    ref.current
      ?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Shield size={20} />,
      title: "Safe & Reliable",
      desc: "Well-maintained vehicles with safety checks before every trip.",
    },
    {
      icon: <Users size={20} />,
      title: "Expert Drivers",
      desc: "Verified, licensed, and courteous professional chauffeurs.",
    },
    {
      icon: <Clock size={20} />,
      title: "24x7 Availability",
      desc: "Round the clock service, 365 days a year for your convenience.",
    },
    {
      icon: <Award size={20} />,
      title: "Best Rates",
      desc: "Transparent pricing with no hidden charges. Value for money.",
    },
  ];

  const images = [
    {
      emoji: "🚗",
      bg: "linear-gradient(135deg, #1E3A5F, #0B5FFF)",
      tall: false,
    },
    {
      emoji: "✈️",
      bg: "linear-gradient(135deg, #0F172A, #00C2A8)",
      tall: true,
    },
    {
      emoji: "🏢",
      bg: "linear-gradient(135deg, #1E293B, #334155)",
      tall: false,
    },
    {
      emoji: "💒",
      bg: "linear-gradient(135deg, #4F1D96, #7C3AED)",
      tall: false,
    },
  ];

  return (
    <section
      className="section"
      id="about"
      ref={ref}
      style={{ background: "var(--light)" }}
    >
      <div className="container">
        <div className="about-grid">
          {/* Image Grid */}
          <div className="about-img-grid reveal-left">
            {images.map((img, i) => (
              <div
                key={i}
                className={`about-img-card ${img.tall ? "tall" : ""}`}
                style={{
                  background: img.bg,
                  transition: `var(--transition)`,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <span
                  style={{
                    fontSize: img.tall ? "5rem" : "3.5rem",
                    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
                  }}
                >
                  {img.emoji}
                </span>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="reveal-right">
            <div className="section-badge">About Us</div>
            <h2 className="section-title">
              Your Trusted Travel Partner <span>Since 2010</span>
            </h2>
            <p style={{ marginBottom: "1.25rem" }}>
              Baidyanath Travels has been providing premium car rental and
              travel services for over a decade. We started with a single
              vehicle and a dream to offer reliable, comfortable, and affordable
              transportation to every traveler.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              Today, we operate a fleet of 100+ well-maintained vehicles ranging
              from hatchbacks to luxury SUVs, serving thousands of happy
              customers in Jamshedpur and nearby cities across Jharkhand —
              covering airports, railway stations, corporate campuses, and
              wedding venues.
            </p>

            <div className="about-features">
              {features.map((f, i) => (
                <div className="about-feature" key={i}>
                  <div className="about-feature-icon">{f.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
                      {f.title}
                    </h4>
                    <p style={{ fontSize: "0.88rem", margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
              <a href="tel:+918210049424" className="btn btn-outline">
                <CheckCircle size={16} /> Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
