"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Drill,
  Factory,
  Mountain,
  Droplets,
  Building2,
  ArrowUpRight,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigApplicationsProps {
  rig: RigData;
}

const applicationIcons = [
  Droplets,
  Drill,
  Mountain,
  Building2,
  Factory,
  CheckCircle2,
];

export default function RigApplications({
  rig,
}: RigApplicationsProps) {
  const applications = rig.applications || [];

  if (!applications.length) {
    return null;
  }

  return (
    <section
      id="applications"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            <Drill size={14} />
            Applications
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Where the{" "}
            <span className="text-yellow-400">
              {rig.model}
            </span>{" "}
            Fits
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Explore the drilling and engineering applications for which
            this rig can be considered based on its published
            configuration.
          </p>

        </div>

        {/* Right intro card */}

        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Project Selection
          </p>

          <p className="mt-4 text-base leading-7 text-slate-300">
            The final rig selection should consider formation,
            required depth, bore diameter, drilling method, tooling
            and project conditions.
          </p>

        </div>

      </div>

      {/* =====================================================
          APPLICATION CARDS
      ===================================================== */}

      <div className="grid gap-5 md:grid-cols-2">

        {applications.map((application, index) => {

          const Icon =
            applicationIcons[index % applicationIcons.length];

          return (
            <motion.article
              key={`${application.title}-${index}`}
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
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090C11] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 sm:p-8"
            >

              {/* Background decoration */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

              {/* Number */}

              <div className="absolute right-7 top-7 text-5xl font-black text-white/[0.035]">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">

                <Icon
                  size={25}
                  className="text-yellow-400"
                />

              </div>

              {/* Title */}

              <div className="mt-7 flex items-center justify-between gap-4">

                <h3 className="text-xl font-bold text-white">
                  {application.title}
                </h3>

                <ArrowUpRight
                  size={19}
                  className="shrink-0 text-slate-600 transition group-hover:text-yellow-400"
                />

              </div>

              {/* Description */}

              <p className="mt-4 text-base leading-7 text-slate-400">
                {application.description}
              </p>

              {/* Suitability marker */}

              <div className="mt-7 flex items-center gap-2">

                <CheckCircle2
                  size={17}
                  className="text-yellow-400"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Application Category
                </span>

              </div>

            </motion.article>
          );
        })}

      </div>

      {/* =====================================================
          CONSULTATION CTA
      ===================================================== */}

      <div className="overflow-hidden rounded-[30px] border border-yellow-500/15 bg-gradient-to-r from-yellow-500/[0.08] to-transparent p-7 sm:p-9">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10">

                <Drill
                  size={20}
                  className="text-yellow-400"
                />

              </div>

              <p className="font-semibold text-white">
                Not sure if {rig.model} is right for your project?
              </p>

            </div>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Share your target depth, bore diameter, formation,
              drilling method and project location with our team.
              We can evaluate the requirements and recommend the
              appropriate configuration.
            </p>

          </div>

          <a
            href="#inquiry"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-[1.03] hover:bg-yellow-400"
          >
            Discuss Your Project

            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}