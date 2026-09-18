import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import HeroBackground from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B1120]">
      <HeroBackground />

      <Container>
        <div
          className="
            relative z-10
            grid min-h-[92vh]
            items-center
            gap-8
            pb-10 pt-28
            sm:pb-16
            lg:grid-cols-[minmax(0,1fr)_minmax(480px,0.9fr)]
            lg:gap-6
            xl:grid-cols-[minmax(0,1.05fr)_minmax(560px,0.95fr)]
            xl:gap-10
          "
        >
          {/* LEFT SIDE */}
          <div className="relative z-30 max-w-2xl lg:max-w-[650px]">
            {/* Eyebrow */}
            <div className="inline-flex max-w-full items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-400 sm:px-5 sm:text-sm sm:tracking-wider">
              Drilling Rig Manufacturer • Made in India • Exporting Worldwide
            </div>

            {/* Main SEO H1 */}
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:mt-8 sm:text-5xl md:text-6xl xl:text-7xl">
              Water Well Drilling Rig
              <br />

              <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.55)]">
                Manufacturer in India
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8 lg:text-lg lg:leading-8 xl:text-xl xl:leading-9">
              NGE Drillsol designs and manufactures water well drilling rigs,
              DTH drilling rigs, rotary drilling rigs, piling rigs, core
              drilling rigs and workover rigs for contractors, EPC companies,
              government projects and industrial drilling applications
              worldwide.
            </p>

            {/* Direct-answer GEO paragraph */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Our drilling equipment is selected according to required drilling
              depth, bore diameter, geological formation, drilling method and
              site conditions. NGE Drillsol provides machines and engineering
              support for both standard and project-specific drilling
              requirements.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">
              <Link
                href="/drilling-rigs"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_55px_rgba(37,99,235,.55)] sm:w-auto sm:px-8 sm:text-base"
              >
                Explore Drilling Rigs
              </Link>

              <a
                href="/downloads/NGE-DRILLSOL-CATALOGUE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(255,255,255,.05)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_20px_45px_rgba(59,130,246,.25)] sm:w-auto sm:px-8 sm:text-base"
              >
                Download Catalogue
              </a>
            </div>

            {/* Important Internal Links */}
            <nav
              aria-label="Featured drilling equipment"
              className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm"
            >
              <Link
                href="/drilling-rigs/water-well-drilling-rigs"
                className="text-slate-300 transition hover:text-blue-400"
              >
                Water Well Drilling Rigs
              </Link>

              <Link
                href="/drilling-rigs/dth-drilling-rigs"
                className="text-slate-300 transition hover:text-blue-400"
              >
                DTH Drilling Rigs
              </Link>

              <Link
                href="/drilling-rigs/rotary-drilling-rigs"
                className="text-slate-300 transition hover:text-blue-400"
              >
                Rotary Drilling Rigs
              </Link>
            </nav>

            {/* Flagship Machines */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
              <span>Flagship deep drilling rigs:</span>

              <Link
                href="/drilling-rigs/ngdr3000"
                className="font-semibold text-blue-400 transition hover:text-blue-300"
              >
                NGDR3000
              </Link>

              <Link
                href="/drilling-rigs/ngdr2000"
                className="font-semibold text-blue-400 transition hover:text-blue-300"
              >
                NGDR2000
              </Link>
            </div>

            {/* Trust Numbers */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:mt-12 sm:flex sm:flex-wrap sm:gap-10">
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  35+
                </p>
                <p className="text-xs text-slate-400 sm:text-sm">Countries</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  20+
                </p>
                <p className="text-xs text-slate-400 sm:text-sm">Years</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  500+
                </p>
                <p className="text-xs text-slate-400 sm:text-sm">Machines</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              relative
              flex
              h-[360px]
              min-w-0
              items-center
              justify-center
              sm:h-[500px]
              lg:h-[680px]
              xl:h-[760px]
            "
          >
            {/* Main blue glow */}
            <div
              className="
                hero-blue-glow
                absolute
                left-1/2
                top-1/2
                h-[360px]
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-500/20
                blur-[180px]
                sm:h-[550px]
                sm:w-[550px]
                lg:h-[700px]
                lg:w-[700px]
                xl:h-[850px]
                xl:w-[850px]
              "
            />

            {/* Cyan lower glow */}
            <div
              className="
                absolute
                bottom-[15%]
                left-1/2
                h-[180px]
                w-[180px]
                -translate-x-1/2
                rounded-full
                bg-cyan-400/18
                blur-[120px]
                sm:h-[260px]
                sm:w-[260px]
                lg:h-[320px]
                lg:w-[320px]
              "
            />

            {/* Machine wrapper */}
            <div
              className="
                relative
                z-20
                h-full
                w-full
                animate-float
                overflow-visible
                sm:w-[105%]
                lg:w-[112%]
                xl:w-[118%]
              "
            >
              {/* Metallic sweep */}
              <div
                className="
                  metallic-sweep
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-1/2
                  z-30
                  w-24
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  blur-md
                "
              />

              {/* Directional machine glow */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[120px]
                  w-full
                  -translate-x-1/2
                  -translate-y-1/2
                  rotate-[-12deg]
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-blue-400/20
                  to-transparent
                  blur-[70px]
                  sm:h-[180px]
                  sm:w-[500px]
                  lg:h-[220px]
                  lg:w-[600px]
              "
              />

              <Image
                src="/images/ngdr3000-hero-v15.png"
                alt="NGDR3000 deep water well rotary drilling rig manufactured by NGE Drillsol"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 48vw"
                className="
                  relative
                  z-20
                  object-contain
                  object-center
                  [transform:translate(0,-10px)_perspective(1800px)_rotateY(-2deg)_scale(1.02)]
                  sm:[transform:translate(0,-25px)_perspective(1800px)_rotateY(-2deg)_scale(1.06)]
                  lg:[transform:translate(35px,-65px)_perspective(1800px)_rotateY(-2deg)_scale(1.08)]
                  xl:[transform:translate(45px,-85px)_perspective(1800px)_rotateY(-2deg)_scale(1.12)]
                  drop-shadow-[0_45px_90px_rgba(0,0,0,0.45)]
                "
                style={{
                  filter:
                    "brightness(1.08) contrast(1.12) saturate(1.12) drop-shadow(0 0 45px rgba(59,130,246,.28))",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}