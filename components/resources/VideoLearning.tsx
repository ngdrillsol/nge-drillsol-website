"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PlayCircle,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const videos = [
  {
    title: "Water Well Drilling Rig Demonstration",
    duration: "8 min",
    category: "Machine Demo",
  },
  {
    title: "Mud Rotary vs DTH Drilling",
    duration: "12 min",
    category: "Training",
  },
  {
    title: "Factory Tour - NGE DRILLSOL",
    duration: "6 min",
    category: "Factory",
  },
  {
    title: "Adani Green Hydrogen Project",
    duration: "10 min",
    category: "Case Study",
  },
];

export default function VideoLearning() {
  return (
    <section className="space-y-14">

      {/* Header */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Video Learning
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Learn Through
          <span className="block text-yellow-400">
            Videos & Demonstrations
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Watch machine demonstrations, drilling techniques,
          engineering discussions and project case studies
          presented by our engineering team.
        </p>

      </div>

      {/* Video Cards */}

      <div className="grid gap-8 md:grid-cols-2">

        {videos.map((video, index) => (

          <motion.div
            key={video.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[30px] border border-white/10 bg-[#090909] transition-all duration-300 hover:border-yellow-500/30"
          >

            {/* Thumbnail */}

            <div className="relative flex h-72 items-center justify-center bg-gradient-to-br from-[#1A1A1A] via-[#101010] to-[#050505]">

              <PlayCircle
                size={80}
                className="text-yellow-400"
              />

              <div className="absolute bottom-5 right-5 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
                {video.duration}
              </div>

            </div>

            {/* Content */}

            <div className="p-8">

              <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-yellow-400">
                {video.category}
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white">
                {video.title}
              </h3>

              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-3 font-semibold text-yellow-400 transition hover:text-yellow-300"
              >
                Watch Video

                <ArrowRight size={18} />

              </Link>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Bottom CTA */}

      <div className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10">

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          <div>

            <div className="flex items-center gap-4">

              <PlayCircle
                size={34}
                className="text-red-500"
              />

              <GraduationCap
                size={34}
                className="text-yellow-400"
              />

            </div>

            <h3 className="mt-5 text-3xl font-bold text-white">
              Follow Our Engineering Academy
            </h3>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Subscribe for drilling tutorials,
              machine demonstrations,
              project documentaries,
              maintenance videos
              and engineering education.
            </p>

          </div>

          <Link
            href="https://youtube.com"
            target="_blank"
            className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Visit YouTube

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}
