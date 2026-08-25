"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUp,
  Gauge,
  Target,
  TrendingUp,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigPerformanceProps {
  rig: RigData;
}

const performanceIcons = [
  Target,
  ArrowUp,
  Gauge,
  Activity,
  TrendingUp,
];

export default function RigPerformance({
  rig,
}: RigPerformanceProps) {
  const performance = rig.performance || [];

  if (!performance.length) {
    return null;
  }

  return (
    <section
      id="performance"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
          <Activity size={14} />
          Performance
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
          {rig.model}
          <span className="text-yellow-400">
            {" "}Performance Highlights
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          Key published performance figures for the {rig.model}
          configuration.
        </p>

      </div>

      {/* =====================================================
          PERFORMANCE CARDS
      ===================================================== */}

      <div
        className={`grid gap-5 ${
          performance.length === 1
            ? "grid-cols-1"
            : performance.length === 2
              ? "sm:grid-cols-2"
              : performance.length === 3
                ? "md:grid-cols-3"
                : "sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >

        {performance.map((item, index) => {

          const Icon =
            performanceIcons[index % performanceIcons.length];

          return (
            <motion.div
              key={`${item.label}-${index}`}
              initial={{
                opacity: 0,
                y: 25,
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
                delay: index * 0.07,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090C11] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30"
            >

              {/* Background glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

              {/* Icon */}

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">

                <Icon
                  size={25}
                  className="text-yellow-400"
                />

              </div>

              {/* Label */}

              <p className="relative mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>

              {/* Value */}

              <p className="relative mt-3 text-3xl font-black leading-tight text-white">
                {item.value}
              </p>

            </motion.div>
          );
        })}

      </div>

      {/* =====================================================
          PERFORMANCE NOTE
      ===================================================== */}

      <div className="rounded-[28px] border border-yellow-500/15 bg-yellow-500/[0.035] px-7 py-6 sm:px-9">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">

            <Gauge
              size={20}
              className="text-yellow-400"
            />

          </div>

          <div>

            <p className="font-semibold text-white">
              Performance depends on project conditions
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Published performance figures are reference values for
              the stated machine configuration. Actual drilling
              performance can vary with formation, drilling method,
              bore diameter, tooling, operating parameters and site
              conditions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}