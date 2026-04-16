const experiences = [
  {
    role: "Full Stack Developer",
    company: "Hobit Technology",
    period: "Jan 2024 — Present",
    current: true,
    bullets: [
      "Architected the company's flagship mobile app from scratch using React Native Expo with API-less architecture, reducing server dependencies by 40% and improving performance by 35%.",
      "Built comprehensive Dietitian CRM managing 50,000+ clients with automated appointment scheduling, health data tracking, diet plan management, and intelligent call reminder system.",
      "Designed Sales CRM for BDA teams, streamlining lead management and improving conversion rates by 25% through automated tracking and analytics.",
      "Managed scalable backend infrastructure using Google Cloud Functions with serverless architecture, reducing infrastructure costs by 30%.",
    ],
    tags: ["React Native", "Expo", "Node.js", "Google Cloud", "CRM"],
  },
  {
    role: "Full Stack Developer",
    company: "Indian Robotics Solution",
    period: "Jan 2023 — Feb 2024",
    current: false,
    bullets: [
      "Led end-to-end development of 5 production applications using React, Node.js, Express, and Nest.js, serving 1,000+ users.",
      "Designed complete system architecture for HR Management System with AI-powered photo-based attendance tracking and automated salary calculation.",
      "Developed Inventory Management ERP with barcode scanning for drone parts, reducing stock management time by 60%.",
      "Built Drone Repair Tracking System with WhatsApp API integration for automated status updates, improving customer satisfaction by 45%.",
    ],
    tags: ["React", "Node.js", "Nest.js", "Express", "WhatsApp API"],
  },
  {
    role: "Backend Developer Intern",
    company: "Quixgo PVT",
    period: "Oct 2022 — Jan 2023",
    current: false,
    bullets: [
      "Built robust backend infrastructure using Node.js, Express, and MySQL with Sequelize ORM for an e-commerce platform.",
      "Integrated 8+ third-party APIs including payment gateways and logistics services, enhancing platform functionality and user experience.",
    ],
    tags: ["Node.js", "Express", "MySQL", "Sequelize"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem 1.5rem",
        background: "rgba(235, 235, 223,0.5)",
        borderTop: "1px solid rgba(233, 99, 26,0.08)",
        borderBottom: "1px solid rgba(233, 99, 26,0.08)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 className="section-title">Experience</h2>
        <div className="section-divider" />

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ padding: "2rem", position: "relative", overflow: "hidden" }}
            >
              {exp.current && (
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "3px 12px",
                    borderRadius: "9999px",
                    background: "rgba(233, 99, 26,0.1)",
                    border: "1px solid rgba(233, 99, 26,0.25)",
                    color: "#555555",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#E9631A",
                      display: "inline-block",
                    }}
                  />
                  Current
                </div>
              )}

              {/* Header */}
              <div style={{ marginBottom: "1.25rem" }}>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#333333",
                    margin: "0 0 4px",
                  }}
                >
                  {exp.role}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span className="gradient-text" style={{ fontWeight: 600 }}>
                    {exp.company}
                  </span>
                  <span style={{ color: "#555555", fontSize: "0.85rem" }}>
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul
                style={{
                  listStyle: "none",
                  margin: "0 0 1.25rem",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: "12px",
                      color: "#555555",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                    }}
                  >
                    <span style={{ color: "#E9631A", marginTop: "6px", flexShrink: 0 }}>▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {exp.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
