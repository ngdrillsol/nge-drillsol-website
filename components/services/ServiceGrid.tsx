"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { services } from "./services.data";

export default function ServiceGrid() {
  return (
    <section
      id="services-grid"
      className="space-y-10 md:space-y-14"
    >
      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Our Services
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Complete Engineering
          <span className="block text-yellow-400">
            Support Services
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Our support extends beyond manufacturing. From project planning
          and rig customization to commissioning and long-term technical
          assistance, we help customers throughout the drilling project
          lifecycle.
        </p>

      </div>

      {/* Cards */}

      <div className="flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-8 md:grid-cols-2 md:overflow-visible xl:grid-cols-3">

        {services.map((service, index) => (

          <motion.div
            key={service.id}
            className="h-auto w-[84vw] max-w-[340px] shrink-0 snap-start md:h-full md:w-auto md:max-w-none"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >

            <Link
              href="/contact"
              className="group flex h-full min-h-0 flex-col rounded-[32px] border border-white/10 bg-[#090909] p-6 transition-all duration-300 hover:border-yellow-500/30 md:min-h-[620px] md:p-8"
            >

              {/* Emoji */}

              <div className="text-5xl">
                {service.icon}
              </div>

              {/* Title */}

              <h3 className="mt-6 text-3xl font-bold text-white">
                {service.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-8 text-slate-400">
                {service.description}
              </p>

              {/* Features */}

              <div className="mt-8">

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400">
                  Includes
                </p>

                <div className="flex flex-wrap gap-2">

                  {service.features.slice(0, 4).map((feature) => (

                    <span
                      key={feature}
                      className="rounded-full bg-white/5 px-3 py-2 text-sm text-white"
                    >
                      {feature}
                    </span>

                  ))}

                </div>

              </div>

              {/* Related Solutions */}

              <div className="mt-8">

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400">
                  Related Solutions
                </p>

                <div className="flex flex-wrap gap-2">

                  {service.relatedSolutions.slice(0, 3).map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-2 text-sm text-yellow-300"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

              {/* CTA */}

              <div className="mt-auto flex items-center justify-between pt-10">

                <span className="font-semibold text-yellow-400">
                  Contact Us
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
