"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Droplets,
  Mountain,
  Leaf,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const results = [
  {
    icon: CheckCircle2,
    title: "Successful Project Execution",
    description:
      "Projects completed through proper engineering planning, equipment selection and field execution under demanding conditions.",
  },
  {
    icon: Droplets,
    title: "Groundwater Investigation",
    description:
      "Deep drilling operations successfully supported groundwater exploration and aquifer identification for large-scale developments.",
  },
  {
    icon: Mountain,
    title: "Difficult Geology Managed",
    description:
      "Reliable drilling performance achieved across soft formations, mixed strata and extremely hard rock environments.",
  },
  {
    icon: Leaf,
    title: "Supporting Renewable Energy",
    description:
      "Our drilling solutions contributed to major renewable energy and sustainable infrastructure developments.",
  },
];

export default function ProjectResults() {
  return (
    <section className="space-y-10 md:space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Project Results
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Engineering That
          <span className="block text-yellow-400">
            Delivers Results
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Every project strengthens our engineering capabilities and
          demonstrates our commitment to delivering reliable drilling
          solutions under real-world field conditions.
        </p>

      </div>

      {/* Result Cards */}

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-8 md:grid-cols-2 md:overflow-visible">

        {results.map((item, index) => {
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

      {/* Closing Statement */}

      <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-r from-[#0F172A] via-[#111827] to-[#0F172A] p-10">

        <div className="flex flex-col items-center text-center">

          <Award
            size={42}
            className="mb-6 text-yellow-400"
          />

          <h3 className="text-3xl font-bold text-white">
            Proven Performance Through Engineering
          </h3>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Every completed project adds to our engineering knowledge,
            enabling us to design better drilling rigs and deliver more
            effective solutions for future customers worldwide.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Discuss Your Project

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}
