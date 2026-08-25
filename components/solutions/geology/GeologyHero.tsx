"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  CheckCircle2,
  Drill,
  Mountain,
} from "lucide-react";

import type { GeologyData } from "./geology.types";

interface GeologyHeroProps {
  geology: GeologyData;
}

export default function GeologyHero({
  geology,
}: GeologyHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#07111F] via-[#090A0D] to-[#05070B] px-7 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,193,7,0.05),transparent_35%)]" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

        {/* ===================================================
            LEFT
        =================================================== */}

        <div>

          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400"
          >
            <Mountain size={14} />

            {geology.badge}
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
            className="mt-7 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Drilling in{" "}

            <span className="text-yellow-400">
              {geology.name}
            </span>

            <span className="block text-white">
              Formation
            </span>
          </motion.h1>

          {/* Introduction */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.16,
            }}
            className="mt-8 max-w-3xl text-lg leading-9 text-slate-300"
          >
            {geology.introduction}
          </motion.p>

          {/* Engineering Positioning */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.24,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-300">
              <CheckCircle2
                size={16}
                className="text-yellow-400"
              />

              Formation Analysis
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-300">
              <Drill
                size={16}
                className="text-yellow-400"
              />

              Drilling Method Selection
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-300">
              <CheckCircle2
                size={16}
                className="text-yellow-400"
              />

              Rig Recommendation
            </div>

          </motion.div>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.32,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >

            <a
              href="#engineering-analysis"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-[1.03] hover:bg-yellow-400"
            >
              Explore Engineering Analysis

              <ArrowDown size={18} />
            </a>

            <a
              href="#recommended-rigs"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold text-white transition hover:border-yellow-500/30 hover:bg-white/[0.07]"
            >
              View Suitable Rigs
            </a>

          </motion.div>

        </div>

        {/* ===================================================
            RIGHT — ENGINEERING SUMMARY
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.15,
          }}
          className="relative"
        >

          <div className="overflow-hidden rounded-[32px] border border-yellow-500/20 bg-black/30 p-7 backdrop-blur-xl sm:p-8">

            {/* Top Label */}

            <div className="flex items-center justify-between gap-4">

              <div>

                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
                  Engineering Assessment
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Formation-specific drilling strategy
                </p>

              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                <Drill
                  size={22}
                  className="text-yellow-400"
                />
              </div>

            </div>

            {/* Divider */}

            <div className="my-7 h-px bg-white/10" />

            {/* Analysis Steps */}

            <div className="space-y-5">

              <AssessmentItem
                number="01"
                title="Understand the Formation"
                description="Identify the geological behaviour and principal drilling challenges."
              />

              <AssessmentItem
                number="02"
                title="Select the Drilling Method"
                description="Match rotary, DTH or other suitable methods to the formation."
              />

              <AssessmentItem
                number="03"
                title="Configure the Rig"
                description="Determine the required rotary, feed, circulation, air and tooling systems."
              />

              <AssessmentItem
                number="04"
                title="Recommend the Rig"
                description="Select suitable NGE drilling platforms based on the complete project requirement."
                highlighted
              />

            </div>

            {/* Bottom Note */}

            <div className="mt-7 rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.06] p-5">

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400">
                Engineering Principle
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                The right drilling rig is selected from the formation,
                depth, bore diameter, drilling method and project
                conditions — not from geology alone.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

/* =========================================================
   ASSESSMENT ITEM
========================================================= */

function AssessmentItem({
  number,
  title,
  description,
  highlighted = false,
}: {
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex gap-4 rounded-2xl p-3 transition ${
        highlighted
          ? "border border-yellow-500/15 bg-yellow-500/[0.05]"
          : ""
      }`}
    >

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-bold text-yellow-400">
        {number}
      </div>

      <div>

        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>

      </div>

    </div>
  );
}