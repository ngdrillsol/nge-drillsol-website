export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050B18]" />

      {/* Main cinematic blue glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[68%]
            top-[42%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/25
            blur-[110px]
            sm:h-[700px]
            sm:w-[700px]
            sm:blur-[170px]
            lg:h-[1000px]
            lg:w-[1000px]
            lg:blur-[230px]
          "
        />

        <div
          className="
            absolute
            left-[55%]
            top-[55%]
            h-[220px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rotate-[-10deg]
            rounded-full
            bg-cyan-400/10
            blur-[90px]
            sm:w-[700px]
            lg:w-[950px]
          "
        />
      </div>

      {/* Top dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020611]/75 via-transparent to-[#020611]/50" />

      {/* Side vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,17,0.7)_100%)]" />

      {/* Horizontal highlight */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[100px] w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent blur-[40px] lg:h-[140px] lg:w-[900px]" />
    </>
  );
}