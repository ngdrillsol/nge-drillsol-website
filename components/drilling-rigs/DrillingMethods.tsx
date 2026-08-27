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

const methods = [
  {
    title: "Mud Rotary Drilling",
    icon: Droplets,
    description:
      "Ideal for deep water well drilling in clay, sand, gravel and mixed formations. Suitable for large diameter boreholes and high-capacity groundwater projects.",
    bestFor: "Deep Water Wells",
    href: "/solutions/drilling-method-guide/mud-rotary",
  },
  {
    title: "DTH Drilling",
    icon: Hammer,
    description:
      "Designed for fast penetration in hard rock formations using compressed air. Preferred for granite, basalt and fractured rock conditions.",
    bestFor: "Hard Rock",
    href: "/solutions/drilling-method-guide/dth",
  },
  {
    title: "Core Drilling",
    icon: Compass,
    description:
      "Precision drilling for geological exploration, mineral investigation and geotechnical surveys where rock core samples are required.",
    bestFor: "Exploration",
    href: "/solutions/drilling-method-guide/core-drilling",
  },
  {
    title: "Piling",
    icon: Building2,
    description:
      "Foundation drilling solution for solar parks, transmission lines, bridges, industrial construction and infrastructure development.",
    bestFor: "Infrastructure",
    href: "/solutions/drilling-method-guide/piling",
  },
];

export default function DrillingMethods() {
  return (
    <section className="space-y-12">

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Drilling Methods
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Choose the Right Drilling Method
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Different geological formations require different drilling
          techniques. Select the method that best suits your project.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {methods.map((method, index) => {
          const Icon = method.icon;

          return (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-[28px] border border-white/10 bg-[#0A0A0A] p-8 transition hover:border-yellow-500/30"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                <Icon size={32} />
              </div>

              <h3 className="text-3xl font-bold text-white">
                {method.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {method.description}
              </p>

              <div className="mt-8 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                  BEST FOR
                </p>

                <p className="mt-2 font-semibold text-white">
                  {method.bestFor}
                </p>
              </div>

              <Link
                href={method.href}
                className="mt-8 inline-flex items-center gap-3 font-semibold text-yellow-400 transition hover:text-yellow-300"
              >
                Learn More

                <ArrowRight size={18} />
              </Link>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
