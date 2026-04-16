const projects = [
  {
    title: "Hobit Mobile App",
    context: "Hobit Technology",
    description:
      "Rebuilt the company's mobile app from the ground up using React Native Expo with an API-less architecture for offline-first functionality. Integrated an AI-powered Diet Tracker and a custom 3D onboarding experience.",
    highlights: [
      "API-less offline-first architecture",
      "AI-powered Diet Tracker integration",
      "Custom 3D onboarding experience",
      "+50% user engagement increase",
    ],
    tags: ["React Native", "Expo", "AI", "Offline-first"],
    emoji: "📱",
    link: null,
  },
  {
    title: "Dietitian CRM",
    context: "Hobit Technology",
    description:
      "Comprehensive CRM managing 50,000+ clients with automated appointment scheduling, health data tracking, intelligent diet plan management, and an automated call reminder system for dietitian teams.",
    highlights: [
      "50,000+ client management",
      "Automated appointment scheduling",
      "Intelligent call reminder system",
      "Health data tracking dashboard",
    ],
    tags: ["React", "Node.js", "MySQL", "Google Cloud"],
    emoji: "🥗",
    link: null,
  },
  {
    title: "Drone Service Center Portal",
    context: "Indian Robotics Solution",
    description:
      "Full-stack repair tracking system with a customer portal, management dashboard, and technical team interface. Features automated WhatsApp notifications and PDF invoice delivery.",
    highlights: [
      "Multi-role portal (customer/team/admin)",
      "WhatsApp API automated notifications",
      "PDF invoice generation & delivery",
      "-40% customer inquiry volume",
    ],
    tags: ["React", "Node.js", "WhatsApp API", "Express"],
    emoji: "🚁",
    link: "https://droneservicecenter.in",
  },
  {
    title: "HR Management System",
    context: "Indian Robotics Solution",
    description:
      "Complete HR management platform with AI-powered photo-based attendance tracking and automated salary calculation. Designed from scratch including system architecture.",
    highlights: [
      "AI photo-based attendance tracking",
      "Automated salary calculation engine",
      "Complete system architecture design",
      "1,000+ active users",
    ],
    tags: ["React", "Nest.js", "AI/ML", "MySQL"],
    emoji: "👔",
    link: null,
  },
  {
    title: "Inventory Management ERP",
    context: "Indian Robotics Solution",
    description:
      "ERP system for drone parts inventory management with barcode scanning technology, stock tracking, and reporting. Reduced stock management time by 60%.",
    highlights: [
      "Barcode scanning integration",
      "Real-time stock tracking",
      "-60% stock management time",
      "Automated reporting",
    ],
    tags: ["React", "Node.js", "Express", "MySQL"],
    emoji: "📦",
    link: null,
  },
  {
    title: "VersusTyping",
    context: "Personal Project",
    description:
      "Interactive typing speed application with real-time WPM tracking, error highlighting, sound effects, and 5 unique game modes for competitive typing practice.",
    highlights: [
      "Real-time WPM tracking",
      "Error highlighting engine",
      "5 unique game modes",
      "Sound effects & animations",
    ],
    tags: ["React", "JavaScript", "CSS"],
    emoji: "⌨️",
    link: "https://versustyping.netlify.app",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h2 className="section-title">Key Projects</h2>
      <div className="section-divider" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="glass-card"
            style={{
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
              <div>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{project.emoji}</div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#333333",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "#E9631A",
                    fontWeight: 500,
                  }}
                >
                  {project.context}
                </span>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  id={`project-link-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  style={{
                    color: "#555555",
                    flexShrink: 0,
                    padding: "6px",
                    borderRadius: "8px",
                    border: "1px solid rgba(233, 99, 26,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "0.875rem",
                color: "#555555",
                lineHeight: 1.7,
                margin: 0,
                flexGrow: 1,
              }}
            >
              {project.description}
            </p>

            {/* Highlights */}
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              {project.highlights.map((h, j) => (
                <li
                  key={j}
                  style={{
                    display: "flex",
                    gap: "8px",
                    fontSize: "0.8rem",
                    color: "#555555",
                  }}
                >
                  <span style={{ color: "#555555" }}>✓</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="chip" style={{ fontSize: "0.72rem", padding: "3px 10px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
