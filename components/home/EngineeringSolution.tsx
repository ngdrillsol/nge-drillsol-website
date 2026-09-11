
import Link from "next/link";
import React from "react";

export default function EngineeringSolution() {
  const whatsappMessage = encodeURIComponent(
    "Hello NGE Drillsol, I would like to discuss my drilling project with your engineers."
  );

  const whatsappUrl =
    `https://wa.me/919106360907?text=${whatsappMessage}`;

  return (
    <section
      className="relative mt-0 overflow-hidden bg-[#05070B] pb-12 pt-12 sm:pb-16 lg:-mt-24 lg:pb-28 lg:pt-12"
      aria-labelledby="engineering-solutions-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:static lg:z-auto lg:px-8">

        {/* Transition Blend */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070B] via-[#05070B]/95 to-transparent" />
        </div>

        {/* Header */}

        <div className="relative z-10 mx-auto mb-10 max-w-4xl text-center sm:mb-14 lg:static lg:z-auto lg:mb-20">

          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-500">
            Drilling Engineering Expertise
          </div>

          <h2
            id="engineering-solutions-heading"
            className="relative z-10 mt-5 px-1 text-3xl font-black leading-[1.15] tracking-tight text-white opacity-100 sm:text-4xl md:text-5xl lg:static lg:z-auto lg:text-6xl"
          >
            Complete Drilling Solutions
            <br />
            Engineered Around Your Project
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            NGE Drillsol does more than manufacture drilling rigs.
            We evaluate geology, drilling depth, hole diameter,
            drilling method, project objectives and operating
            conditions before recommending a suitable drilling
            machine and equipment configuration.
          </p>

        </div>

        {/* Vertical Layout */}

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">

          {/* Engineering Philosophy */}

          <div className="mx-auto max-w-6xl rounded-[24px] bg-gradient-to-br from-slate-900 via-[#111827] to-slate-900 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-8 md:p-12 lg:rounded-[32px] lg:p-16">

            <div className="mx-auto max-w-4xl text-center">

              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-500">
                How We Engineer
              </div>

              <h3 className="mt-6 text-3xl font-black leading-tight text-white md:text-5xl">
                We don&apos;t begin with a drilling rig.
                <br />
                We begin with your project.
              </h3>

              <p className="mt-6 text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
                A drilling project should begin by understanding the
                geological formation, required depth, bore diameter,
                drilling method, operating environment and project
                objectives.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                NGE Drillsol uses those requirements to help select or
                configure a water well, DTH, rotary, piling, core or
                workover drilling system suited to the application.
              </p>

              <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
                    01
                  </p>

                  <h4 className="mt-3 text-lg font-bold text-white">
                    Understand Geology
                  </h4>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
                    02
                  </p>

                  <h4 className="mt-3 text-lg font-bold text-white">
                    Define Requirements
                  </h4>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
                    03
                  </p>

                  <h4 className="mt-3 text-lg font-bold text-white">
                    Configure Equipment
                  </h4>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
                    04
                  </p>

                  <h4 className="mt-3 text-lg font-bold text-white">
                    Support Operations
                  </h4>
                </div>

              </div>

              <div className="mt-8 text-center sm:mt-12">

                <p className="text-2xl font-semibold italic text-white">
                  Engineering before equipment.
                </p>

                <p className="mt-3 text-slate-400">
                  Correct rig selection starts with understanding
                  what is below the ground.
                </p>

              </div>

            </div>

          </div>

          {/* Feature Cards */}

          <div className="grid gap-6 md:grid-cols-2">

            <article className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10">

              <h3 className="mb-2 text-lg font-semibold text-white">
                Geology-Driven Drilling Engineering
              </h3>

              <p className="text-slate-300">
                Match drilling methods and machine configuration to
                clay, sand, gravel, mixed formations, hard rock and
                other project-specific ground conditions.
              </p>

            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10">

              <h3 className="mb-2 text-lg font-semibold text-white">
                Application-Specific Drilling Solutions
              </h3>

              <p className="text-slate-300">
                Equipment solutions for water wells, groundwater
                supply, mining, infrastructure, solar foundations,
                exploration and other drilling applications.
              </p>

            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10">

              <h3 className="mb-2 text-lg font-semibold text-white">
                Custom Drilling Rig Configuration
              </h3>

              <p className="text-slate-300">
                Machine configuration can be adapted according to
                depth, hole diameter, drilling method, mounting and
                supporting equipment requirements.
              </p>

            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10">

              <h3 className="mb-2 text-lg font-semibold text-white">
                Technical Selection Support
              </h3>

              <p className="text-slate-300">
                Discuss the project with NGE Drillsol before
                selecting the final drilling rig, tooling and
                supporting equipment.
              </p>

            </article>

          </div>

          {/* Internal Links */}

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              href="/drilling-rigs"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-yellow-500/40 hover:text-yellow-400"
            >
              Explore Drilling Rigs
            </Link>

            <Link
              href="/solutions"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-yellow-500/40 hover:text-yellow-400"
            >
              Explore Drilling Solutions
            </Link>

          </div>

          {/* WhatsApp CTA */}

          <div className="mt-14 flex justify-center">

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-yellow-500 px-10 py-4 text-base font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
            >
              Discuss Your Project With Our Engineers
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}