import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import HeroBackground from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B1120]">
      <HeroBackground />

      <Container>
        <div className="relative z-10 grid min-h-[92vh] items-center gap-8 pb-16 pt-24 lg:grid-cols-[1.05fr_1.1fr]">

          {/* LEFT SIDE */}

          <div className="max-w-2xl">

            {/* Eyebrow */}

            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
              Premium OEM • Made in India • Exporting Worldwide
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
              Heavy Duty Water Well
              <br />

              <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.55)]">
                Drilling Rigs
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
              NGE DRILLSOL designs and manufactures premium water well drilling
              rigs, DTH drilling rigs, piling rigs and drilling equipment
              trusted by contractors, EPC companies, governments and industrial
              clients across more than 35 countries.
            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-5">

              {/* Explore Drilling Rigs */}

              <Link
                href="/drilling-rigs"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-8 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_55px_rgba(37,99,235,.55)]"
              >
                Explore Drilling Rigs
              </Link>

              {/* Download Catalogue */}

              <a
                href="/downloads/NGE-DRILLSOL-CATALOGUE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/20
                  bg-white/5
                  px-8
                  py-4
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

            <div className="mt-12 flex flex-wrap gap-10">

              <div>
                <p className="text-3xl font-bold text-white">
                  35+
                </p>

                <p className="text-sm text-slate-400">
                  Countries
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  20+
                </p>

                <p className="text-sm text-slate-400">
                  Years
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  500+
                </p>

                <p className="text-sm text-slate-400">
                  Machines
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex h-[760px] items-center justify-center overflow-visible lg:-translate-x-36">

            {/* Main Blue Glow */}

            <div
              className="
                hero-blue-glow
                absolute
                left-0
                top-0
                h-[900px]
                w-[900px]
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
                left-28
                h-[340px]
                w-[340px]
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
                w-[135%]
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
                  h-[220px]
                  w-[650px]
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
                sizes="50vw"
                className="
                  relative
                  z-20
                  object-contain
                  object-bottom
                  drop-shadow-[0_45px_90px_rgba(0,0,0,0.45)]
                "
                style={{
                  transform:
                    "translate(-70px, -115px) perspective(1800px) rotateY(-2deg) scale(1.15)",
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