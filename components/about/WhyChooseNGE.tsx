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
    title: "Engineering-Driven Solutions",
    description:
      "We recommend drilling solutions based on geology, drilling depth, bore diameter and project requirements—not just machine specifications.",
  },
  {
    icon: Wrench,
    title: "Customized Equipment",
    description:
      "Our drilling rigs can be configured to suit different applications, operational conditions and customer requirements.",
  },
  {
    icon: Globe2,
    title: "Export Experience",
    description:
      "Supporting customers across international markets with documentation, logistics coordination and engineering assistance.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Manufacturing",
    description:
      "Every drilling rig is built with a focus on structural strength, dependable hydraulics and long-term field reliability.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Our team assists customers from machine selection through commissioning, training and after-sales technical support.",
  },
  {
    icon: CheckCircle2,
    title: "Long-Term Partnership",
    description:
      "We aim to become an engineering partner for every customer by supporting projects throughout the equipment lifecycle.",
  },
];

export default function WhyChooseNGE() {
  return (
    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Why Choose NGE DRILLSOL
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          More Than A Manufacturer.
          <span className="block text-yellow-400">
            Your Engineering Partner.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          We combine engineering expertise, dependable manufacturing
          and customer-focused support to deliver drilling solutions
          that perform reliably in demanding environments.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <motion.div
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
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {reason.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {reason.description}
              </p>

            </motion.div>
          );
        })}

      </div>

      {/* Bottom Banner */}

      <div className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-5 sm:rounded-[30px] sm:p-8 lg:rounded-[36px] lg:p-12">

        <div className="mx-auto max-w-5xl text-center">

          <h3 className="text-4xl font-bold text-white">
            Engineering Confidence For Every Drilling Project
          </h3>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            Our objective is simple—deliver dependable drilling
            equipment backed by practical engineering, responsive
            support and long-term customer relationships that help
            every project succeed.
          </p>

        </div>

      </div>

    </section>
  );
}
