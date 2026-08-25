import Image from "next/image";
import Link from "next/link";
import type { Service } from "./services.types";

interface ServiceDetailPageProps {
  service: Service;
}

export default function ServiceDetailPage({
  service,
}: ServiceDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background glow */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-250px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

          <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
          {/* LEFT */}

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
            >
              <span>←</span>
              Back to Services
            </Link>

            <div className="mt-8 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              NGE DRILLSOL SERVICES
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <div className="mt-6 h-px w-28 bg-gradient-to-r from-blue-500 to-transparent" />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {service.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-7 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(37,99,235,.45)]"
              >
                Discuss Your Requirement
              </Link>

              <Link
                href="/drilling-rigs"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
              >
                Explore Drilling Rigs
              </Link>
            </div>
          </div>

          {/* RIGHT — IMAGE */}

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl" />

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120] shadow-[0_30px_100px_rgba(0,0,0,.45)]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-lg border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                  NGE DRILLSOL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE OVERVIEW
      ========================================================= */}

      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          {/* SECTION LABEL */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              SERVICE CAPABILITIES
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Engineering built around your drilling requirement.
            </h2>
          </div>

          {/* FEATURES */}

          <div className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, index) => (
              <div
                key={`${feature}-${index}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.04]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-sm font-bold text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="pt-1 text-base font-medium leading-7 text-slate-200">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATED SOLUTIONS
      ========================================================= */}

      <section className="border-y border-white/10 bg-[#080D15]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              RELATED SOLUTIONS
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Connected engineering solutions
            </h2>

            <p className="mt-5 text-slate-400">
              This service can support projects across the following solution
              areas.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.relatedSolutions.map((solution, index) => (
              <div
                key={`${solution}-${index}`}
                className="rounded-2xl border border-white/10 bg-[#0B1120] p-6 transition-all duration-300 hover:border-blue-500/30"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-sm font-bold text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {solution}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY NGE / SERVICE APPROACH
      ========================================================= */}

      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1420] to-[#080C13] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
                NGE DRILLSOL
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Engineering support from requirement to field operation.
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                Our services are designed around real drilling requirements,
                machine selection, engineering, project execution and
                after-sales support.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 px-7 py-4 font-semibold text-blue-300 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/20"
            >
              Talk to NGE Engineers
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="border-t border-white/10 bg-[#05070B]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            START YOUR PROJECT
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
            Need engineering support for your drilling project?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Share your project requirements with the NGE DRILLSOL team and
            discuss the right equipment, engineering or service solution.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Send an Enquiry
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}