"use client";

// TIP: For `image`, drop your file into public/projects/ and set the path
// e.g.  image: "/projects/hobfit.png"
// If no image is provided, the emoji is shown instead.

const projects = [
  {
    title: "Hobfit Mobile App",
    context: "Hobit Technology",
    description:
      "Rebuilt the company's mobile app from the ground up using React Native Expo with an API-less architecture for offline-first functionality. Integrated an AI-powered Diet Tracker and a custom 3D onboarding experience.",
    highlights: [
      "High Quality 3D Model Onboarding Screen",
      "AI-powered Diet Tracker integration",
      "Api Less Architecture  for improved performace",
      "Custom AI Chatbot for diet and fitness",
    ],
    tags: ["React Native", "Expo", "AI"],
    emoji: "📱",
    image: "/Image/hobfit.jpg", // The public folder is served at root "/"
    type: "mobile" as const,
    isPublic: true,
    androidLink:
      "https://play.google.com/store/apps/details?id=com.hobitb2c&pcampaignid=web_share",
    iosLink:
      "https://apps.apple.com/in/app/hobfit-women-health-wellness/id1536252998",
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
    tags: ["React", "Node.js", "Firestore", "Google Cloud"],
    emoji: "🥗",
    image: undefined as string | undefined,
    type: "website" as const,
    isPublic: false,
    link: null,
  },
  {
    title: "Sales Pulse CRM",
    context: "Hobit Technology",
    description:
      "A sales management platform built for managers to oversee their agent teams end-to-end — from lead generation and assignment to client history tracking. The core feature is real-time agent talktime analytics, enabling managers to optimize lead distribution and objectively judge individual performance.",
    highlights: [
      "Agent talktime tracking & analytics",
      "Smart lead assignment & distribution",
      "Full client interaction history",
      "Manager dashboard for team performance",
    ],
    tags: ["React", "Node.js", "Firestore", "Google Cloud"],
    emoji: "📊",
    image: undefined as string | undefined,
    type: "website" as const,
    isPublic: false,
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
    image: undefined as string | undefined,
    type: "website" as const,
    isPublic: true,
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
    image: undefined as string | undefined,
    type: "website" as const,
    isPublic: false,
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
    image: undefined as string | undefined,
    type: "website" as const,
    isPublic: false,
    link: null,
  },
];

/* SVG Icons */
const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M17.523 15.341a.5.5 0 01-.5.5H6.977a.5.5 0 01-.5-.5V9.5h11.046v5.841zM6.977 5.5h10.046a.5.5 0 01.5.5v2.5H6.477V6a.5.5 0 01.5-.5zM8.5 3.5l1-2h5l1 2H8.5zM5.5 7.5A1.5 1.5 0 004 9v7a1.5 1.5 0 001.5 1.5V19a1 1 0 002 0v-1.5h9V19a1 1 0 002 0v-1.5A1.5 1.5 0 0020 16V9a1.5 1.5 0 00-1.5-1.5V6a2.5 2.5 0 00-2.5-2.5h-8A2.5 2.5 0 005.5 6v1.5z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

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
        {projects.map((project, i) => {
          const hasMobileLinks =
            project.type === "mobile" &&
            project.isPublic &&
            (project.androidLink || project.iosLink);
          const hasWebLink =
            project.type === "website" && project.isPublic && project.link;
          const hasAnyLink = hasMobileLinks || hasWebLink;

          return (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle top accent for cards with links */}
              {hasAnyLink && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, #E9631A, #f59e0b)",
                    borderRadius: "12px 12px 0 0",
                  }}
                />
              )}

              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    width: "52px",
                    height: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    background: project.image
                      ? "transparent"
                      : "rgba(233, 99, 26, 0.1)",
                    border: "1px solid rgba(233, 99, 26, 0.2)",
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    project.emoji
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#ffffff",
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
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#a3a3a3",
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
                      color: "#a3a3a3",
                    }}
                  >
                    <span style={{ color: "#E9631A", fontWeight: 700 }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="chip"
                    style={{ fontSize: "0.72rem", padding: "3px 10px" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Links — only shown when links exist */}
              {hasAnyLink && (
                <div
                  style={{
                    display: "flex",
                    gap: "0.6rem",
                    marginTop: "0.25rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {hasMobileLinks && (
                    <>
                      {project.androidLink && (
                        <a
                          href={project.androidLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`project-android-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            padding: "10px 14px",
                            borderRadius: "10px",
                            background:
                              "linear-gradient(135deg, #E9631A, #f59e0b)",
                            color: "#fff",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            transition: "opacity 0.2s, transform 0.2s",
                            boxShadow: "0 4px 15px rgba(233, 99, 26, 0.35)",
                          }}
                          onMouseEnter={(e) => {
                            (
                              e.currentTarget as HTMLAnchorElement
                            ).style.opacity = "0.88";
                            (
                              e.currentTarget as HTMLAnchorElement
                            ).style.transform = "translateY(-1px)";
                          }}
                          onMouseLeave={(e) => {
                            (
                              e.currentTarget as HTMLAnchorElement
                            ).style.opacity = "1";
                            (
                              e.currentTarget as HTMLAnchorElement
                            ).style.transform = "translateY(0)";
                          }}
                        >
                          <AndroidIcon />
                          Play Store
                        </a>
                      )}
                      {project.iosLink && (
                        <a
                          href={project.iosLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`project-ios-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            padding: "10px 14px",
                            borderRadius: "10px",
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "#fff",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            transition: "background 0.2s, transform 0.2s",
                            backdropFilter: "blur(8px)",
                          }}
                          onMouseEnter={(e) => {
                            (
                              e.currentTarget as HTMLAnchorElement
                            ).style.background = "rgba(255,255,255,0.12)";
                            (
                              e.currentTarget as HTMLAnchorElement
                            ).style.transform = "translateY(-1px)";
                          }}
                          onMouseLeave={(e) => {
                            (
                              e.currentTarget as HTMLAnchorElement
                            ).style.background = "rgba(255,255,255,0.06)";
                            (
                              e.currentTarget as HTMLAnchorElement
                            ).style.transform = "translateY(0)";
                          }}
                        >
                          <AppleIcon />
                          App Store
                        </a>
                      )}
                    </>
                  )}

                  {hasWebLink && (
                    <a
                      href={project.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-link-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, #E9631A, #f59e0b)",
                        color: "#fff",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "opacity 0.2s, transform 0.2s",
                        boxShadow: "0 4px 15px rgba(233, 99, 26, 0.35)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.opacity =
                          "0.88";
                        (e.currentTarget as HTMLAnchorElement).style.transform =
                          "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.opacity =
                          "1";
                        (e.currentTarget as HTMLAnchorElement).style.transform =
                          "translateY(0)";
                      }}
                    >
                      <ExternalLinkIcon />
                      Visit Website
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
