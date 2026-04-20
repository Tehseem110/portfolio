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

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-medium"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
            >
              Get in Touch
            </a>
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
