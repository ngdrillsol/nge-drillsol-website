"use client";


export default function HeroBackground() {

  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050B18]" />

      {/* Cinematic Background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-95"
        style={{
          backgroundImage: "url('/backgrounds/hero-glow.png')",
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-blue-glow absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[160px] lg:h-[900px] lg:w-[900px] lg:blur-[220px]" />
      </div>

      {/* Top Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020611]/70 via-transparent to-[#020611]/40" />

      {/* Side Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(2,6,17,0.65)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[100px] w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent blur-[40px] lg:h-[140px] lg:w-[900px]" />
      
    </>
  );
}
