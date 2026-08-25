"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Drill,
  Gauge,
  Layers3,
  Wrench,
} from "lucide-react";

import type { GeologyData } from "./geology.types";

interface GeologyChallengesProps {
  geology: GeologyData;
}

const challengeIcons = [
  Layers3,
  Drill,
  Gauge,
  Wrench,
  AlertTriangle,
];

export default function GeologyChallenges({
  geology,
}: GeologyChallengesProps) {
  const challenges = geology.challenges || [];

  if (!challenges.length) {
    return null;
  }

  return (
    <section
      id="engineering-analysis"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mx-auto max-w-4xl text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
          <AlertTriangle size={14} />

          Formation Challenges
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          What Makes{" "}
          <span className="text-yellow-400">
            {geology.name}
          </span>{" "}
          Difficult to Drill?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Different formations create different drilling problems.
          Understanding these challenges is the first step toward
          selecting the correct drilling method, tooling and rig
          configuration.
        </p>

      </div>

      {/* =====================================================
          CHALLENGE GRID
      ===================================================== */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {challenges.map((challenge, index) => {

          const Icon =
            challengeIcons[index % challengeIcons.length];

          return (
            <motion.article
              key={`${challenge.title}-${index}`}
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
                delay: index * 0.07,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#090C11] p-7 transition-all duration-300 hover:border-red-500/20 sm:p-8"
            >

              {/* Background Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-red-500/10 opacity-0 blur-[80px] transition duration-500 group-hover:opacity-100" />

              {/* Number */}

              <div className="absolute right-7 top-6 text-6xl font-black text-white/[0.035]">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
                <Icon
                  size={25}
                  className="text-red-400"
                />
              </div>

              {/* Title */}

              <h3 className="relative mt-7 text-2xl font-bold text-white">
                {challenge.title}
              </h3>

              {/* Description */}

              <p className="relative mt-4 text-base leading-7 text-slate-400">
                {challenge.description}
              </p>

              {/* Challenge Marker */}

              <div className="relative mt-7 flex items-center gap-2">

                <div className="h-1.5 w-1.5 rounded-full bg-red-400" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Formation Risk
                </span>

              </div>

            </motion.article>
          );
        })}

      </div>

      {/* =====================================================
          ENGINEERING MESSAGE
      ===================================================== */}

      <div className="overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#0D121A] to-[#080A0E]">

        <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[auto_1fr] lg:items-center lg:p-10">

          {/* Icon */}

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">

            <Drill
              size={28}
              className="text-yellow-400"
            />

          </div>

          {/* Message */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Engineering Approach
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              The formation determines the drilling strategy.
            </h3>

            <p className="mt-3 max-w-4xl leading-7 text-slate-400">
              These challenges should not be considered independently.
              Formation behaviour affects the drilling method, bit or
              hammer selection, circulation system, rotary torque,
              feed force, drilling parameters and ultimately the rig
              configuration required for the project.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}