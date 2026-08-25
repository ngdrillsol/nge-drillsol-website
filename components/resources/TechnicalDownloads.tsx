"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  ArrowRight,
} from "lucide-react";

import { downloadResources } from "./resources.data";

export default function TechnicalDownloads() {
  return (
    <section className="space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Technical Downloads
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Product Catalogs &
          <span className="block text-yellow-400">
            Engineering Documents
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Download catalogs, brochures and technical documentation to
          better understand our drilling rigs, drilling equipment and
          engineering capabilities.
        </p>

      </div>

      {/* Download Cards */}

      <div className="grid gap-8 lg:grid-cols-2">

        {downloadResources.map((resource, index) => (

          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className="rounded-[30px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-yellow-500/30"
          >

            <div className="flex items-start justify-between gap-6">

              <div className="flex items-start gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <FileText
                    size={30}
                    className="text-yellow-400"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    {resource.title}
                  </h3>

                  <div className="mt-4 flex gap-3">

                    <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300">
                      {resource.type}
                    </span>

                    <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
                      {resource.size}
                    </span>

                  </div>

                </div>

              </div>

              <Link
                href={resource.href}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-black transition hover:scale-110"
              >

                <Download size={22} />

              </Link>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Bottom CTA */}

      <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-10">

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          <div>

            <h3 className="text-3xl font-bold text-white">
              Need Complete Technical Specifications?
            </h3>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Contact our engineering team for detailed specifications,
              GA drawings, hydraulic schematics and customized machine
              configurations.
            </p>

          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Request Documents

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}