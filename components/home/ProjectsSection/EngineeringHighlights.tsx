"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ProjectData } from "./project.types";

interface EngineeringHighlightsProps {
  project: ProjectData;
}

export default function EngineeringHighlights({
  project,
}: EngineeringHighlightsProps) {
  return (
    <section className="relative py-28">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.45em] text-amber-400">
          ENGINEERING HIGHLIGHTS
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Field Operations That Matter
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Every milestone during execution contributes to project success.
          From geological logging to pump testing, these engineering
          activities ensured reliable groundwater infrastructure for one
          of the world's largest renewable energy developments.
        </p>
      </motion.div>

      {/* Grid */}

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {project.highlights.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
            }}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >

            {/* Image */}

            <div className="relative h-72 overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            </div>

            {/* Content */}

            <div className="p-8">

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                Engineering Activity
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {item.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}