"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Building2,
  Target,
  Wrench,
} from "lucide-react";

import { solutionCategories } from "./solutions.data";

const icons = {
  "🌍": Globe2,
  "🏗": Building2,
  "🎯": Target,
  "⚙": Wrench,
};

export default function SolutionCategories() {
  // Remove ONLY these four cards.
  // Everything else remains unchanged.
  const visibleCategories = solutionCategories.filter(
    (item) =>
      item.title !== "Select by Geology" &&
      item.title !== "Select by Application" &&
      item.title !== "Rig Recommendation" &&
      item.title !== "Drilling Method Guide"
  );

  return (
    <section className="space-y-12">

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Engineering Solutions
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Start with Your Project
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Whether you know your geology, your application, or simply need
          expert guidance, choose the path below and we'll help you find
          the right drilling solution.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {visibleCategories.map((item, index) => {

          const Icon =
            icons[item.icon as keyof typeof icons];

          return (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >

              <Link
                href={item.href}
                className="group block overflow-hidden rounded-[30px] border border-white/10 bg-[#090909] transition-all duration-300 hover:border-yellow-500/30"
              >

                <div className="p-8">

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                      <Icon
                        size={30}
                        className="text-yellow-400"
                      />

                    </div>

                    <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-yellow-400">
                      {item.badge}
                    </span>

                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.description}
                  </p>

                  {/* Suitable For */}

                  <div className="mt-8 flex flex-wrap gap-2">

                    {item.suitableFor.map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                  {/* Related Rigs */}

                  <div className="mt-8">

                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                      Related Rigs
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {item.relatedRigs.map((rig) => (

                        <span
                          key={rig}
                          className="rounded-full bg-white/5 px-3 py-2 text-sm text-white"
                        >
                          {rig}
                        </span>

                      ))}

                    </div>

                  </div>

                  <div className="mt-10 flex items-center justify-between">

                    <span className="font-semibold text-yellow-400">
                      Explore Solution
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black transition-transform duration-300 group-hover:translate-x-1">

                      <ArrowRight size={20} />

                    </div>

                  </div>

                </div>

              </Link>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}