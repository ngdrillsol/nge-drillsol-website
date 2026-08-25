"use client";

import { motion } from "framer-motion";
import {
  Play,
  Video,
  ExternalLink,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigVideosProps {
  rig: RigData;
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    if (
      parsedUrl.hostname.includes("youtube.com") ||
      parsedUrl.hostname.includes("www.youtube-nocookie.com")
    ) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      const embedMatch =
        parsedUrl.pathname.match(/\/embed\/([^/]+)/);

      if (embedMatch?.[1]) {
        return `https://www.youtube.com/embed/${embedMatch[1]}`;
      }
    }
  } catch {
    return null;
  }

  return null;
}

export default function RigVideos({
  rig,
}: RigVideosProps) {
  const videos = rig.videos || [];

  if (!videos.length) {
    return null;
  }

  return (
    <section
      id="videos"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
          <Video size={14} />
          Machine Videos
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
          See the{" "}
          <span className="text-yellow-400">
            {rig.model}
          </span>{" "}
          in Action
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          Watch available videos showing the machine, its operation
          and relevant drilling applications.
        </p>

      </div>

      {/* =====================================================
          VIDEO GRID
      ===================================================== */}

      <div className="grid gap-7 lg:grid-cols-2">

        {videos.map((video, index) => {

          const embedUrl = getYouTubeEmbedUrl(video.url);

          return (
            <motion.article
              key={`${video.url}-${index}`}
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
              className="overflow-hidden rounded-[30px] border border-white/10 bg-[#090C11]"
            >

              {/* =================================================
                  VIDEO PLAYER
              ================================================= */}

              <div className="relative aspect-video bg-black">

                {embedUrl ? (

                  <iframe
                    src={embedUrl}
                    title={video.title}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />

                ) : video.thumbnail ? (

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block h-full w-full"
                  >

                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/25" />

                    <div className="absolute inset-0 flex items-center justify-center">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-black shadow-2xl transition duration-300 group-hover:scale-110">

                        <Play
                          size={25}
                          fill="currentColor"
                        />

                      </div>

                    </div>

                  </a>

                ) : (

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#111827] to-[#05070B] px-6 text-center"
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10 transition group-hover:bg-yellow-500/20">

                      <Play
                        size={25}
                        className="text-yellow-400"
                        fill="currentColor"
                      />

                    </div>

                    <p className="mt-5 font-semibold text-white">
                      Watch Video
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Open video in a new window
                    </p>

                  </a>

                )}

              </div>

              {/* =================================================
                  VIDEO INFO
              ================================================= */}

              <div className="p-7">

                <div className="flex items-start justify-between gap-5">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Video {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-xl font-bold leading-8 text-white">
                      {video.title}
                    </h3>

                  </div>

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${video.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-yellow-500/30 hover:text-yellow-400"
                  >

                    <ExternalLink size={17} />

                  </a>

                </div>

              </div>

            </motion.article>
          );
        })}

      </div>

      {/* =====================================================
          VIDEO NOTE
      ===================================================== */}

      <div className="rounded-[28px] border border-white/10 bg-white/[0.025] px-7 py-6 sm:px-9">

        <p className="text-sm leading-7 text-slate-400">

          <span className="font-semibold text-slate-200">
            Video availability:
          </span>{" "}
          Machine videos will be added as verified NGE DRILLSOL
          product and project footage becomes available.

        </p>

      </div>

    </section>
  );
}