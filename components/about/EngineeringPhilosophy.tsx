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

    title: "Engineering Starts With Geology",

    description:

      "Every drilling project begins with understanding geological formations, drilling depth, bore diameter and project objectives before recommending equipment.",

  },

  {

    icon: Settings,

    title: "No Standard Machine Fits Every Project",

    description:

      "Instead of offering one-size-fits-all equipment, we configure drilling rigs to match each customer's operational requirements and drilling conditions.",

  },

  {

    icon: ShieldCheck,

    title: "Reliability Before Complexity",

    description:

      "We believe equipment should be dependable, serviceable and capable of operating in demanding environments with confidence.",

  },

  {

    icon: Lightbulb,

    title: "Continuous Engineering Improvement",

    description:

      "Customer feedback, field experience and ongoing engineering development help us continuously improve our drilling solutions.",

  },

];

export default function EngineeringPhilosophy() {

  return (

    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

          Engineering Philosophy

        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">

          We Don't Sell Machines.

          <span className="block text-yellow-400">

            We Engineer Solutions.

          </span>

        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

          Our engineering philosophy is based on solving drilling

          challenges—not simply manufacturing equipment. Every project

          deserves a solution designed around its technical requirements.

        </p>

      </div>

      {/* Philosophy Cards */}

      <div className="grid gap-8 md:grid-cols-2">

        {philosophy.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div

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

                />

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

      {/* Bottom Statement */}

      <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-10">

        <div className="flex flex-col items-center text-center">

          <ArrowRight

            size={42}

            className="text-yellow-400"

          />

          <h3 className="mt-6 text-3xl font-bold text-white">

            Every Project Is Different. Every Solution Should Be Too.

          </h3>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">

            Whether the challenge is deep water well drilling, hard rock

            formations, mining exploration, piling or workover operations,

            our engineering team focuses on recommending the right solution

            rather than simply supplying a machine.

          </p>

        </div>

      </div>

    </section>

  );

}