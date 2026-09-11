"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Mountain,
  Settings,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const philosophy = [
  {
    icon: Mountain,
    title: "Start With Geology",
    description:
      "Drilling equipment selection begins with geological formation, required depth, bore diameter, drilling method and project objectives.",
  },
  {
    icon: Settings,
    title: "Match the Rig to the Project",
    description:
      "Machine configuration should reflect the actual operating conditions instead of relying on a one-size-fits-all drilling platform.",
  },
  {
    icon: ShieldCheck,
    title: "Prioritize Serviceability",
    description:
      "Drilling equipment should be practical to operate, maintain and support in the field, particularly in demanding or remote project locations.",
  },
  {
    icon: Lightbulb,
    title: "Improve Through Field Experience",
    description:
      "Customer requirements, operating experience and engineering feedback contribute to continued product development and machine improvement.",
  },
];

export default function EngineeringPhilosophy() {
  return (
    <section
      className="space-y-16"
      aria-labelledby="engineering-philosophy-heading"
    >

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Engineering Philosophy
        </span>

        <h2
          id="engineering-philosophy-heading"
          className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Select the Rig Around
          <span className="block text-yellow-400">
            the Drilling Requirement
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          NGE Drillsol approaches drilling equipment as an
          engineering problem. Geological formation, depth,
          diameter, drilling method and operating conditions should
          guide the final machine configuration.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {philosophy.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[30px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-yellow-500/30"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                <Icon
                  size={30}
                  className="text-yellow-400"
                  aria-hidden="true"
                />

              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {item.description}
              </p>

            </motion.article>
          );
        })}

      </div>

      <div className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10">

        <div className="flex flex-col items-center text-center">

          <ArrowRight
            size={42}
            className="text-yellow-400"
            aria-hidden="true"
          />

          <h3 className="mt-6 text-3xl font-bold text-white">
            Different Ground Conditions Require Different Solutions
          </h3>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">
            Water well drilling, hard-rock DTH drilling, rotary
            drilling, piling, core exploration and workover
            operations involve different technical requirements.
            Machine selection should reflect those differences.
          </p>

        </div>

      </div>

    </section>
  );
}