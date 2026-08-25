"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Drill,
  Gauge,
  Settings2,
  Zap,
} from "lucide-react";

import type { GeologyData } from "./geology.types";

interface RigRequirementItem {
  parameter: string;
  requirement: string;
  reason: string;
}

interface RigRequirementsProps {
  geology: GeologyData;
}

export default function RigRequirements({
  geology,
}: RigRequirementsProps) {
  const requirements = geology.rigRequirements;

  if (!requirements || requirements.length === 0) {
    return null;
  }

  return (
    <section
      id="rig-requirements"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            <Settings2 size={14} />
            Rig Requirements
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            What the Rig Needs for{" "}
            <span className="text-yellow-400">
              {geology.name}
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Different geological formations place different demands
            on a drilling rig. The machine must be configured around
            the required drilling method, torque, feed force,
            circulation system, tooling and operating conditions.
          </p>
        </div>

        {/* =====================================================
            ENGINEERING PRINCIPLE
        ===================================================== */}

        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10">
              <Drill
                size={20}
                className="text-yellow-400"
              />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Configuration Principle
            </p>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            The rig should be selected according to the actual
            geological and drilling requirements rather than
            simply selecting a machine based on rated depth.
          </p>
        </div>
      </div>

      {/* =====================================================
          REQUIREMENT CARDS
      ===================================================== */}

      <div className="grid gap-5 md:grid-cols-2">
        {requirements.map((requirement, index) => (
          <motion.article
            key={`${requirement.parameter}-${index}`}
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
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090C11] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 sm:p-8"
          >
            {/* Glow */}

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

            {/* Number */}

            <div className="absolute right-7 top-6 text-5xl font-black text-white/[0.035]">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Icon */}

            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
              {index === 0 ? (
                <Gauge
                  size={25}
                  className="text-yellow-400"
                />
              ) : index === 1 ? (
                <Zap
                  size={25}
                  className="text-yellow-400"
                />
              ) : index === 2 ? (
                <Drill
                  size={25}
                  className="text-yellow-400"
                />
              ) : (
                <Settings2
                  size={25}
                  className="text-yellow-400"
                />
              )}
            </div>

            {/* =================================================
                PARAMETER
            ================================================= */}

            <p className="relative mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
              {requirement.parameter}
            </p>

            {/* =================================================
                REQUIREMENT
            ================================================= */}

            <h3 className="relative mt-3 text-xl font-bold leading-8 text-white">
              {requirement.requirement}
            </h3>

            {/* =================================================
                WHY IT MATTERS
            ================================================= */}

            <div className="relative mt-7 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-yellow-400"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  Why It Matters
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {requirement.reason}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* =====================================================
          ENGINEERING SUMMARY
      ===================================================== */}

      <div className="rounded-[30px] border border-yellow-500/15 bg-gradient-to-r from-yellow-500/[0.08] to-transparent p-7 sm:p-9">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/10">
            <Gauge
              size={25}
              className="text-yellow-400"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Engineering Summary
            </p>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Configure the machine around the formation
            </h3>

            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
              The geological formation determines the drilling
              challenge. That challenge determines the drilling
              method, tooling and operating parameters. Those
              requirements should then determine the hydraulic,
              mechanical and power configuration of the drilling rig.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}