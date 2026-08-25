"use client";

import { motion } from "framer-motion";
import {
  Download,
  FileText,
  ExternalLink,
  FolderOpen,
  ArrowDownToLine,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigDownloadsProps {
  rig: RigData;
}

export default function RigDownloads({
  rig,
}: RigDownloadsProps) {
  const downloads = rig.downloads || [];

  if (!downloads.length) {
    return null;
  }

  return (
    <section
      id="downloads"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="max-w-4xl">

        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
          <FolderOpen size={14} />
          Resources
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Technical
          <span className="text-yellow-400">
            {" "}Downloads
          </span>
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          Access available technical documents and product resources
          for the {rig.model}.
        </p>

      </div>

      {/* =====================================================
          DOWNLOAD GRID
      ===================================================== */}

      <div className="grid gap-5 md:grid-cols-2">

        {downloads.map((download, index) => (

          <motion.article
            key={`${download.title}-${index}`}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090C11] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 sm:p-8"
          >

            {/* Decorative glow */}

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

            {/* =================================================
                TOP
            ================================================= */}

            <div className="relative flex items-start justify-between gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">

                <FileText
                  size={25}
                  className="text-yellow-400"
                />

              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                Technical Document
              </span>

            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h3 className="relative mt-7 text-xl font-bold leading-8 text-white">
              {download.title}
            </h3>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            {download.description && (
              <p className="relative mt-3 text-sm leading-7 text-slate-400">
                {download.description}
              </p>
            )}

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="relative mt-7 flex flex-wrap gap-3">

              <a
                href={download.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
              >
                <ArrowDownToLine size={17} />

                Open Document
              </a>

              <a
                href={download.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
              >
                <ExternalLink size={16} />

                View
              </a>

            </div>

          </motion.article>

        ))}

      </div>

      {/* =====================================================
          DOCUMENT NOTE
      ===================================================== */}

      <div className="rounded-[28px] border border-white/10 bg-white/[0.025] px-7 py-6 sm:px-9">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">

            <Download
              size={20}
              className="text-yellow-400"
            />

          </div>

          <div>

            <p className="font-semibold text-white">
              Document availability
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Technical documents are provided according to the
              applicable machine configuration and project
              requirements. Contact NGE DRILLSOL if you need a
              complete technical package for evaluation.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}