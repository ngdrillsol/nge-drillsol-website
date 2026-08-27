"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Drill,
  Mountain,
  Droplets,
  Sun,
  Building2,
} from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    value: "35+",
    title: "Countries Served",
    description:
      "Supplying drilling solutions to customers across Africa, the Middle East and international markets.",
  },
  {
    icon: Drill,
    value: "12+",
    title: "Rig Models",
    description:
      "Water well, DTH, rotary, piling, core drilling and workover rigs designed for diverse applications.",
  },
  {
    icon: Mountain,
    value: "6",
    title: "Geology Types",
    description:
      "Experience working in clay, sand, gravel, limestone, basalt and hard rock formations.",
  },
  {
    icon: Droplets,
    value: "100+",
    title: "Water Well Projects",
    description:
      "Supporting groundwater development for drinking water, irrigation and industrial applications.",
  },
  {
    icon: Sun,
    value: "Renewable",
    title: "Energy Projects",
    description:
      "Engineering solutions for solar infrastructure and Green Hydrogen developments including landmark projects.",
  },
  {
    icon: Building2,
    value: "Complete",
    title: "Engineering Support",
    description:
      "From machine selection and customization to installation, commissioning and after-sales support.",
  },
];

export default function EngineeringHighlights() {
  return (
    <section className="space-y-10 md:space-y-14">

      {/* Header */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Engineering Highlights
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Built on Experience.
          <span className="block text-yellow-400">
            Proven in the Field.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Every completed project strengthens our engineering expertise,
          helping us design better drilling rigs and deliver reliable
          drilling solutions worldwide.
        </p>

      </div>

      {/* Cards */}

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-8 md:grid-cols-2 md:overflow-visible xl:grid-cols-3">

        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="w-[82vw] max-w-[330px] shrink-0 snap-start rounded-[30px] border border-white/10 bg-[#090909] p-6 transition-all duration-300 hover:border-yellow-500/30 md:w-auto md:max-w-none md:p-8"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                <Icon size={30} />
              </div>

              <div className="text-3xl font-bold text-yellow-400 sm:text-4xl lg:text-5xl">
                {item.value}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {item.description}
              </p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
