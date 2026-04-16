export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-bg grid-pattern"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(233, 99, 26,0.12) 0%, transparent 70%)",
          top: "-150px",
          right: "-150px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(235, 235, 223,0.08) 0%, transparent 70%)",
          bottom: "-100px",
          left: "-100px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="animate-fade-up"
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 18px",
            borderRadius: "9999px",
            background: "rgba(233, 99, 26,0.12)",
            border: "1px solid rgba(233, 99, 26,0.25)",
            color: "#555555",
            fontSize: "0.82rem",
            fontWeight: 500,
            marginBottom: "1.75rem",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#E9631A",
              display: "inline-block",
              boxShadow: "0 0 8px #E9631A",
            }}
          />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            color: "#333333",
          }}
        >
          Tehseem{" "}
          <span className="gradient-text">Ahmed</span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
            color: "var(--muted)",
            marginBottom: "1.25rem",
            fontWeight: 400,
          }}
        >
          Full Stack Developer
        </p>

        {/* Summary */}
        <p
          style={{
            fontSize: "1rem",
            color: "#555555",
            lineHeight: 1.75,
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          3+ years building scalable web & mobile apps with{" "}
          <strong style={{ color: "#555555" }}>React Native</strong>,{" "}
          <strong style={{ color: "#555555" }}>Next.js</strong>, and{" "}
          <strong style={{ color: "#555555" }}>Node.js</strong>. 10+ live
          products shipped.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3.5rem",
          }}
        >
          <a href="#projects" id="hero-cta-projects" className="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" id="hero-cta-contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          {[
            { value: "3+", label: "Years Exp." },
            { value: "10+", label: "Live Products" },
            { value: "50k+", label: "Users Served" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <div
                className="gradient-text"
                style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "var(--muted)",
                  fontSize: "0.78rem",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            color: "#555555",
            fontSize: "0.75rem",
          }}
        >
          <span>scroll down</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ animation: "fadeUp 1.2s ease infinite alternate" }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
