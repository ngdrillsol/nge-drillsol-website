"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Hammer,
  Compass,
  Building2,
} from "lucide-react";

const drillingMethods = [
  {
    title: "Mud Rotary Drilling",
    icon: Droplets,
    description:
      "The preferred drilling method for deep water wells in soft to medium formations. Suitable for clay, sand, gravel and mixed geological conditions.",
    suitableFor: "Water Well Drilling",
    rigs: "NGDR Series",
    href: "/drilling-rigs/water-well-drilling-rigs",
  },
  {
    title: "DTH Drilling",
    icon: Hammer,
    description:
      "Designed for hard rock formations using compressed air and DTH hammers, delivering high penetration rates and excellent borehole quality.",
    suitableFor: "Hard Rock Formations",
    rigs: "NGDTH Series",
    href: "/drilling-rigs/dth-drilling-rigs",
  },
  {
    title: "Core Drilling",
    icon: Compass,
    description:
      "Used for geological exploration, mineral investigation and geotechnical studies where continuous core samples are required.",
    suitableFor: "Exploration & Investigation",
    rigs: "NGCORE Series",
    href: "/drilling-rigs/core-drilling-rigs",
  },
  {
    title: "Piling",
    icon: Building2,
    description:
      "Foundation drilling method used in solar parks, transmission towers, bridges, highways and infrastructure projects.",
    suitableFor: "Foundation Engineering",
    rigs: "NGDP Series",
    href: "/drilling-rigs/piling-rigs",
  },
];

export default function DrillingGuide() {
  return (
    <section className="space-y-14">

      {/* Section Header */}
      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Drilling Methods
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Understand Before You Drill
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Different projects require different drilling techniques.
          Understanding the drilling method helps you choose the right
          drilling rig and achieve better field performance.
        </p>

      </div>

      {/* Drilling Method Cards */}
      <div className="grid gap-8 md:grid-cols-2">

        {drillingMethods.map((method, index) => {
          const Icon = method.icon;

          return (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >

              {/* Entire Card Is Clickable */}
              <Link
                href={method.href}
                className="group block rounded-[30px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-yellow-500/30"
              >

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-8 text-slate-400">
                  {method.description}
                </p>

                {/* Information */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                      Best For
                    </p>

                    <p className="mt-2 text-white">
                      {method.suitableFor}
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                    <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                      Recommended Rigs
                    </p>

                    <p className="mt-2 text-white">
                      {method.rigs}
                    </p>

                  </div>

                </div>

                {/* Navigation */}
                <div className="mt-8 inline-flex items-center gap-3 font-semibold text-yellow-400 transition group-hover:text-yellow-300">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </div>

              </Link>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}