"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: "1.5rem",
        left: "1rem",
        right: "1rem",
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none", // Let clicks pass through margins
      }}
    >
      <nav
        style={{
          background: "#1A1A1A",
          boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.15)" : "0 4px 20px rgba(0,0,0,0.08)",
          padding: "0.5rem 0.5rem 0.5rem 1.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "9999px",
          gap: "2.5rem",
          pointerEvents: "auto", // Re-enable clicks for the nav box
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          border: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          id="nav-logo"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", paddingRight: "1rem" }}
          aria-label="Tehseem Ahmed home"
        >
          {/* Faux Logo Icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EBEBDF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span
            style={{ fontSize: "1.1rem", fontWeight: 600, color: "#FFFFFF" }}
          >
            Tehseem.
          </span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="floating-nav-link" 
                id={`nav-${item.label.toLowerCase()}`}
                style={{
                  color: "#EBEBDF",
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  fontWeight: 600,
                  opacity: 0.8,
                  transition: "opacity 0.2s ease, color 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                {item.label}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a 
          href="#contact"
          className="hidden-mobile"
          style={{
            background: "#EBEBDF",
            color: "#1A1A1A",
            padding: "0.65rem 1.4rem",
            borderRadius: "9999px",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            fontWeight: 800,
            letterSpacing: "0.05em",
            textDecoration: "none",
            transition: "transform 0.2s ease, filter 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.filter = "brightness(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
        >
          GET STARTED
        </a>

        {/* Mobile menu toggle */}
        <button
          id="nav-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px 12px 8px 0",
            color: "#EBEBDF",
            display: "none",
          }}
          className="show-mobile"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown pill */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            marginTop: "1rem",
            background: "#1A1A1A",
            borderRadius: "24px",
            padding: "1.5rem",
            width: "calc(100% - 2rem)",
            maxWidth: "300px",
            pointerEvents: "auto",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            border: "1px solid rgba(255,255,255,0.05)"
          }}
          className="show-mobile"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[...navItems].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{ 
                    fontSize: "0.8rem",
                    color: "#EBEBDF",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .floating-nav-link:hover {
          opacity: 1 !important;
          color: #E9631A !important;
        }
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
