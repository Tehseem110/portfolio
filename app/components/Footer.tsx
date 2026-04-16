export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(233, 99, 26,0.1)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#a3a3a3", fontSize: "0.82rem", margin: 0 }}>
        © 2024–2025 Tehseem Ahmed. Built with{" "}
        <span className="gradient-text" style={{ fontWeight: 600 }}>
          Next.js
        </span>{" "}
        &amp; lots of ☕
      </p>
    </footer>
  );
}
