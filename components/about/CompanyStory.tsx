"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Mountain,
  Globe2,
  Lightbulb,
} from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Our Story
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Built By Engineers.
          <span className="block text-yellow-400">
            Driven By Innovation.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Every drilling project presents unique geological and operational
          challenges. Our journey has always been centered around solving
          those challenges through practical engineering and dependable
          drilling solutions.
        </p>

      </div>

      {/* Story */}

      <div className="grid items-center gap-14 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-br from-[#111827] to-[#090909] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10"
        >

          <h3 className="text-4xl font-bold text-white">
            Our Journey
          </h3>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            NGE DRILLSOL was established with a clear objective:
            to engineer reliable drilling equipment that performs in
            demanding geological conditions.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Rather than manufacturing standard machines, we believe
            every drilling project deserves an engineering solution
            tailored to its geology, drilling depth, operational goals
            and field conditions.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Today, our drilling rigs support water well, DTH,
            rotary drilling, piling, core drilling and workover
            applications across domestic and international markets.
          </p>

        </motion.div>

        {/* Right */}

        <div className="grid gap-6">

          {[
            {
              icon: Factory,
              title: "Engineering Foundation",
              description:
                "Every machine begins with engineering, not production.",
            },
            {
              icon: Mountain,
              title: "Field Experience",
              description:
                "Solutions developed from real drilling conditions and customer feedback.",
            },
            {
              icon: Globe2,
              title: "Global Perspective",
              description:
                "Designed for challenging geological formations across international markets.",
            },
            {
              icon: Lightbulb,
              title: "Continuous Innovation",
              description:
                "We continuously improve our machines based on practical field experience and engineering research.",
            },
          ].map((item, index) => {
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

      {/* Quote */}

      <div className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10">

        <blockquote className="mx-auto max-w-4xl text-center text-2xl font-medium leading-10 text-white italic">
          "Our mission is not simply to manufacture drilling rigs.
          It is to engineer dependable drilling solutions that help
          customers succeed in some of the world's most demanding
          drilling environments."
        </blockquote>

      </div>

    </section>
  );
}
