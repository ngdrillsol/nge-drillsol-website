"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Globe2,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-8 py-20 lg:px-16">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Contact NGE DRILLSOL
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-5xl font-bold leading-tight text-white xl:text-7xl"
          >
            Let's Build Your
            <span className="block text-yellow-400">
              Next Drilling
            </span>
            <span className="block">
              Solution Together.
            </span>
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            Whether you're planning a water well drilling project,
            mining operation, piling work or require customized
            engineering support, our team is ready to help you
            choose the right solution.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="#inquiry-form"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Send Inquiry

              <ArrowRight size={18} />
            </Link>

            <Link
              href="https://wa.me/919106360907"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30"
            >
              <MessageCircle size={18} />

              WhatsApp
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <Phone
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Speak With Our Engineers
                </h3>

                <p className="mt-2 text-slate-400">
                  Get technical guidance for selecting the right drilling
                  rig and engineering solution.
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <Mail
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Request a Quotation
                </h3>

                <p className="mt-2 text-slate-400">
                  Share your project requirements and receive a tailored
                  technical proposal from our team.
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <Globe2
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  International Support
                </h3>

                <p className="mt-2 text-slate-400">
                  Export documentation, logistics assistance and
                  engineering support for customers worldwide.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}