"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Images,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigGalleryProps {
  rig: RigData;
}

export default function RigGallery({
  rig,
}: RigGalleryProps) {
  const images = rig.gallery?.length
    ? rig.gallery
    : [
        {
          src: rig.heroImage,
          alt: rig.model,
        },
      ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeImage = images[activeIndex];

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="min-w-0 space-y-8 sm:space-y-12">

      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            <Images size={14} />
            Machine Gallery
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            {rig.model}
            <span className="text-yellow-400"> in Detail</span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Explore the machine configuration, engineering details and
            overall design of the {rig.model}.
          </p>

        </div>

        <div className="text-sm text-slate-500">
          {activeIndex + 1} / {images.length}
        </div>

      </div>

      {/* =====================================================
          MAIN GALLERY
      ===================================================== */}

      <div className="grid gap-5 lg:grid-cols-[1fr_180px]">

        {/* Main Image */}

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090C11]">

          <div className="relative aspect-[4/3] sm:aspect-[16/10]">

            <AnimatePresence mode="wait">

              <motion.img
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                initial={{
                  opacity: 0,
                  scale: 1.02,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="absolute inset-0 h-full w-full object-contain p-6 sm:p-10"
              />

            </AnimatePresence>

            {/* Gradient */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Previous */}

            {images.length > 1 && (
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:border-yellow-500/40 hover:bg-black/80 hover:text-yellow-400 sm:left-5 sm:h-12 sm:w-12"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Next */}

            {images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:border-yellow-500/40 hover:bg-black/80 hover:text-yellow-400 sm:right-5 sm:h-12 sm:w-12"
              >
                <ChevronRight size={22} />
              </button>
            )}

            {/* Fullscreen */}

            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              aria-label="Open image fullscreen"
              className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:border-yellow-500/40 hover:text-yellow-400 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
            >
              <Maximize2 size={18} />
            </button>

          </div>

        </div>

        {/* ===================================================
            THUMBNAILS
        =================================================== */}

        <div className="flex max-w-full gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-y-auto lg:pb-0">

          {images.map((image, index) => {

            const isActive = index === activeIndex;

            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1}`}
                className={`relative min-w-[110px] overflow-hidden rounded-2xl border transition lg:min-h-[95px] ${
                  isActive
                    ? "border-yellow-400 ring-1 ring-yellow-400/40"
                    : "border-white/10 hover:border-white/30"
                }`}
              >

                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />

                <div
                  className={`absolute inset-0 transition ${
                    isActive
                      ? "bg-yellow-400/5"
                      : "bg-black/20 hover:bg-black/0"
                  }`}
                />

              </button>
            );

          })}

        </div>

      </div>

      {/* =====================================================
          FULLSCREEN MODAL
      ===================================================== */}

      <AnimatePresence>

        {isFullscreen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-2 backdrop-blur-xl sm:p-5"
            onClick={() => setIsFullscreen(false)}
          >

            <button
              type="button"
              aria-label="Close fullscreen image"
              onClick={() => setIsFullscreen(false)}
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-2xl text-white transition hover:bg-white/20"
            >
              ×
            </button>

            <div
              className="relative flex h-full w-full items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >

              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[90vh] max-w-[92vw] object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous image"
                    className="absolute left-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}
