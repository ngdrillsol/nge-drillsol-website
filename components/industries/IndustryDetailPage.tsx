"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Drill, Mountain } from "lucide-react";

import type { Industry } from "./industries.types";
import { industryRigRoutes } from "./industry-rig-routes";

interface IndustryDetailPageProps {
  industry: Industry;
}

export default function IndustryDetailPage({
  industry,
}: IndustryDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#05070B] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.06] via-transparent to-blue-500/[0.05]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-4xl">

            <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              {industry.icon} Industry
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {industry.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              {industry.description}
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          INDUSTRY INFORMATION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Industry Information
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Understanding the Application
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              {industry.engineeringInformation}
            </p>

          </div>

          {/* Applications */}

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Applications
            </span>

            <div className="mt-6 space-y-3">

              {industry.applications.map((application) => (
                <div
                  key={application}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-yellow-400"
                  />

                  <span className="text-sm text-slate-300">
                    {application}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          GEOLOGY
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div className="rounded-[30px] border border-white/10 bg-[#090C11] p-8 sm:p-10">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
              <Mountain
                size={22}
                className="text-yellow-400"
              />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Typical Ground Conditions
              </span>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Geological Conditions
              </h2>
            </div>

          </div>

          <div className="mt-7 flex flex-wrap gap-3">

            {industry.geology.map((formation) => (
              <span
                key={formation}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
              >
                {formation}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CHALLENGES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="mb-12">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Main Challenges
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            Challenges in {industry.title}
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            These are the main drilling conditions that should be
            considered when planning equipment for this application.
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {industry.challenges.map((challenge, index) => (
            <div
              key={challenge}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7 transition hover:border-yellow-500/30"
            >

              <div className="flex items-start gap-5">

                <span className="text-3xl font-black text-yellow-500/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="pt-1 text-lg leading-8 text-slate-300">
                  {challenge}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          RIG REQUIREMENTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="mb-12">

          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            <Drill size={15} />
            Rig Requirements
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            What the Rig Needs
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            The drilling rig should be configured around the actual
            demands of the application and ground conditions.
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {industry.rigRequirements.map((requirement, index) => (
            <div
              key={requirement}
              className="rounded-[24px] border border-white/10 bg-[#090C11] p-7"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-sm font-bold text-yellow-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-lg font-semibold text-white">
                  {requirement}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          SUITABLE NGE RIGS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/[0.08] via-white/[0.02] to-transparent p-8 sm:p-12">

          <div className="max-w-3xl">

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              NGE DRILLSOL
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
              Suitable Drilling Rigs
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Based on the application, geology and drilling
              requirements, the following NGE drilling rigs can be
              considered for this industry.
            </p>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {industry.recommendedRigs.map((rig) => {
              const href = industryRigRoutes[rig];

              if (!href) {
                return (
                  <div
                    key={rig}
                    className="flex min-h-14 items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                  >
                    <span className="font-bold text-white">{rig}</span>
                  </div>
                );
              }

              return (
                <Link
                  key={rig}
                  href={href}
                  className="group flex min-h-14 items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 transition hover:border-yellow-500/40 hover:bg-black/30 active:bg-black/40"
                >

                  <span className="font-bold text-white">
                    {rig}
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-yellow-400 transition-transform group-hover:translate-x-1"
                  />

                </Link>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-28 pt-10 lg:px-8">

        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need the Right Rig for Your Project?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Share your project requirements with our team and we can
            help you identify a suitable NGE drilling rig.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}
