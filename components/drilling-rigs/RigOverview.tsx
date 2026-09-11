"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Drill,
  Factory,
  Globe2,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigOverviewProps {
  rig: RigData;
}

function formatCategory(category: string) {
  return category
    .replace(/-drilling-rigs$/i, "")
    .replace(/-rigs$/i, "")
    .split("-")
    .map((word) =>
      word.toLowerCase() === "dth"
        ? "DTH"
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export default function RigOverview({
  rig,
}: RigOverviewProps) {
  const categories = rig.category || [];

  const categoryLabels =
    categories.map(formatCategory);

  const productName = rig.name
    .toLowerCase()
    .includes(rig.model.toLowerCase())
    ? rig.name
    : `${rig.model} ${rig.name}`;

  return (
    <section
      id="overview"
      className="space-y-12"
      aria-labelledby="rig-overview-heading"
    >

      {/* Header */}

      <div className="max-w-4xl">

        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">

          <Drill
            size={14}
            aria-hidden="true"
          />

          {rig.model} Overview
        </span>

        <h2
          id="rig-overview-heading"
          className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl"
        >
          What is the{" "}
          <span className="text-yellow-400">
            {rig.model}
          </span>
          ?
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          The {productName} is part of NGE Drillsol&apos;s{" "}
          {categoryLabels.length > 0
            ? categoryLabels.join(", ")
            : "drilling rig"}{" "}
          range. {rig.tagline}
        </p>

      </div>

      {/* Main Content */}

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">

        {/* Description */}

        <motion.div
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
          className="rounded-[32px] border border-white/10 bg-[#090C11] p-8 sm:p-10"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10">

              <Factory
                size={23}
                className="text-yellow-400"
                aria-hidden="true"
              />

            </div>

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Product Overview
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                {productName}
              </h3>

            </div>

          </div>

          <div className="mt-8 space-y-5">

            {rig.description
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-9 text-slate-300"
                >
                  {paragraph}
                </p>
              ))}

          </div>

          {/* Category Tags */}

          {categoryLabels.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">

              {categoryLabels.map((category) => (

                <span
                  key={category}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {category}
                </span>

              ))}

            </div>
          )}

        </motion.div>

        {/* Project Suitability */}

        <motion.div
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
            delay: 0.1,
          }}
          className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/[0.10] via-[#090C11] to-[#090C11] p-8 sm:p-10"
        >

          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-500/10 blur-[80px]" />

          <div className="relative">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10">

              <Globe2
                size={23}
                className="text-yellow-400"
                aria-hidden="true"
              />

            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">
              Is the {rig.model} Suitable for Your Project?
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Final suitability should be evaluated against the
              actual drilling conditions of your project, not by
              model capacity alone.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Formation and ground conditions",
                "Required drilling depth",
                "Target bore diameter",
                "Selected drilling method",
                "Tooling and power requirements",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-yellow-400"
                    aria-hidden="true"
                  />

                  <span className="text-sm leading-6 text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <a
              href="#inquiry"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
            >
              Discuss the {rig.model}

              <ArrowRight
                size={17}
                aria-hidden="true"
              />

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}