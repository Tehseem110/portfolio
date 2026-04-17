"use client";

import { useState } from "react";

const libraries = [
  {
    id: "moon-slider",
    name: "react-native-moon-slider",
    tagline: "Circular rotary knob/slider for React Native",
    description:
      "A circular rotary knob/slider component built with Skia for smooth 60 FPS rendering and gesture support. Fully customizable colors, angles, thumb, and center content.",
    installCmd: "npm install react-native-moon-slider",
    npmUrl: "https://www.npmjs.com/package/react-native-moon-slider",
    githubUrl: "https://github.com/Tehseem110/react-native-moon-slider",
    gifs: [
      "/LibraryAssets/React-Native-Moon-Slider/preview_gif1.gif",
      "/LibraryAssets/React-Native-Moon-Slider/preview_gif2.gif",
    ],
    features: [
      "Smooth 60 FPS via @shopify/react-native-skia",
      "Gesture support with react-native-gesture-handler",
      "Optional haptic feedback",
      "Custom center content via renderCenter",
      "Controlled with ref.setValue()",
      "Full TypeScript support",
    ],
    tags: ["Skia", "Gestures", "Haptics", "TypeScript"],
  },
  {
    id: "3d-model-carousel",
    name: "react-native-3d-model-carousel",
    tagline: "Interactive 3D .glb/.gltf carousel for React Native",
    description:
      "Render interactive 3D models in a swipeable carousel with previous/next controls, auto-play, auto-rotate, and per-model camera/scale overrides.",
    installCmd:
      "npm install react-native-3d-model-carousel @react-three/fiber @react-three/drei three",
    npmUrl: "https://www.npmjs.com/package/react-native-3d-model-carousel",
    githubUrl: "https://github.com/Tehseem110/react-native-3d-model-carousel",
    gifs: [
      "/LibraryAssets/React-Native-3D-Model-Caraousel/PreviewGif.gif",
      "/LibraryAssets/React-Native-3D-Model-Caraousel/PreviewGif2.gif",
    ],
    features: [
      "Supports .glb and .gltf model formats",
      "Swipe navigation with configurable threshold",
      "Auto-play & auto-rotate options",
      "Per-model scale, position & camera overrides",
      "Custom prev/next button renderers",
      "Pagination dots indicator",
    ],
    tags: ["3D", "GLB/GLTF", "Carousel", "Three.js"],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy install command"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 8px",
        borderRadius: "6px",
        color: copied ? "#4ade80" : "#a3a3a3",
        transition: "color 0.2s",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "0.72rem",
        fontWeight: 600,
      }}
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

function GifPreview({ gifs, name }: { gifs: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {/* Main gif */}
      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(0,0,0,0.3)",
          aspectRatio: "16/9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={gifs[active]}
          alt={`${name} preview ${active + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Thumbnails */}
      {gifs.length > 1 && (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {gifs.map((gif, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: "60px",
                height: "44px",
                borderRadius: "8px",
                overflow: "hidden",
                border: `2px solid ${i === active ? "#E9631A" : "rgba(255,255,255,0.1)"}`,
                padding: 0,
                cursor: "pointer",
                background: "none",
                transition: "border-color 0.2s",
                flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gif}
                alt={`Thumbnail ${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function OpenSourceSection() {
  return (
    <section
      id="open-source"
      style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.5rem" }}>
        <h2 className="section-title" style={{ margin: 0 }}>
          Open Source Libraries
        </h2>
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: "9999px",
            background: "rgba(233, 99, 26, 0.12)",
            border: "1px solid rgba(233, 99, 26, 0.3)",
            color: "#E9631A",
            letterSpacing: "0.06em",
          }}
        >
          REACT NATIVE
        </span>
      </div>
      <div className="section-divider" />

      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {libraries.map((lib) => (
          <div
            key={lib.id}
            className="glass-card"
            style={{
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
              alignItems: "start",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent */}
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

            {/* LEFT — Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Name + tagline */}
              <div>
                <h3
                  style={{
                    margin: "0 0 6px",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: "monospace",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {lib.name}
                </h3>
                <p style={{ margin: 0, fontSize: "0.82rem", color: "#E9631A", fontWeight: 500 }}>
                  {lib.tagline}
                </p>
              </div>

              <p style={{ margin: 0, fontSize: "0.875rem", color: "#a3a3a3", lineHeight: 1.7 }}>
                {lib.description}
              </p>

              {/* Install command */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  gap: "0.5rem",
                  overflow: "hidden",
                }}
              >
                <code
                  style={{
                    fontSize: "0.78rem",
                    color: "#4ade80",
                    fontFamily: "monospace",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    flex: 1,
                  }}
                >
                  {lib.installCmd}
                </code>
                <CopyButton text={lib.installCmd} />
              </div>

              {/* Features */}
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {lib.features.map((f) => (
                  <li
                    key={f}
                    style={{ display: "flex", gap: "8px", fontSize: "0.8rem", color: "#a3a3a3", alignItems: "flex-start" }}
                  >
                    <span style={{ color: "#E9631A", fontWeight: 700, marginTop: "1px" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {lib.tags.map((tag) => (
                  <span key={tag} className="chip" style={{ fontSize: "0.72rem", padding: "3px 10px" }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <a
                  href={lib.npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #E9631A, #f59e0b)",
                    color: "#fff",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 4px 15px rgba(233, 99, 26, 0.3)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0v24h6.5v-6h5v6H24V0H0zm6.5 17.5H2v-14h4.5v14zm7.5 0H9V5h5v12.5zm7.5 0H17V5h4.5v12.5z" />
                  </svg>
                  npm
                </a>
                <a
                  href={lib.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* RIGHT — GIF Preview */}
            <GifPreview gifs={lib.gifs} name={lib.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
