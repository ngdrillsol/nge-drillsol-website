"use client";

import { motion } from "framer-motion";
import {
  AirVent,
  CheckCircle2,
  Drill,
  Droplets,
  Gauge,
  RotateCw,
} from "lucide-react";

import type { GeologyData } from "./geology.types";

interface DrillingMethodItem {
  title: string;
  description: string;
  why: string;
  bestFor?: string[];
  advantages?: string[];
}

interface DrillingMethodProps {
  geology: GeologyData;
}

export default function DrillingMethod({
  geology,
}: DrillingMethodProps) {
  /*
   * Your existing geology type uses its own DrillingMethod structure.
   * We convert it locally into the presentation structure required
   * by this component without changing geology.types.ts.
   */
  const methods = (
    (geology as unknown as {
      drillingMethods?: DrillingMethodItem[];
    }).drillingMethods || []
  );

  if (!methods.length) {
    return null;
  }

  return (
    <section
      id="drilling-method"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mx-auto max-w-4xl text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
          <Drill size={14} />

          Drilling Method Selection
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          The Right Method for{" "}
          <span className="text-yellow-400">
            {geology.name}
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Drilling method selection depends on formation behaviour,
          required bore diameter, target depth, groundwater conditions,
          hole stability and project objectives.
        </p>

      </div>

      {/* =====================================================
          METHOD FACTORS
      ===================================================== */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <MethodFactor
          icon={Gauge}
          title="Formation"
          description="Rock strength and formation behaviour"
        />

        <MethodFactor
          icon={RotateCw}
          title="Bore Diameter"
          description="Required hole size and reaming requirements"
        />

        <MethodFactor
          icon={Droplets}
          title="Circulation"
          description="Mud, water, air or foam circulation"
        />

        <MethodFactor
          icon={AirVent}
          title="Depth"
          description="Target depth and drilling conditions"
        />

      </div>

      {/* =====================================================
          METHOD CARDS
      ===================================================== */}

      <div className="grid gap-7 lg:grid-cols-2">

        {methods.map(
          (
            method: DrillingMethodItem,
            index: number
          ) => (

            <motion.article
              key={`${method.title}-${index}`}
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
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090C11] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 sm:p-8"
            >

              {/* Background Glow */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/10 opacity-0 blur-[90px] transition duration-500 group-hover:opacity-100" />

              {/* Header */}

              <div className="relative flex items-start justify-between gap-5">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                  <Drill
                    size={25}
                    className="text-blue-400"
                  />
                </div>

                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Method{" "}
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              {/* Title */}

              <h3 className="relative mt-7 text-2xl font-bold text-white">
                {method.title}
              </h3>

              {/* Description */}

              <p className="relative mt-4 text-base leading-7 text-slate-400">
                {method.description}
              </p>

              {/* Why This Method */}

              <div className="relative mt-7 rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.05] p-5">

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={17}
                    className="text-yellow-400"
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                    Why This Method
                  </span>

                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {method.why}
                </p>

              </div>

              {/* Best For */}

              {method.bestFor &&
              method.bestFor.length > 0 ? (
                <div className="relative mt-7">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Best For
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {method.bestFor.map(
                      (item: string) => (

                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                        >
                          {item}
                        </span>

                      )
                    )}

                  </div>

                </div>
              ) : null}

              {/* Advantages */}

              {method.advantages &&
              method.advantages.length > 0 ? (
                <div className="relative mt-7 border-t border-white/10 pt-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Engineering Advantages
                  </p>

                  <div className="mt-4 space-y-3">

                    {method.advantages.map(
                      (advantage: string) => (

                        <div
                          key={advantage}
                          className="flex items-start gap-3"
                        >

                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-green-400"
                          />

                          <span className="text-sm leading-6 text-slate-400">
                            {advantage}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>
              ) : null}

            </motion.article>

          )
        )}

      </div>

      {/* =====================================================
          ENGINEERING RULE
      ===================================================== */}

      <div className="overflow-hidden rounded-[30px] border border-blue-500/15 bg-gradient-to-r from-blue-500/[0.07] via-transparent to-yellow-500/[0.04]">

        <div className="flex flex-col gap-6 p-7 sm:p-9 lg:flex-row lg:items-center lg:p-10">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">

            <Gauge
              size={25}
              className="text-blue-400"
            />

          </div>

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Engineering Rule
            </p>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Method first. Rig configuration second.
            </h3>

            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
              Once the drilling method is established, the required
              rotary torque, feed force, air or mud circulation,
              tooling and power requirements can be determined.
              The drilling rig should then be configured around those
              requirements.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   METHOD FACTOR
========================================================= */

function MethodFactor({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Gauge;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">

          <Icon
            size={19}
            className="text-yellow-400"
          />

        </div>

        <div>

          <h3 className="text-sm font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}