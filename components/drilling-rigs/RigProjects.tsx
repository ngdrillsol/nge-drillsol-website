"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  FolderKanban,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigProjectsProps {
  rig: RigData;
}

export default function RigProjects({
  rig,
}: RigProjectsProps) {
  const projects = rig.projects || [];

  // Do not show an empty section.
  if (!projects.length) {
    return null;
  }

  return (
    <section
      id="projects"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            <FolderKanban size={14} />
            Projects
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Where the{" "}
            <span className="text-yellow-400">
              {rig.model}
            </span>{" "}
            Has Worked
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Selected projects and applications associated with this
            drilling rig.
          </p>

        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">

          <Building2
            size={20}
            className="text-yellow-400"
          />

          <span className="text-sm font-medium text-slate-300">
            NGE DRILLSOL Project Portfolio
          </span>

        </div>

      </div>

      {/* =====================================================
          PROJECT GRID
      ===================================================== */}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, index) => (

          <motion.article
            key={`${project}-${index}`}
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
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090C11] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30"
          >

            {/* Background decoration */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-yellow-500/10 opacity-0 blur-[80px] transition duration-500 group-hover:opacity-100" />

            {/* Project number */}

            <div className="absolute right-7 top-7 text-5xl font-black text-white/[0.035]">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Icon */}

            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">

              <FolderKanban
                size={25}
                className="text-yellow-400"
              />

            </div>

            {/* Project name */}

            <h3 className="relative mt-7 text-xl font-bold leading-8 text-white">
              {project}
            </h3>

            {/* Status */}

            <div className="mt-6 flex items-center gap-2">

              <CheckCircle2
                size={17}
                className="text-yellow-400"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Project Reference
              </span>

            </div>

          </motion.article>

        ))}

      </div>

      {/* =====================================================
          PORTFOLIO CTA
      ===================================================== */}

      <div className="rounded-[30px] border border-white/10 bg-white/[0.025] p-7 sm:p-9">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-xl font-bold text-white">
              Looking for a rig for a similar project?
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Share your project requirements with our team and we
              can discuss the appropriate drilling configuration.
            </p>

          </div>

          <Link
            href="#inquiry"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-[1.03] hover:bg-yellow-400"
          >
            Discuss Your Project

            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}