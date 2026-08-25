"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { industries } from "./industries.data";

export default function IndustryGrid() {
  return (
    <section
      id="industries-grid"
      className="space-y-14"
    >
      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Industries
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Choose Your Industry
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Every industry has unique drilling challenges. Explore the
          industries we serve and discover the most suitable drilling
          solutions for your application.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {industries.map((industry, index) => (

          <motion.div
            key={industry.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >

            <Link
              href={industry.href}
              className="group block rounded-[32px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-yellow-500/30"
            >

              {/* Emoji */}

              <div className="text-5xl">
                {industry.icon}
              </div>

              {/* Title */}

              <h3 className="mt-6 text-3xl font-bold text-white">
                {industry.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-8 text-slate-400">
                {industry.description}
              </p>

              {/* Applications */}

              <div className="mt-8">

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400">
                  Applications
                </p>

                <div className="flex flex-wrap gap-2">

                  {industry.applications.slice(0, 3).map((item) => (

                    <span
                      key={item}
                      className="rounded-full bg-white/5 px-3 py-2 text-sm text-white"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

              {/* Recommended Rigs */}

              <div className="mt-8">

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400">
                  Recommended Rigs
                </p>

                <div className="flex flex-wrap gap-2">

                  {industry.recommendedRigs.slice(0, 3).map((rig) => (

                    <span
                      key={rig}
                      className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-2 text-sm text-yellow-300"
                    >
                      {rig}
                    </span>

                  ))}

                </div>

              </div>

              {/* CTA */}

              <div className="mt-10 flex items-center justify-between">

                <span className="font-semibold text-yellow-400">
                  Explore Industry
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black transition-transform duration-300 group-hover:translate-x-1">

                  <ArrowRight size={20} />

                </div>

              </div>

            </Link>

          </motion.div>

        ))}

      </div>

    </section>
  );
}