"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Ruler,
  ArrowUp,
  Zap,
  Settings2,
  CircleGauge,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigQuickSpecsProps {
  rig: RigData;
}

const icons = [
  Gauge,
  Ruler,
  ArrowUp,
  Zap,
  Settings2,
  CircleGauge,
];

export default function RigQuickSpecs({
  rig,
}: RigQuickSpecsProps) {
  const specs = rig.quickSpecs || [];

  if (!specs.length) {
    return null;
  }

  return (
    <section
      id="quick-specifications"
      className="space-y-10"
    >
      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="text-center">

        <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
          At a Glance
        </span>

        <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
          Key
          <span className="text-yellow-400"> Specifications</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
          A quick overview of the most important technical
          characteristics of the {rig.model}.
        </p>

      </div>

      {/* =====================================================
          SPECIFICATION GRID
      ===================================================== */}

      <div
        className={`grid overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] ${
          specs.length === 1
            ? "grid-cols-1"
            : specs.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : specs.length === 3
                ? "grid-cols-1 sm:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >

        {specs.map((spec, index) => {

          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={`${spec.label}-${index}`}
              initial={{
                opacity: 0,
                y: 20,
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
                delay: index * 0.06,
              }}
              className={`group relative p-7 lg:p-8 ${
                index !== 0
                  ? "border-t border-white/10 sm:border-l lg:border-t-0"
                  : ""
              }`}
            >

              {/* Hover Glow */}

              <div className="pointer-events-none absolute inset-0 bg-yellow-500/[0.03] opacity-0 transition duration-300 group-hover:opacity-100" />

              {/* Icon */}

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">

                <Icon
                  size={22}
                  className="text-yellow-400"
                />

              </div>

              {/* Label */}

              <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {spec.label}
              </p>

              {/* Value */}

              <p className="relative mt-3 text-2xl font-bold leading-tight text-white">
                {spec.value}
              </p>

            </motion.div>
          );

        })}

      </div>

      {/* =====================================================
          ENGINEERING NOTE
      ===================================================== */}

      <div className="rounded-2xl border border-white/10 bg-[#090C11] px-6 py-5">

        <p className="text-sm leading-7 text-slate-500">
          <span className="font-semibold text-slate-300">
            Engineering note:
          </span>{" "}
          Performance and drilling capacity can vary depending on
          formation conditions, drilling method, tooling, bore
          diameter, operating configuration and project conditions.
        </p>

      </div>

    </section>
  );
}