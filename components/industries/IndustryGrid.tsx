"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { industries } from "./industries.data";

export default function IndustryGrid() {
  return (
    <section
      id="industries-grid"
      className="space-y-10 sm:space-y-12 lg:space-y-14"
    >
      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Industries
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Choose Your Industry
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Every industry has unique drilling challenges. Explore the
          industries we serve and discover the most suitable drilling
          solutions for your application.
        </p>

      </div>

      {/* Cards */}

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:pb-0 xl:grid-cols-3">

        {industries.map((industry, index) => (

          <motion.div
            key={industry.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="w-[86vw] max-w-[360px] shrink-0 snap-start lg:w-auto lg:max-w-none"
          >

            <Link
              href={industry.href}
              className="group block h-full rounded-[24px] border border-white/10 bg-[#090909] p-5 transition-all duration-300 hover:border-yellow-500/30 sm:p-6 lg:rounded-[32px] lg:p-8"
            >

              {/* Emoji */}

              <div className="text-4xl lg:text-5xl">
                {industry.icon}
              </div>

              {/* Title */}

              <h3 className="mt-5 text-2xl font-bold text-white lg:mt-6 lg:text-3xl">
                {industry.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7 lg:mt-5 lg:leading-8">
                {industry.description}
              </p>

              {/* Applications */}

              <div className="mt-5 lg:mt-8">

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

              <div className="mt-5 lg:mt-8">

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

              <div className="mt-6 flex items-center justify-between lg:mt-10">

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
