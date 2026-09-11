"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Compass,
} from "lucide-react";

export default function MissionVision() {
  return (
    <section
      className="space-y-16"
      aria-labelledby="mission-vision-heading"
    >

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Mission & Vision
        </span>

        <h2
          id="mission-vision-heading"
          className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Engineering for Access.
          <span className="block text-yellow-400">
            Building for the Future.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Our purpose connects drilling engineering with practical
          infrastructure needs, particularly groundwater,
          irrigation and projects that depend on reliable drilling
          equipment.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Mission */}

        <motion.article
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-[#090909] p-10"
        >

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500/10">

            <Target
              size={40}
              className="text-yellow-400"
              aria-hidden="true"
            />

          </div>

          <h3 className="mt-8 text-4xl font-bold text-white">
            Our Mission
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            To provide groundwater and drilling solutions that help
            make drinking and irrigation water accessible in areas
            where reliable water resources are difficult to reach.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-400">
            We support that mission through drilling rig
            engineering, equipment manufacturing and
            project-specific machine selection.
          </p>

        </motion.article>

        {/* Vision */}

        <motion.article
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-[#111827] to-[#090909] p-10"
        >

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500/10">

            <Eye
              size={40}
              className="text-yellow-400"
              aria-hidden="true"
            />

          </div>

          <h3 className="mt-8 text-4xl font-bold text-white">
            Our Vision
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            To build NGE Drillsol into a globally recognized
            drilling engineering and manufacturing company known
            for practical machine design, dependable equipment and
            technical solutions for demanding drilling projects.
          </p>

        </motion.article>

      </div>

      {/* Bottom */}

      <div className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10">

        <div className="flex flex-col items-center gap-6 text-center">

          <Compass
            size={46}
            className="text-yellow-400"
            aria-hidden="true"
          />

          <h3 className="text-3xl font-bold text-white">
            Engineering With a Practical Purpose
          </h3>

          <p className="max-w-4xl text-lg leading-9 text-slate-300">
            We measure drilling equipment by how effectively it
            solves a real project requirement—not simply by the
            number of specifications listed in a catalogue.
          </p>

        </div>

      </div>

    </section>
  );
}