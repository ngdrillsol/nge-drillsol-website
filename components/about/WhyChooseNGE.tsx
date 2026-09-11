"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Wrench,
  Globe2,
  Settings,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Settings,
    title: "Project-Based Rig Selection",
    description:
      "Machine selection considers geology, required drilling depth, bore diameter, drilling method and operating requirements.",
  },
  {
    icon: Wrench,
    title: "Configurable Drilling Equipment",
    description:
      "Drilling platforms can be evaluated for different mounting, hydraulic, rotary, mast and supporting equipment requirements.",
  },
  {
    icon: Globe2,
    title: "Domestic & International Supply",
    description:
      "NGE Drillsol works with drilling equipment requirements for projects in India and international markets.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering & Manufacturing",
    description:
      "Machine development combines structural, mechanical and hydraulic systems with fabrication, assembly and inspection.",
  },
  {
    icon: Headphones,
    title: "Technical Communication",
    description:
      "Customers can discuss machine configuration, drilling requirements and equipment selection directly with the NGE Drillsol team.",
  },
  {
    icon: CheckCircle2,
    title: "Long-Term Equipment Support",
    description:
      "Our objective is to support customers beyond machine selection through continued technical and equipment-related communication.",
  },
];

export default function WhyChooseNGE() {
  return (
    <section
      className="space-y-16"
      aria-labelledby="why-nge-heading"
    >

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Why NGE Drillsol
        </span>

        <h2
          id="why-nge-heading"
          className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Drilling Equipment
          <span className="block text-yellow-400">
            Backed by Engineering
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          NGE Drillsol combines project evaluation, drilling rig
          engineering, manufacturing and technical communication
          to support customers selecting equipment for demanding
          drilling applications.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[30px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-yellow-500/30"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                <Icon
                  size={30}
                  className="text-yellow-400"
                  aria-hidden="true"
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {reason.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {reason.description}
              </p>

            </motion.article>
          );
        })}

      </div>

      <div className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-5 sm:rounded-[30px] sm:p-8 lg:rounded-[36px] lg:p-12">

        <div className="mx-auto max-w-5xl text-center">

          <h3 className="text-4xl font-bold text-white">
            Start With the Drilling Requirement
          </h3>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            Share the required depth, bore diameter, geology,
            drilling method and project location so the appropriate
            NGE Drillsol equipment can be evaluated.
          </p>

        </div>

      </div>

    </section>
  );
}