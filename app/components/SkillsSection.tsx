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
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        {skillGroups.map((group) => (
          <div key={group.category} className="glass-card" style={{ padding: "1.75rem" }}>
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

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", color: "#555555" }}>
                      {skill.name}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "#E9631A" }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All tech tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.6rem",
        }}
      >
        {techTags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
