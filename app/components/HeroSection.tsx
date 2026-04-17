"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Bounds } from "@react-three/drei";
import { Suspense } from "react";

/* ---------- 3D MODEL ---------- */
function Model() {
  // Reference the file directly from the public folder by using an absolute path relative to `public`
  const { scene } = useGLTF("/Model/pony_cartoon.glb");

  // We remove the hardcoded scale and position because <Bounds> will handle fitting it automatically
  return <primitive object={scene} />;
}

/* ---------- HERO ---------- */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden px-6 py-24">
      {/* 🔥 Glow Effects */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-orange-500 opacity-30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-white opacity-10 blur-[120px] rounded-full" />

      {/* Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT (3D) */}
        <div className="h-[400px] md:h-[500px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden shadow-2xl">
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
    </section>
  );
}
