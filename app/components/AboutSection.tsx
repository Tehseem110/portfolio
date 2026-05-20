"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";

const about = {
  summary:
    "I'm a Full Stack Developer with 4+ years of experience building production-grade web and mobile applications. I specialize in crafting scalable systems — from CRM platforms managing 50,000+ users to offline-first mobile apps — using modern technologies across the full stack.",
  highlights: [
    {
      icon: "🚀",
      title: "Production-First Mindset",
      desc: "Every line of code I write is built for scale. I've shipped 10+ live products serving real users in production.",
    },
    {
      icon: "📱",
      title: "Mobile & Web Expertise",
      desc: "Deep experience in React Native for cross-platform mobile and Next.js for high-performance web applications.",
    },
    {
      icon: "🏗️",
      title: "System Architecture",
      desc: "Comfortable owning projects end-to-end — from database schema design to serverless backend to pixel-perfect UI.",
    },
    {
      icon: "⚡",
      title: "Performance Driven",
      desc: "Reduced server dependencies by 40%, infrastructure costs by 30%, and stock management time by 60% across projects.",
    },
  ],
};

export default function AboutSection() {
  const bioRef = useScrollReveal<HTMLDivElement>({ stagger: 0.14, y: 32, duration: 0.7 });
  const cardsRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1, y: 36, duration: 0.6 });

  return (
    <section
      id="about"
      style={{
        padding: "6rem 1.5rem",
        background: "rgba(10, 10, 10, 0.5)",
        borderTop: "1px solid rgba(233, 99, 26,0.08)",
        borderBottom: "1px solid rgba(233, 99, 26,0.08)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: bio */}
          <div ref={bioRef}>
            <p
              style={{
                color: "#a3a3a3",
                fontSize: "1.05rem",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              {about.summary}
            </p>

            <p
              style={{
                color: "#a3a3a3",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              My journey started as a backend intern and quickly evolved into
              leading full-stack development of enterprise systems — HR
              platforms, ERP tools, CRM suites, and API-less mobile apps. I
              thrive when solving complex problems that have real impact.
            </p>

            {/* Quick facts */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                { label: "Location", value: "India 🇮🇳" },
                { label: "Email", value: "tehseem010@gmail.com" },
                { label: "Focus", value: "Full Stack Web & Mobile" },
                { label: "Status", value: "Open to Opportunities ✅" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    fontSize: "0.88rem",
                  }}
                >
                  <span style={{ color: "#a3a3a3", minWidth: "90px" }}>
                    {fact.label}
                  </span>
                  <span style={{ color: "#E9631A", fontWeight: 500 }}>
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: highlight cards */}
          <div
            ref={cardsRef}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {about.highlights.map((h) => (
              <div
                key={h.title}
                className="glass-card"
                style={{ padding: "1.5rem" }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
                  {h.icon}
                </div>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {h.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#a3a3a3",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
