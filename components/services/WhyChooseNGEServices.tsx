"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Users,
  Globe2,
  Wrench,
  ShieldCheck,
  Cog,
} from "lucide-react";

const reasons = [
  {
    icon: Settings,
    title: "Engineering-First Approach",
    description:
      "Every recommendation begins with understanding your geology, drilling objectives, operational requirements and project constraints before selecting equipment.",
  },
  {
    icon: Cog,
    title: "Customized Solutions",
    description:
      "Drilling rigs can be configured for drilling depth, bore diameter, rotary torque, hydraulic systems, mast design and mounting platform to match your application.",
  },
  {
    icon: Globe2,
    title: "International Project Experience",
    description:
      "Experience across Africa, the Middle East and Asia enables us to recommend reliable drilling solutions for a wide range of geological conditions.",
  },
  {
    icon: Users,
    title: "Dedicated Engineering Team",
    description:
      "Our engineers assist throughout the project lifecycle, from consultation and equipment selection to commissioning and ongoing technical guidance.",
  },
  {
    icon: Wrench,
    title: "Complete Drilling Support",
    description:
      "Beyond manufacturing, we supply spare parts, drilling accessories, maintenance guidance and engineering assistance to keep your operation running efficiently.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Partnership",
    description:
      "Our commitment extends well beyond machine delivery through responsive after-sales support, operator training and continued technical assistance.",
  },
];

export default function WhyChooseNGEServices() {
  return (
    <section className="space-y-10 md:space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Why Choose NGE Services
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          More Than Equipment.
          <span className="block text-yellow-400">
            Complete Engineering Partnership.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          We combine engineering expertise, manufacturing capability and
          long-term technical support to help customers achieve reliable,
          efficient and productive drilling operations.
        </p>

      </div>

      {/* Cards */}

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-8 md:grid-cols-2 md:overflow-visible xl:grid-cols-3">

        {reasons.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="w-[84vw] max-w-[340px] shrink-0 snap-start rounded-[30px] border border-white/10 bg-[#090909] p-6 transition-all duration-300 hover:border-yellow-500/30 md:w-auto md:max-w-none md:p-8"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                <Icon size={30} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          );
        })}

      </div>

      {/* Bottom Banner */}

      <div className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10">

        <h3 className="text-center text-3xl font-bold text-white">
          Engineering Support That Continues After Delivery
        </h3>

        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-9 text-slate-300">
          Our relationship with customers doesn't end when a drilling rig
          leaves the factory. From installation and commissioning to spare
          parts, maintenance and technical assistance, NGE DRILLSOL remains
          your engineering partner throughout the life of your equipment.
        </p>

      </div>

    </section>
  );
}
