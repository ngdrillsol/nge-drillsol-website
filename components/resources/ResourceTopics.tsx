"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Pickaxe,
  Globe2,
  Settings,
  Building2,
  Newspaper,
  ArrowRight,
} from "lucide-react";

const topics = [
  {
    id: "water-well-drilling",
    title: "Water Well Drilling",
    description:
      "Complete technical articles covering borewell drilling, drilling methods, casing design, groundwater development and water well engineering.",
    icon: Droplets,
  },
  {
    id: "mining-exploration",
    title: "Mining & Exploration",
    description:
      "Articles covering mining drilling, blast hole drilling, core drilling, mineral exploration and drilling systems for demanding formations.",
    icon: Pickaxe,
  },
  {
    id: "country-geology",
    title: "Country & Geology Guides",
    description:
      "Country-specific geological information, groundwater conditions, formations and drilling considerations for projects around the world.",
    icon: Globe2,
  },
  {
    id: "drilling-technology",
    title: "Drilling Technology",
    description:
      "Engineering knowledge covering hydraulic systems, rotary heads, mud pumps, compressors, drill tools and drilling innovations.",
    icon: Settings,
  },
  {
    id: "projects-case-studies",
    title: "Projects & Case Studies",
    description:
      "Real drilling projects, engineering challenges, field operations, customer requirements and lessons learned from completed projects.",
    icon: Building2,
  },
  {
    id: "industry-news",
    title: "Industry News",
    description:
      "Latest developments in drilling technology, industry trends, exhibitions, new equipment, projects and global engineering updates.",
    icon: Newspaper,
  },
];

export default function ResourceTopics() {
  return (
    <section
      id="resource-topics"
      className="space-y-14"
    >
      {/* Header */}

      <div className="text-center">
        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          NGE Knowledge Topics
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Explore Our
          <span className="block text-yellow-400">
            Engineering Knowledge
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Explore technical articles, engineering insights, geological
          information, project experiences and the latest developments
          from the drilling industry.
        </p>
      </div>

      {/* Topic Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {topics.map((topic, index) => {
          const Icon = topic.icon;

          return (
            <motion.article
              key={topic.id}
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
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#0D1422] via-[#0A0D14] to-[#050505] p-8 transition-all duration-300 hover:border-yellow-500/30"
            >
              {/* Background Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-500/10 opacity-0 blur-[80px] transition duration-500 group-hover:opacity-100" />

              {/* Icon */}

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                <Icon
                  size={27}
                  className="text-yellow-400"
                />
              </div>

              {/* Title */}

              <h3 className="relative mt-7 text-2xl font-bold text-white">
                {topic.title}
              </h3>

              {/* Description */}

              <p className="relative mt-5 min-h-[120px] leading-8 text-slate-400">
                {topic.description}
              </p>

              {/* Bottom */}

              <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-sm font-semibold text-slate-300 transition-colors group-hover:text-yellow-400">
                  Explore Articles
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500 text-black transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={19} />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
