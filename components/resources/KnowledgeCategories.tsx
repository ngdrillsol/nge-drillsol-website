"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { knowledgeCategories } from "./resources.data";

export default function KnowledgeCategories() {
  return (
    <section
      id="knowledge-categories"
      className="space-y-14"
    >
      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Knowledge Categories
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Explore Engineering
          <span className="block text-yellow-400">
            Knowledge by Category
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Browse technical articles, drilling guides, geology references,
          equipment selection resources and engineering documentation
          organized by topic.
        </p>

      </div>

      {/* Categories */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {knowledgeCategories.map((category, index) => (

          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >

            <Link
              href={category.href}
              className="group flex h-full flex-col rounded-[30px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-yellow-500/30"
            >

              {/* Icon */}

              <div className="text-5xl">
                {category.icon}
              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold text-white">
                {category.title}
              </h3>

              {/* Description */}

              <p className="mt-5 flex-1 leading-8 text-slate-400">
                {category.description}
              </p>

              {/* Article Count */}

              <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">

                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                  Knowledge Base
                </p>

                <p className="mt-2 text-xl font-semibold text-white">
                  {category.articles}+ Articles
                </p>

              </div>

              {/* CTA */}

              <div className="mt-8 flex items-center justify-between">

                <span className="font-semibold text-yellow-400">
                  Explore Category
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
