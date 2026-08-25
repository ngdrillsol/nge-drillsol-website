"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { certifications } from "./trust.data";

export default function CertificationGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {certifications.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.08,
            duration: 0.5,
          }}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-yellow-500/20"
        >
          {/* Glow */}

          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

          <div className="relative z-10 p-8">

            {/* Logo */}

            <div className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">

              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="max-h-14 w-auto object-contain"
              />

            </div>

            {/* Title */}

            <h3 className="mt-8 text-xl font-bold text-white">
              {item.name}
            </h3>

            {/* Description */}

            <p className="mt-4 leading-7 text-slate-400">
              {item.description}
            </p>

          </div>
        </motion.div>
      ))}
    </div>
  );
}