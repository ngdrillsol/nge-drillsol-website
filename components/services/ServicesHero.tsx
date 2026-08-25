"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Settings,
  Users,
  Wrench,
} from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-8 py-20 lg:px-16">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Engineering Services
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-5xl font-bold leading-tight text-white xl:text-7xl"
          >
            Beyond Manufacturing.
            <span className="block text-yellow-400">
              Engineering Partnership.
            </span>
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            From engineering consultation and rig customization to
            installation, commissioning and lifetime technical support,
            NGE DRILLSOL delivers complete drilling solutions tailored
            to your project's requirements.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="#services-grid"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Explore Services

              <ArrowRight size={18} />

            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30"
            >
              Talk to Our Engineers
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <Settings
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Customized Engineering
                </h3>

                <p className="mt-2 text-slate-400">
                  Every drilling rig is configured according to
                  geology, drilling depth, application and
                  operational requirements.
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <Users
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Engineering Consultation
                </h3>

                <p className="mt-2 text-slate-400">
                  Our specialists help identify the most suitable
                  drilling method, equipment and accessories for
                  your project.
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <Wrench
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Lifetime Technical Support
                </h3>

                <p className="mt-2 text-slate-400">
                  From installation and operator training to
                  spare parts and troubleshooting, we support
                  your drilling operations long after delivery.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}