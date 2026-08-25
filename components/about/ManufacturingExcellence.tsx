"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Cog,
  ClipboardCheck,
  Wrench,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: Cog,
    title: "Engineering & Design",
    description:
      "Every drilling rig is designed with attention to structural strength, hydraulic efficiency, operational reliability and ease of maintenance.",
  },
  {
    icon: Factory,
    title: "Precision Manufacturing",
    description:
      "Modern manufacturing practices and quality-focused processes ensure every machine is built to deliver dependable field performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description:
      "Each machine undergoes inspection and functional verification before delivery to help ensure dependable operation in demanding environments.",
  },
  {
    icon: Wrench,
    title: "Continuous Improvement",
    description:
      "Customer feedback and field experience are continuously incorporated into our engineering and product development process.",
  },
];

export default function ManufacturingExcellence() {
  return (
    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Manufacturing Excellence
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Designed With Precision.
          <span className="block text-yellow-400">
            Built For Reliability.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          From engineering and fabrication to inspection and testing,
          every stage of our manufacturing process is focused on producing
          dependable drilling equipment for demanding field conditions.
        </p>

      </div>

      {/* Main Layout */}

      <div className="grid items-center gap-14 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-[#111827] to-[#090909] p-10"
        >

          <Factory
            size={54}
            className="text-yellow-400"
          />

          <h3 className="mt-8 text-4xl font-bold text-white">
            Manufacturing Philosophy
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Manufacturing is more than fabrication. It is the process of
            transforming engineering concepts into dependable drilling
            equipment capable of performing in real-world operating
            conditions.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Our focus remains on build quality, engineering precision,
            serviceability and long-term reliability rather than simply
            increasing production volume.
          </p>

        </motion.div>

        {/* Right */}

        <div className="grid gap-6">

          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-[#090909] p-7 transition hover:border-yellow-500/30"
              >

                <div className="flex gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                    <Icon
                      size={30}
                      className="text-yellow-400"
                    />

                  </div>

                  <div>

                    <h4 className="text-2xl font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-4 leading-8 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

      {/* Bottom Statement */}

      <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-10">

        <div className="flex flex-col items-center text-center">

          <ArrowRight
            size={42}
            className="text-yellow-400"
          />

          <h3 className="mt-6 text-3xl font-bold text-white">
            Engineering Quality Is Built Into Every Machine
          </h3>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">
            Every drilling rig reflects our commitment to engineering
            precision, practical performance and dependable operation,
            helping customers work confidently across a wide range of
            drilling applications.
          </p>

        </div>

      </div>

    </section>
  );
}