"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bell,
  BookOpen,
  Globe2,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-8 py-20 lg:px-16">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <div className="text-center">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Engineering Knowledge Network
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white xl:text-6xl">
            Never Miss
            <span className="block text-yellow-400">
              New Engineering Insights
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            Receive practical drilling guides, geology updates,
            machine launches, engineering case studies and technical
            resources directly from the NGE DRILLSOL engineering team.
          </p>

        </div>

        {/* Benefits */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <BookOpen
              size={40}
              className="mx-auto text-yellow-400"
            />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Technical Articles
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Practical engineering knowledge and drilling guides.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <Globe2
              size={40}
              className="mx-auto text-yellow-400"
            />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Country Geology
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              New geology studies and regional drilling recommendations.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <Bell
              size={40}
              className="mx-auto text-yellow-400"
            />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Product Updates
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              New drilling rigs, project case studies and engineering innovations.
            </p>

          </div>

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-5"
        >

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            <Mail size={18} />

            Subscribe for Updates
          </Link>

          <Link
            href="/resources"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30 hover:bg-white/10"
          >
            Explore Knowledge Center

            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>

    </section>
  );
}