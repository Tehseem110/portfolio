const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Amrita Vishwa Vidyapeetham",
    period: "Oct 2021 — Oct 2023",
    emoji: "🎓",
    color: "#E9631A",
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    field: "Finance & Banking",
    institution: "Manav Rachna International University",
    period: "Aug 2018 — May 2021",
    emoji: "📚",
    color: "#555555",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      style={{
        padding: "6rem 1.5rem",
        background: "rgba(235, 235, 223,0.5)",
        borderTop: "1px solid rgba(233, 99, 26,0.08)",
        borderBottom: "1px solid rgba(233, 99, 26,0.08)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {education.map((edu, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ padding: "2rem", display: "flex", gap: "1.25rem" }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: `rgba(233, 99, 26,0.1)`,
                  border: `1px solid rgba(233, 99, 26,0.2)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}
              >
                {edu.emoji}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#333333",
                    margin: "0 0 4px",
                    lineHeight: 1.35,
                  }}
                >
                  {edu.degree}
                  {edu.field && (
                    <span style={{ color: "#E9631A", display: "block", fontSize: "0.85rem", fontWeight: 500 }}>
                      {edu.field}
                    </span>
                  )}
                </h3>
                <p
                  className="gradient-text"
                  style={{ margin: "0 0 6px", fontSize: "0.9rem", fontWeight: 600 }}
                >
                  {edu.institution}
                </p>
                <span style={{ color: "#555555", fontSize: "0.82rem" }}>
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
