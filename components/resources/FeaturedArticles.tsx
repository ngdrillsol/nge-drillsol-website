"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

import { featuredArticles } from "./resources.data";

export default function FeaturedArticles() {
  return (
    <section className="space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Featured Articles
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Learn From
          <span className="block text-yellow-400">
            Engineering Experts
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Explore practical engineering articles covering drilling
          methods, geological formations, equipment selection and
          real-world drilling applications.
        </p>

      </div>

      {/* Articles */}

      <div className="grid gap-8 lg:grid-cols-2">

        {featuredArticles.map((article, index) => (

          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >

            <Link
              href={article.href}
              className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] transition-all duration-300 hover:border-yellow-500/30"
            >

              {/* Image Placeholder */}

              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-[#1A1A1A] via-[#101010] to-[#070707]">

                <span className="text-center text-lg font-semibold text-slate-500">
                  Featured Article Image
                  <br />
                  1600 × 900
                </span>

              </div>

              {/* Content */}

              <div className="flex flex-1 flex-col p-8">

                <div className="flex items-center justify-between">

                  <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-yellow-400">
                    {article.category}
                  </span>

                  <div className="flex items-center gap-2 text-sm text-slate-400">

                    <Clock size={16} />

                    {article.readTime}

                  </div>

                </div>

                <h3 className="mt-6 text-3xl font-bold text-white transition-colors group-hover:text-yellow-400">
                  {article.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-slate-400">
                  {article.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="font-semibold text-yellow-400">
                    Read Article
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black transition-transform duration-300 group-hover:translate-x-1">

                    <ArrowRight size={20} />

                  </div>

                </div>

              </div>

            </Link>

          </motion.article>

        ))}

      </div>

      {/* Bottom CTA */}

      <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-10 text-center">

        <h3 className="text-3xl font-bold text-white">
          Hundreds of Engineering Resources Coming Soon
        </h3>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-slate-300">
          We're building one of the industry's most comprehensive drilling
          knowledge libraries, covering geology, drilling methods,
          equipment selection, project case studies and practical field
          engineering for professionals worldwide.
        </p>

      </div>

    </section>
  );
}