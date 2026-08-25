"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Drill,
  Hammer,
  Settings2,
  Wrench,
} from "lucide-react";

import type { GeologyData } from "./geology.types";

interface ToolingItem {
  title: string;
  description: string;
  application?: string;
}

interface ToolingRequirementsProps {
  geology: GeologyData;
}

export default function ToolingRequirements({
  geology,
}: ToolingRequirementsProps) {
  const tooling =
    (
      geology as unknown as {
        toolingRequirements?: ToolingItem[];
      }
    ).toolingRequirements || [];

  if (!tooling.length) {
    return null;
  }

  return (
    <section
      id="tooling-requirements"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            <Wrench size={14} />
            Tooling Requirements
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Tooling for{" "}
            <span className="text-yellow-400">
              {geology.name}
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            The drilling tools must match the formation, drilling
            method, bore diameter and required performance. Correct
            tooling improves penetration, hole stability, drilling
            efficiency and overall operating cost.
          </p>

        </div>

        {/* Tooling principle */}

        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10">

              <Drill
                size={20}
                className="text-yellow-400"
              />

            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Tool Selection
            </p>

          </div>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Select the bit, drill string and supporting tooling
            according to formation behaviour and the selected
            drilling method.
          </p>

        </div>

      </div>

      {/* =====================================================
          TOOLING CARDS
      ===================================================== */}

      <div className="grid gap-5 md:grid-cols-2">

        {tooling.map(
          (
            item: ToolingItem,
            index: number
          ) => (

            <motion.article
              key={`${item.title}-${index}`}
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

              {/* Background glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

              {/* Number */}

              <div className="absolute right-7 top-6 text-5xl font-black text-white/[0.035]">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">

                {index === 0 ? (
                  <Hammer
                    size={25}
                    className="text-yellow-400"
                  />
                ) : index === 1 ? (
                  <Drill
                    size={25}
                    className="text-yellow-400"
                  />
                ) : index === 2 ? (
                  <Wrench
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

              {/* Title */}

              <h3 className="relative mt-7 text-xl font-bold text-white">
                {item.title}
              </h3>

              {/* Description */}

              <p className="relative mt-4 text-base leading-7 text-slate-400">
                {item.description}
              </p>

              {/* Application */}

              {item.application ? (
                <div className="relative mt-7 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                  <div className="flex items-center gap-2">

                    <CheckCircle2
                      size={17}
                      className="text-yellow-400"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                      Recommended Use
                    </span>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.application}
                  </p>

                </div>
              ) : null}

            </motion.article>

          )
        )}

      </div>

      {/* =====================================================
          TOOLING SUMMARY
      ===================================================== */}

      <div className="rounded-[30px] border border-yellow-500/15 bg-gradient-to-r from-yellow-500/[0.08] to-transparent p-7 sm:p-9">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/10">

            <Wrench
              size={25}
              className="text-yellow-400"
            />

          </div>

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Engineering Approach
            </p>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Match the tooling to the formation
            </h3>

            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
              Bit selection, drill string configuration and supporting
              tooling should be considered together with the drilling
              method and rig configuration. The objective is reliable
              penetration, stable hole conditions and efficient
              drilling performance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}