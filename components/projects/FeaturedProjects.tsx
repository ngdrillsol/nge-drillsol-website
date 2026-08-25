"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Drill,
} from "lucide-react";

import { projects } from "./projects.data";

export default function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      className="space-y-16"
    >
      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Featured Projects
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Engineering Excellence in Action
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Every successful project strengthens our engineering knowledge.
          Explore some of the landmark drilling projects executed using
          NGE DRILLSOL equipment.
        </p>

      </div>

      {/* Project Cards */}

      <div className="space-y-12">

        {projects.map((project, index) => (

          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="overflow-hidden rounded-[36px] border border-white/10 bg-[#090909]"
          >

            <div className="grid items-center">

              {/* Content */}

              <div className="p-10 lg:p-12">

                {/* Application */}

                <div className="mb-6 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                  {project.application}
                </div>

                {/* Title */}

                <h3 className="text-4xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-6 max-w-4xl leading-8 text-slate-400">
                  {project.description}
                </p>

                {/* Project Information */}

                <div className="mt-8 grid gap-6 sm:grid-cols-3">

                  {/* Duration */}

                  <div>

                    <div className="flex items-center gap-2 text-yellow-400">

                      <Calendar size={18} />

                      <span className="text-sm font-semibold">
                        Duration
                      </span>

                    </div>

                    <p className="mt-2 text-white">
                      {project.duration}
                    </p>

                  </div>

                  {/* Location */}

                  <div>

                    <div className="flex items-center gap-2 text-yellow-400">

                      <MapPin size={18} />

                      <span className="text-sm font-semibold">
                        Location
                      </span>

                    </div>

                    <p className="mt-2 text-white">
                      {project.location}
                    </p>

                  </div>

                  {/* Method */}

                  <div>

                    <div className="flex items-center gap-2 text-yellow-400">

                      <Drill size={18} />

                      <span className="text-sm font-semibold">
                        Method
                      </span>

                    </div>

                    <p className="mt-2 text-white">
                      {project.drillingMethod}
                    </p>

                  </div>

                </div>

                {/* Equipment */}

                <div className="mt-10">

                  <p className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-500">
                    Equipment Used
                  </p>

                  <div className="flex flex-wrap gap-3">

                    {project.rigs.map((rig) => (

                      <span
                        key={rig}
                        className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300"
                      >
                        {rig}
                      </span>

                    ))}

                  </div>

                </div>

                {/* Achievements */}

                <div className="mt-10">

                  <p className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-500">
                    Key Achievements
                  </p>

                  <div className="space-y-3">

                    {project.achievements.map((item) => (

                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >

                        <div className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />

                        <span className="text-slate-300">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

                {/* Case Study */}

                <Link
                  href={project.href}
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-105"
                >
                  View Full Case Study

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}