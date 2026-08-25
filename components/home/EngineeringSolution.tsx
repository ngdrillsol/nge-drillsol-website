import React from "react";

export default function EngineeringSolution() {
  const whatsappMessage = encodeURIComponent(
    "Hello NGE DRILLSOL, I would like to discuss my drilling project with your engineers."
  );

  const whatsappUrl = `https://wa.me/919106360907?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden -mt-24 bg-[#05070B] pt-12 pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Transition Blend */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070B] via-[#05070B]/95 to-transparent" />
        </div>

        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-500">
            ENGINEERING EXPERTISE
          </div>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Engineering Solutions
            <br />
            for Every Drilling Challenge
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We don't simply manufacture drilling rigs. We engineer complete
            drilling solutions based on geology, drilling depth, drilling
            method, project objectives and operating conditions.
          </p>
        </div>

        {/* Vertical Layout */}
        <div className="space-y-10">

          {/* Engineering Philosophy */}
          <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-br from-slate-900 via-[#111827] to-slate-900 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-16">
            <div className="mx-auto max-w-4xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-500">
                HOW WE ENGINEER
              </div>

              <h3 className="mt-6 text-3xl font-black leading-tight text-white md:text-5xl">
                We don't begin with a drilling rig.
                <br />
                We begin with your project.
              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                Every drilling project starts with understanding the geology,
                drilling objectives, operating conditions and long-term project
                requirements.
                <br />
                <br />
                Every NGE drilling rig is engineered to solve a specific
                drilling challenge—not to fit a standard catalogue.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
                    01
                  </p>
                  <h4 className="mt-3 text-lg font-bold text-white">
                    Geology First
                  </h4>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
                    02
                  </p>
                  <h4 className="mt-3 text-lg font-bold text-white">
                    Engineering Second
                  </h4>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
                    03
                  </p>
                  <h4 className="mt-3 text-lg font-bold text-white">
                    Manufacturing Third
                  </h4>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
                    04
                  </p>
                  <h4 className="mt-3 text-lg font-bold text-white">
                    Lifetime Support
                  </h4>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-2xl font-semibold italic text-white">
                  Engineering before Equipment.
                </p>

                <p className="mt-3 text-slate-400">
                  Every successful drilling project starts with understanding
                  the ground.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10">
              <div className="mb-2 text-lg font-semibold text-white">
                Geology Driven Engineering
              </div>
              <div className="text-slate-300">
                Engineer drilling systems around actual formations, not
                assumptions.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10">
              <div className="mb-2 text-lg font-semibold text-white">
                Application Specific Solutions
              </div>
              <div className="text-slate-300">
                Water wells, mining, infrastructure, EPC and renewable energy.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10">
              <div className="mb-2 text-lg font-semibold text-white">
                Custom Rig Manufacturing
              </div>
              <div className="text-slate-300">
                Tailor-made hydraulic, mechanical and structural
                configurations.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10">
              <div className="mb-2 text-lg font-semibold text-white">
                Technical Engineering Support
              </div>
              <div className="text-slate-300">
                Work directly with NGE engineers before investing in
                equipment.
              </div>
            </div>
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