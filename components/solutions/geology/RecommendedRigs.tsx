"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Drill,
  Gauge,
  Settings2,
} from "lucide-react";

import type { GeologyData } from "./geology.types";

interface RecommendedRig {
  model: string;
  description: string;
  reason?: string;
  href?: string;
  capabilities?: string[];
}

interface RecommendedRigsProps {
  geology: GeologyData;
}

export default function RecommendedRigs({
  geology,
}: RecommendedRigsProps) {
  const rigs =
    (
      geology as unknown as {
        recommendedRigs?: RecommendedRig[];
      }
    ).recommendedRigs || [];

  if (!rigs.length) {
    return null;
  }

  return (
    <section
      id="recommended-rigs"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mx-auto max-w-4xl text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          <Drill size={14} />
          Recommended Drilling Rigs
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Suitable NGE Rigs for{" "}
          <span className="text-yellow-400">
            {geology.name}
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Based on the geological conditions, drilling challenges,
          drilling method, tooling requirements and operating
          conditions, the following NGE drilling rigs can be
          considered for this formation.
        </p>

      </div>

      {/* =====================================================
          ENGINEERING SELECTION PRINCIPLES
      ===================================================== */}

      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6">

          <Gauge
            size={24}
            className="text-yellow-400"
          />

          <h3 className="mt-5 text-lg font-bold text-white">
            Formation Capability
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Rotary torque, penetration capability and drilling
            system configuration must match the formation.
          </p>

        </div>

        <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6">

          <Settings2
            size={24}
            className="text-yellow-400"
          />

          <h3 className="mt-5 text-lg font-bold text-white">
            Method Compatibility
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            The selected rig should support the drilling method
            required for the geological conditions.
          </p>

        </div>

        <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6">

          <Drill
            size={24}
            className="text-yellow-400"
          />

          <h3 className="mt-5 text-lg font-bold text-white">
            Project Requirements
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Depth, bore diameter, tooling, mobility and project
            objectives must be evaluated before final selection.
          </p>

        </div>

      </div>

      {/* =====================================================
          RIG CARDS
      ===================================================== */}

      <div className="grid gap-6 md:grid-cols-2">

        {rigs.map(
          (
            rig: RecommendedRig,
            index: number
          ) => (

            <motion.article
              key={`${rig.model}-${index}`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090C11] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40"
            >

              {/* Background glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-500/10 opacity-0 blur-[80px] transition duration-500 group-hover:opacity-100" />

              {/* Top */}

              <div className="relative flex items-start justify-between gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">

                  <Drill
                    size={25}
                    className="text-yellow-400"
                  />

                </div>

                <span className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  Suitable Rig
                </span>

              </div>

              {/* Model */}

              <h3 className="relative mt-7 text-3xl font-bold text-white">
                {rig.model}
              </h3>

              {/* Description */}

              <p className="relative mt-4 text-base leading-7 text-slate-400">
                {rig.description}
              </p>

              {/* Why this rig */}

              {rig.reason ? (
                <div className="relative mt-7 rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.06] p-5">

                  <div className="flex items-center gap-2">

                    <CheckCircle2
                      size={17}
                      className="text-yellow-400"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                      Why This Rig
                    </span>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {rig.reason}
                  </p>

                </div>
              ) : null}

              {/* Capabilities */}

              {rig.capabilities?.length ? (
                <div className="relative mt-7">

                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Relevant Capabilities
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {rig.capabilities.map(
                      (capability) => (

                        <span
                          key={capability}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300"
                        >
                          {capability}
                        </span>

                      )
                    )}

                  </div>

                </div>
              ) : null}

              {/* CTA */}

              <div className="relative mt-8 border-t border-white/10 pt-6">

                {rig.href ? (
                  <Link
                    href={rig.href}
                    className="group/link inline-flex items-center gap-2 font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
                  >
                    View Rig Details

                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 font-semibold text-yellow-400">
                    Suitable Configuration

                    <ArrowUpRight size={18} />
                  </span>
                )}

              </div>

            </motion.article>

          )
        )}

      </div>

      {/* =====================================================
          FINAL ENGINEERING NOTE
      ===================================================== */}

      <div className="overflow-hidden rounded-[30px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/[0.09] via-white/[0.02] to-transparent p-7 sm:p-9">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/10">

            <CheckCircle2
              size={26}
              className="text-yellow-400"
            />

          </div>

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Final Rig Selection
            </p>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              The geology is only the starting point
            </h3>

            <p className="mt-3 max-w-5xl text-sm leading-7 text-slate-400 sm:text-base">
              Final equipment selection should also consider target
              depth, bore diameter, drilling method, formation
              variability, required production rate, site access,
              available utilities and project economics. Our
              engineering team can evaluate these parameters before
              recommending the final rig configuration.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}