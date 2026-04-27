"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Bounds } from "@react-three/drei";
import { Suspense } from "react";

/* ---------- 3D MODEL ---------- */
function Model() {
  const { scene } = useGLTF("/Model/pony_cartoon.glb");
  return <primitive object={scene} />;
}

const techStack = [
  { label: "React.js", icon: "⚛️" },
  { label: "React Native", icon: "📱" },
  { label: "Next.js", icon: "▲" },
  { label: "Node.js", icon: "🟢" },
  { label: "TypeScript", icon: "🔷" },
  { label: "Express.js", icon: "🚂" },
  { label: "Nest.js", icon: "🐈" },
  { label: "MySQL", icon: "🛢️" },
  { label: "Firebase", icon: "🔥" },
  { label: "Google Cloud", icon: "☁️" },
  { label: "Tailwind CSS", icon: "🎨" },
  { label: "Redux", icon: "🔄" },
  { label: "Serverless", icon: "⚡" },
  { label: "REST APIs", icon: "🔌" },
];

/* ---------- HERO ---------- */
export default function HeroSection() {
  // Duplicate for seamless infinite scroll
  const ticker = [...techStack, ...techStack];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden px-6 py-24">
      {/* 🔥 Glow Effects */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-orange-500 opacity-30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-white opacity-10 blur-[120px] rounded-full" />

      {/* Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT (3D + Resume) */}
        <div className="relative h-[400px] md:h-[500px]">
          {/* 3D Canvas */}
          <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden shadow-2xl">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[2, 2, 2]} intensity={2.5} />
              <Environment preset="city" />

              <Suspense fallback={null}>
                <Bounds fit clip observe margin={1.2}>
                  <Model />
                </Bounds>
              </Suspense>

              <OrbitControls
                autoRotate
                autoRotateSpeed={2}
                enableZoom={false}
                makeDefault
              />
            </Canvas>
          </div>

          {/* Download Resume — overlaid at bottom */}
          <a
            href="/resume.pdf"
            download
            className="hero-resume-btn"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* RIGHT (Text) */}
        <div className="text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]" />
            <span className="text-sm text-gray-400">
              Available for new opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Tehseem{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Ahmed
            </span>
          </h1>

          {/* Role */}
          <p className="mt-4 text-lg text-gray-400">Full Stack Developer</p>

          {/* Description */}
          <p className="mt-4 text-gray-400 max-w-lg leading-relaxed">
            3+ years building scalable web & mobile apps with{" "}
            <span className="text-gray-300 font-medium">React Native</span>,{" "}
            <span className="text-gray-300 font-medium">Next.js</span>, and{" "}
            <span className="text-gray-300 font-medium">Node.js</span>.
          </p>

          {/* Buttons & Socials */}
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-medium text-white shadow-lg shadow-orange-500/25"
              >
                View Projects →
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition text-white"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/tehseem110"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="hero-social-btn"
                aria-label="GitHub"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tehseem-ahmed-078a92235/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="hero-social-btn"
                aria-label="LinkedIn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href="mailto:tehseem010@gmail.com"
                title="Email"
                className="hero-social-btn"
                aria-label="Email"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>Email</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919560091968"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="hero-social-btn"
                aria-label="WhatsApp"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-4">
            {[
              { value: "3+", label: "Years Exp." },
              { value: "10+", label: "Products" },
              { value: "200k+", label: "Users" },
            ].map((item) => (
              <div
                key={item.label}
                className="px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
              >
                <div className="text-xl font-semibold text-orange-400">
                  {item.value}
                </div>
                <div className="text-xs text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tech Stack Ticker ─────────────────────────────────────── */}
      <div
        className="relative z-10 mt-16"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "2rem" }}
      >
        <p
          className="text-center text-xs text-gray-600 uppercase tracking-widest mb-5"
        >
          Tech I work with
        </p>

        {/* Fade masks on both edges */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "80px",
              background: "linear-gradient(to right, #000, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "80px",
              background: "linear-gradient(to left, #000, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Scrolling track */}
          <div className="hero-ticker-track">
            {ticker.map((tech, i) => (
              <div key={i} className="hero-ticker-item">
                <span style={{ fontSize: "1rem" }}>{tech.icon}</span>
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-resume-btn {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.55rem 1.4rem;
          border-radius: 999px;
          background: rgba(233, 99, 26, 0.15);
          border: 1px solid rgba(233, 99, 26, 0.5);
          color: #E9631A;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          white-space: nowrap;
          backdrop-filter: blur(12px);
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .hero-resume-btn:hover {
          background: rgba(233, 99, 26, 0.3);
          box-shadow: 0 0 18px rgba(233, 99, 26, 0.35);
          transform: translateX(-50%) translateY(-2px);
        }
        .hero-social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 1.1rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          color: #a3a3a3;
          font-size: 0.8rem;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.18s;
          backdrop-filter: blur(8px);
          user-select: none;
        }
        .hero-social-btn:hover {
          background: rgba(233, 99, 26, 0.18);
          border-color: rgba(233, 99, 26, 0.55);
          color: #E9631A;
          box-shadow: 0 0 14px rgba(233, 99, 26, 0.25);
          transform: translateY(-2px) scale(1.04);
        }
        .hero-social-btn:active {
          transform: translateY(0) scale(0.98);
        }
        .hero-ticker-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: hero-ticker 28s linear infinite;
        }
        .hero-ticker-track:hover {
          animation-play-state: paused;
        }
        .hero-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1.1rem;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          font-size: 0.82rem;
          color: #a3a3a3;
          white-space: nowrap;
          backdrop-filter: blur(4px);
          transition: color 0.2s, border-color 0.2s;
          cursor: default;
        }
        .hero-ticker-item:hover {
          color: #E9631A;
          border-color: rgba(233,99,26,0.4);
        }
        @keyframes hero-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
