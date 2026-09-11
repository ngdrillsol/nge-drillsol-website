"use client";

import { motion } from "framer-motion";
import {
  Settings2,
  FileText,
  ChevronRight,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigSpecificationsProps {
  rig: RigData;
}

export default function RigSpecifications({
  rig,
}: RigSpecificationsProps) {
  const specifications = rig.specifications || [];

  if (!specifications.length) {
    return null;
  }

  return (
    <section
      id="specifications"
      className="space-y-12"
      aria-labelledby="technical-specifications-heading"
    >

      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">

            <Settings2
              size={14}
              aria-hidden="true"
            />

            Technical Data
          </span>

          <h2
            id="technical-specifications-heading"
            className="mt-6 text-4xl font-bold text-white sm:text-5xl"
          >
            {rig.model} Technical
            <span className="text-yellow-400">
              {" "}Specifications
            </span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Published technical parameters and machine
            specifications for the{" "}
            <span className="font-semibold text-slate-200">
              {rig.model}
            </span>
            {" "}drilling rig.
          </p>

        </div>

        {/* Model Badge */}

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">

          <FileText
            size={20}
            className="text-yellow-400"
            aria-hidden="true"
          />

          <div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Rig Model
            </p>

            <p className="mt-1 font-bold text-white">
              {rig.model}
            </p>

          </div>

        </div>

      </div>

      {/* Specification List */}

      <motion.dl
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
          amount: 0.15,
        }}
        className="overflow-hidden rounded-[32px] border border-white/10 bg-[#090C11]"
      >

        {/* Desktop Header */}

        <div className="hidden grid-cols-[1fr_1.5fr] border-b border-white/10 bg-white/[0.035] px-8 py-5 md:grid">

          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Parameter
          </div>

          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Specification
          </div>

        </div>

        {/* Rows */}

        {specifications.map((spec, index) => (

          <div
            key={`${spec.label}-${index}`}
            className={`grid gap-3 px-6 py-6 transition hover:bg-white/[0.025] md:grid-cols-[1fr_1.5fr] md:px-8 ${
              index !== specifications.length - 1
                ? "border-b border-white/10"
                : ""
            }`}
          >

            <dt className="flex items-center gap-3">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">

                <ChevronRight
                  size={15}
                  className="text-yellow-400"
                  aria-hidden="true"
                />

              </div>

              <span className="text-sm font-semibold uppercase tracking-[0.05em] text-slate-400">
                {spec.label}
              </span>

            </dt>

            <dd className="text-base font-semibold leading-7 text-white md:pl-2">
              {spec.value}
            </dd>

          </div>

        ))}

      </motion.dl>

      {/* Technical Note */}

      <div className="rounded-[28px] border border-yellow-500/15 bg-yellow-500/[0.035] px-7 py-6 sm:px-9">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">

            <Settings2
              size={20}
              className="text-yellow-400"
              aria-hidden="true"
            />

          </div>

          <div>

            <p className="font-semibold text-white">
              {rig.model} specification note
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Specifications shown represent the published
              configuration for this model. Actual performance,
              drilling capacity and equipment configuration can vary
              according to formation conditions, drilling method,
              tooling, bore diameter and project requirements.
              Confirm the final technical configuration with NGE
              Drillsol before ordering.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}