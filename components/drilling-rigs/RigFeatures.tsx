"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cog,
  ShieldCheck,
  Gauge,
  Layers3,
  Settings2,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigFeaturesProps {
  rig: RigData;
}

const featureIcons = [
  Cog,
  Gauge,
  ShieldCheck,
  Layers3,
  Settings2,
  CheckCircle2,
];

export default function RigFeatures({
  rig,
}: RigFeaturesProps) {
  const features = rig.features || [];

  if (!features.length) {
    return null;
  }

  return (
    <section
      id="features"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="text-center">

        <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
          Engineering Advantages
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
          Key Features of the{" "}
          <span className="text-yellow-400">
            {rig.model}
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          Designed around the practical requirements of demanding
          drilling projects, with configuration and capabilities
          selected for the intended application.
        </p>

      </div>

      {/* =====================================================
          FEATURE GRID
      ===================================================== */}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {features.map((feature, index) => {

          const Icon =
            featureIcons[index % featureIcons.length];

          return (
            <motion.article
              key={`${feature.title}-${index}`}
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
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#090C11] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30"
            >

              {/* Hover glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

              {/* Number */}

              <div className="absolute right-6 top-6 text-sm font-bold text-white/10">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 transition duration-300 group-hover:border-yellow-400/40 group-hover:bg-yellow-500/15">

                <Icon
                  size={25}
                  className="text-yellow-400"
                />

              </div>

              {/* Title */}

              <h3 className="mt-7 text-xl font-bold text-white">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-base leading-7 text-slate-400">
                {feature.description}
              </p>

              {/* Bottom indicator */}

              <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400/80">

                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

                Engineering Feature

              </div>

            </motion.article>
          );
        })}

      </div>

      {/* =====================================================
          BOTTOM NOTE
      ===================================================== */}

      <div className="rounded-[28px] border border-white/10 bg-white/[0.025] px-7 py-6 sm:px-9">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">

            <ShieldCheck
              size={22}
              className="text-yellow-400"
            />

          </div>

          <p className="text-sm leading-7 text-slate-400">

            <span className="font-semibold text-slate-200">
              Project-specific configuration:
            </span>{" "}
            Final machine configuration, tooling and auxiliary
            equipment can depend on drilling method, formation,
            bore diameter and customer project requirements.

          </p>

        </div>

      </div>

    </section>
  );
}