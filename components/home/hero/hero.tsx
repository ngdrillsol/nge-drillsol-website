import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import HeroBackground from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B1120]">
      <HeroBackground />

      <Container>
        <div className="relative z-10 grid min-h-[92vh] items-center gap-4 pb-10 pt-28 sm:gap-8 sm:pb-16 lg:grid-cols-[1.05fr_1.1fr]">

          {/* LEFT SIDE */}

          <div className="max-w-2xl">

            {/* Eyebrow */}

            <div className="inline-flex max-w-full items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-400 sm:px-5 sm:text-sm sm:tracking-wider">
              Premium OEM • Made in India • Exporting Worldwide
            </div>

            {/* Heading */}

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:mt-8 sm:text-5xl md:text-6xl xl:text-7xl">
              Heavy Duty Water Well
              <br />

              <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.55)]">
                Drilling Rigs
              </span>
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              NGE DRILLSOL designs and manufactures premium water well drilling
              rigs, DTH drilling rigs, piling rigs and drilling equipment
              trusted by contractors, EPC companies, governments and industrial
              clients across more than 35 countries.
            </p>

            {/* BUTTONS */}

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">

              {/* Explore Drilling Rigs */}

              <Link
                href="/drilling-rigs"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_55px_rgba(37,99,235,.55)] sm:w-auto sm:px-8 sm:text-base"
              >
                Explore Drilling Rigs
              </Link>

              {/* Download Catalogue */}

              <a
                href="/downloads/NGE-DRILLSOL-CATALOGUE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex w-full sm:w-auto whitespace-nowrap
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/20
                  bg-white/5
                  px-6 sm:px-8
                  py-4
                  text-sm sm:text-base
                  font-semibold
                  text-white
                  shadow-[0_18px_40px_rgba(255,255,255,.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  hover:bg-white/10
                  hover:border-blue-400/50
                  hover:shadow-[0_20px_45px_rgba(59,130,246,.25)]
                "
              >
                Download Catalogue
              </a>

            </div>

            {/* Trust Numbers */}

            <div className="mt-10 grid grid-cols-3 gap-4 sm:mt-12 sm:flex sm:flex-wrap sm:gap-10">

              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  35+
                </p>

                <p className="text-xs text-slate-400 sm:text-sm">
                  Countries
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  20+
                </p>

                <p className="text-xs text-slate-400 sm:text-sm">
                  Years
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  500+
                </p>

                <p className="text-xs text-slate-400 sm:text-sm">
                  Machines
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex h-[360px] items-center justify-center overflow-visible sm:h-[500px] lg:h-[760px] lg:-translate-x-36">

            {/* Main Blue Glow */}

            <div
              className="
                hero-blue-glow
                absolute
                left-0
                top-0
                h-[360px] sm:h-[600px] lg:h-[900px]
                w-[360px] sm:w-[600px] lg:w-[900px]
                rounded-full
                bg-blue-500/20
                blur-[220px]
              "
            />

            {/* Secondary Cyan Glow */}

            <div
              className="
                absolute
                bottom-8
                left-1/2 lg:left-28
                h-[180px] sm:h-[260px] lg:h-[340px]
                w-[180px] sm:w-[260px] lg:w-[340px]
                rounded-full
                bg-cyan-400/18
                blur-[120px]
              "
            />

            {/* Machine */}

            <div
              className="
                relative
                z-20
                h-full
                w-full sm:w-[115%] lg:w-[135%]
                animate-float
                overflow-visible
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

              {/* Machine glow */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[120px] sm:h-[180px] lg:h-[220px]
                  w-full sm:w-[500px] lg:w-[650px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rotate-[-12deg]
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-blue-400/20
                  to-transparent
                  blur-[70px]
                "
              />

              {/* Rig Image */}

              <Image
                src="/images/ngdr3000-hero-v15.png"
                alt="NGE DRILLSOL Heavy Duty Water Well Drilling Rig"
                fill
                priority
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 50vw"
                className="
                  relative
                  z-20
                  object-contain
                  object-center lg:object-bottom
                  [transform:translate(0,-10px)_perspective(1800px)_rotateY(-2deg)_scale(1.02)]
                  sm:[transform:translate(0,-35px)_perspective(1800px)_rotateY(-2deg)_scale(1.08)]
                  lg:[transform:translate(-70px,-115px)_perspective(1800px)_rotateY(-2deg)_scale(1.15)]
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
