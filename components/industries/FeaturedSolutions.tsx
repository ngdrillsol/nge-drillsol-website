"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Hammer,
  Building2,
  Pickaxe,
  Sun,
  Fuel,
  Compass,
} from "lucide-react";

const solutions = [
  {
    title: "Water Supply",
    icon: Droplets,
    method: "Mud Rotary Drilling",
    rig: "NGDR Series",
    description:
      "Deep water well drilling for municipal, industrial and rural water supply projects.",
    href: "/drilling-rigs/water-well-drilling-rigs",
  },
  {
    title: "Mining",
    icon: Pickaxe,
    method: "DTH Drilling",
    rig: "NGDTH Series",
    description:
      "High-performance drilling solutions for mineral exploration and mining operations.",
    href: "/drilling-rigs/dth-drilling-rigs",
  },
  {
    title: "Infrastructure",
    icon: Building2,
    method: "Foundation Drilling",
    rig: "NGDP Series",
    description:
      "Foundation drilling for bridges, highways, transmission towers and civil engineering.",
    href: "/drilling-rigs/piling-rigs",
  },
  {
    title: "Solar",
    icon: Sun,
    method: "Pile Foundation",
    rig: "NGDP Series",
    description:
      "Engineered piling solutions for utility-scale solar parks and renewable energy projects.",
    href: "/drilling-rigs/piling-rigs",
  },
  {
    title: "Oil & Gas",
    icon: Fuel,
    method: "Workover Operations",
    rig: "NGWR3100",
    description:
      "Heavy-duty workover solutions for upstream oilfield maintenance and production support.",
    href: "/drilling-rigs/workover-rigs",
  },
  {
    title: "Geological Exploration",
    icon: Compass,
    method: "Core Drilling",
    rig: "NGCORE Series",
    description:
      "Accurate core sampling for geological mapping, mineral exploration and geotechnical investigations.",
    href: "/drilling-rigs/core-drilling-rigs",
  },
];

export default function FeaturedSolutions() {
  return (
    <section className="space-y-10 sm:space-y-12 lg:space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Featured Engineering Solutions
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Every Industry Has
          <span className="block text-yellow-400">
            The Right Solution
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          We don't recommend the same drilling rig for every application.
          Our engineering team selects the right drilling method and
          equipment based on your industry's requirements.
        </p>

      </div>

      {/* Solution Cards */}

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:pb-0 xl:grid-cols-3">

        {solutions.map((solution, index) => {
          const Icon = solution.icon;

          return (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group w-[86vw] max-w-[360px] shrink-0 snap-start rounded-[24px] border border-white/10 bg-[#090909] p-5 transition-all duration-300 hover:border-yellow-500/30 sm:p-6 lg:w-auto lg:max-w-none lg:rounded-[30px] lg:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400 lg:h-16 lg:w-16">
                <Icon size={30} />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white lg:mt-6 lg:text-3xl">
                {solution.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7 lg:mt-5 lg:leading-8">
                {solution.description}
              </p>

              <div className="mt-5 space-y-3 lg:mt-8 lg:space-y-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                    Drilling Method
                  </p>

                  <p className="mt-2 text-white">
                    {solution.method}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                    Recommended Rig
                  </p>

                  <p className="mt-2 text-white">
                    {solution.rig}
                  </p>
                </div>

              </div>

              <Link
                href={solution.href}
                className="mt-6 inline-flex items-center gap-3 font-semibold text-yellow-400 transition hover:text-yellow-300 lg:mt-8"
              >
                Explore Solution

                <ArrowRight size={18} />

              </Link>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
