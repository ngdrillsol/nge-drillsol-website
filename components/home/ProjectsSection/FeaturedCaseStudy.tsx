"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import CaseStudyStats from "./CaseStudyStats";
import { ProjectData } from "./project.types";

interface FeaturedCaseStudyProps {
  project: ProjectData;
}

export default function FeaturedCaseStudy({
  project,
}: FeaturedCaseStudyProps) {
  return (
    <section className="relative mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-[#060606] shadow-2xl shadow-black/40 sm:mt-14 lg:mt-20 lg:rounded-[28px]">
      {/* Hero Banner */}
      <div className="relative h-[360px] overflow-hidden sm:h-[520px] lg:h-[680px]">
        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="absolute inset-0"
        >
          <Image
            src={project.heroImage}
            alt={project.headline}
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

        {/* Hero Content */}
        <div className="relative z-20 flex h-full items-end">
          <div className="max-w-3xl px-8 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20">
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-black/35 px-5 py-2 backdrop-blur-xl"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                {project.badge}
              </span>
            </motion.div>

            {/* Headline */}

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-8 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"
            >
              {project.headline}
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Overview */}

      <div className="relative z-10 px-8 py-14 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-10 bg-amber-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
              PROJECT OVERVIEW
            </span>
          </div>

          <p className="mt-8 max-w-5xl text-lg leading-9 text-slate-300 md:text-xl">
            {project.overview}
          </p>
        </motion.div>

        {/* Divider */}

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Project Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-10 bg-amber-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
              PROJECT INFORMATION
            </span>
          </div>

          <CaseStudyStats project={project} />
        </motion.div>
      </div>
    </section>
  );
}
