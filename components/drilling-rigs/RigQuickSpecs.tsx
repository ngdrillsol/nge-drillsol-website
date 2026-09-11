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
      aria-labelledby="quick-specifications-heading"
    >

      {/* Heading */}

      <div className="text-center">

        <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
          {rig.model} at a Glance
        </span>

        <h2
          id="quick-specifications-heading"
          className="mt-5 text-4xl font-bold text-white sm:text-5xl"
        >
          {rig.model} Key
          <span className="text-yellow-400">
            {" "}Specifications
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-400">
          A summary of the published technical characteristics
          available for the {rig.model} drilling rig.
        </p>

      </div>

      {/* Specification Grid */}

      <motion.dl
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

              <div className="pointer-events-none absolute inset-0 bg-yellow-500/[0.03] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">

                <Icon
                  size={22}
                  className="text-yellow-400"
                  aria-hidden="true"
                />

              </div>

              <dt className="relative mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {spec.label}
              </dt>

              <dd className="relative mt-3 text-2xl font-bold leading-tight text-white">
                {spec.value}
              </dd>

            </motion.div>
          );

        })}

      </motion.dl>

      {/* Engineering Note */}

      <div className="rounded-2xl border border-white/10 bg-[#090C11] px-6 py-5">

        <p className="text-sm leading-7 text-slate-500">
          <span className="font-semibold text-slate-300">
            Engineering note:
          </span>{" "}
          Actual drilling performance and capacity can vary with
          geological formation, drilling method, tooling, bore
          diameter, operating configuration and site conditions.
          Final machine selection should be based on the complete
          project requirement.
        </p>

      </div>

    </section>
  );
}