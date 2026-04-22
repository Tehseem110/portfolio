"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";
import PacmanGame from "./PacmanGame";

export default function PacmanSection() {
  const containerRef = useScrollReveal<HTMLDivElement>({
    y: 32,
    duration: 0.7,
  });

  return (
    <section
      id="game"
      style={{
        padding: "6rem 1.5rem",
        background: "rgba(10, 10, 10, 0.4)",
        borderTop: "1px solid rgba(233, 99, 26,0.08)",
        borderBottom: "1px solid rgba(233, 99, 26,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }} ref={containerRef}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h2 className="section-title">Take a Break 👾</h2>
          <div
            className="section-divider"
            style={{ margin: "1rem auto 2rem" }}
          />
          <p
            style={{
              color: "#a3a3a3",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              maxWidth: "600px",
            }}
          >
            All work and no play makes Jack a dull boy. Enjoy a classic game of
            Pac-Man before you go!
          </p>
        </div>

        {/* Arcade Console Container */}
        <div
          className="arcade-container"
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#050505",
            border: "1px solid rgba(233, 99, 26, 0.3)",
            borderRadius: "24px",
            padding: "1.5rem 1rem",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(233, 99, 26, 0.1)",
            position: "relative",
          }}
        >
          {/* Top Decorative bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
              padding: "0 1rem",
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#ff5f56",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#ffbd2e",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#27c93f",
                }}
              />
            </div>
            <div
              style={{
                color: "#E9631A",
                fontFamily: "monospace",
                fontSize: "0.85rem",
                fontWeight: "bold",
                letterSpacing: "0.1em",
              }}
            >
              ARCADE
            </div>
          </div>

          {/* ✅ Game lives here */}
          <PacmanGame />

          {/* Bottom decorative area */}
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <span
              style={{
                color: "#E9631A",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Arrow Keys / Swipe to Play
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
