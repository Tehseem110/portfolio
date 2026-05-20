"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 92 },
      { name: "React Native", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 87 },
      { name: "Nest.js", level: 78 },
      { name: "RESTful APIs", level: 90 },
      { name: "Serverless", level: 75 },
    ],
  },
  {
    category: "Database & Cloud",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "Sequelize ORM", level: 80 },
      { name: "Google Cloud", level: 73 },
      { name: "Firebase", level: 70 },
    ],
  },
];

const techTags = [
  "React.js", "React Native", "Next.js", "Node.js", "Express.js",
  "Nest.js", "MySQL", "Sequelize", "Tailwind CSS", "Redux",
  "Google Cloud Functions", "Git", "RESTful APIs", "Serverless",
  "TypeScript", "JavaScript", "API Integration",
];

export default function SkillsSection() {
  const gridRef = useScrollReveal<HTMLDivElement>({ targets: "> div", stagger: 0.12, y: 35, duration: 0.65 });
  const tagsRef = useScrollReveal<HTMLDivElement>({ targets: "> span", stagger: 0.04, y: 20, duration: 0.5 });

  return (
    <section
      id="skills"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h2 className="section-title">Technical Skills</h2>
      <div className="section-divider" />

      {/* Skill groups */}
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3.5rem",
        }}
      >
        {skillGroups.map((group) => (
          <div key={group.category} className="glass-card skills-card" style={{ padding: "1.75rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>{group.icon}</span>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#E9631A",
                  margin: 0,
                }}
              >
                {group.category}
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {group.skills.map((skill) => (
                <div key={skill.name} className="skill-item-container">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", color: "#a3a3a3", fontWeight: 500 }}>
                      {skill.name}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "#E9631A", fontWeight: 600 }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar-bg" style={{ overflow: "visible" }}>
                    <div
                      className="skill-bar-fill"
                      style={{ 
                        width: `${skill.level}%`,
                        position: "relative",
                        transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                      }}
                    >
                      {/* Interactive glowing bubble at the tip of the fill bar */}
                      <span className="skill-bar-glow-dot" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All tech tags */}
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: "1rem",
        }}
      >
        Additional Technologies & Tools
      </h3>
      <div
        ref={tagsRef}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.6rem",
        }}
      >
        {techTags.map((tag) => (
          <span key={tag} className="chip tech-tag-chip">
            {tag}
          </span>
        ))}
      </div>

      <style>{`
        .skills-card {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s, box-shadow 0.4s !important;
        }
        .skills-card:hover {
          transform: translateY(-6px) scale(1.01) !important;
          border-color: rgba(233, 99, 26, 0.45) !important;
          box-shadow: 0 20px 40px rgba(233, 99, 26, 0.14) !important;
        }
        .skill-item-container:hover .skill-bar-fill {
          background: linear-gradient(90deg, #E9631A, #ff8c42) !important;
          box-shadow: 0 0 10px rgba(233, 99, 26, 0.5);
        }
        .skill-bar-glow-dot {
          position: absolute;
          right: -4px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff8c42;
          box-shadow: 0 0 12px #E9631A, 0 0 4px #ff8c42;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .skill-item-container:hover .skill-bar-glow-dot {
          opacity: 1;
        }
        .tech-tag-chip {
          transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
          cursor: default;
        }
        .tech-tag-chip:hover {
          background: rgba(233, 99, 26, 0.2) !important;
          color: #ff8c42 !important;
          border-color: rgba(233, 99, 26, 0.5) !important;
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 6px 14px rgba(233, 99, 26, 0.18);
        }
      `}</style>
    </section>
  );
}
