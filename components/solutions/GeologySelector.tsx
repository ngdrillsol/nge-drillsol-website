"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mountain,
  ArrowRight,
  Waves,
  Trees,
  Pickaxe,
  Layers3,
  Circle,
} from "lucide-react";

const geology = [
  {
    title: "Clay",
    icon: Circle,
    description:
      "Soft cohesive formations requiring high bore stability and efficient mud circulation.",
    rigs: "NGDR Series",
    href: "/solutions/geology/clay",
  },
  {
    title: "Sand",
    icon: Waves,
    description:
      "Loose formations demanding proper drilling fluid management and casing support.",
    rigs: "NGDR Series",
    href: "/solutions/geology/sand",
  },
  {
    title: "Gravel",
    icon: Layers3,
    description:
      "Mixed formations with cobbles and gravel requiring high torque rotary drilling.",
    rigs: "NGDR Series",
    href: "/solutions/geology/gravel",
  },
  {
    title: "Hard Rock",
    icon: Mountain,
    description:
      "Granite, basalt and fractured formations best suited for DTH drilling systems.",
    rigs: "NGDTH Series",
    href: "/solutions/geology/hard-rock",
  },
  {
    title: "Limestone",
    icon: Pickaxe,
    description:
      "Variable formations requiring optimized drilling methods based on project depth.",
    rigs: "NGDR + NGDTH",
    href: "/solutions/geology/limestone",
  },
  {
    title: "Mixed Formation",
    icon: Trees,
    description:
      "Projects involving alternating soft and hard formations requiring versatile drilling rigs.",
    rigs: "NGDR2000 / NGDR3000",
    href: "/solutions/geology/mixed-formation",
  },
];

export default function GeologySelector() {
  return (
    <section className="space-y-12">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          By Geology
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Select According to Ground Formation
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Geological conditions directly influence drilling performance,
          drilling method and equipment selection. Start by selecting
          your ground formation.
        </p>

      </div>

      {/* =====================================================
          GEOLOGY CARDS
      ===================================================== */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {geology.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
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
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
            >

              <Link
                href={item.href}
                className="group block rounded-[28px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-yellow-500/30"
              >

                {/* Icon */}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Icon
                    size={30}
                    className="text-yellow-400"
                  />

                </div>

                {/* Title */}

                <h3 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-slate-400">
                  {item.description}
                </p>

                {/* Recommended Rig */}

                <div className="mt-8 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4">

                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                    Recommended Rig
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    {item.rigs}
                  </p>

                </div>

                {/* CTA */}

                <div className="mt-8 flex items-center justify-between">

                  <span className="font-semibold text-yellow-400">
                    Explore Geology
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-black transition-transform duration-300 group-hover:translate-x-1">

                    <ArrowRight size={19} />

                  </div>

                </div>

              </Link>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}