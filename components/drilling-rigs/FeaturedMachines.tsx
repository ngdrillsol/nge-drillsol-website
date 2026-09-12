"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Mountain, Layers3 } from "lucide-react";

const featuredMachines = [
  {
    name: "NGDR3000",
    subtitle: "Ultra Heavy Duty Water Well Drilling Rig",
    image: "/images/rigs/ngdr3000/1.png",
    depth: "Up to 1500 m",
    diameter: "Up to 1500 mm",
    application: "Deep Water Wells",
    href: "/drilling-rigs/water-well-drilling-rigs/ngdr3000",
  },
  {
    name: "NGDR2000",
    subtitle: "Premium Rotary Water Well Rig",
    image: "/images/rigs/ngdr2000/1.png",
    depth: "Up to 1000 m",
    diameter: "Large Diameter",
    application: "Municipal Water Supply",
    href: "/drilling-rigs/water-well-drilling-rigs/ngdr2000",
  },
  {
    name: "NGWR3100",
    subtitle: "Heavy Duty Workover Rig",
    image: "/images/rigs/ngwr3100/1.png",
    depth: "up to 2000m",
    diameter: "Well Servicing",
    application: "Workover",
    href: "/drilling-rigs/workover-rigs/ngwr3100",
  },
  {
    name: "NGDTH600R",
    subtitle: "High Performance DTH Rig",
    image:"/images/rigs/ngdth600/1.png",
    depth: "Up to 600 m",
    diameter: "Hard Rock",
    application: "DTH Drilling",
    href: "/drilling-rigs/dth-drilling-rigs/ngdth600r",
  },
];

export default function FeaturedMachines() {
  return (
    <section className="space-y-12">

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Featured Machines
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Engineering Excellence
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Explore our flagship drilling rigs trusted across Africa,
          the Middle East and international infrastructure projects.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {featuredMachines.map((machine, index) => (

          <motion.div
            key={machine.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-[#090909]"
          >

            <div className="relative h-[320px]">

              <Image
                src={machine.image}
                alt={machine.name}
                fill
                className="object-contain p-10 transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            </div>

            <div className="space-y-6 p-8">

              <div>

                <h3 className="text-3xl font-bold text-white">
                  {machine.name}
                </h3>

                <p className="mt-3 text-slate-400">
                  {machine.subtitle}
                </p>

              </div>

              <div className="grid grid-cols-3 gap-4">

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                  <Gauge className="mb-3 text-yellow-400" size={20} />

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Depth
                  </p>

                  <p className="mt-2 text-white">
                    {machine.depth}
                  </p>

                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                  <Layers3 className="mb-3 text-yellow-400" size={20} />

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Diameter
                  </p>

                  <p className="mt-2 text-white">
                    {machine.diameter}
                  </p>

                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">

                  <Mountain className="mb-3 text-yellow-400" size={20} />

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Best For
                  </p>

                  <p className="mt-2 text-white">
                    {machine.application}
                  </p>

                </div>

              </div>

              <Link
                href={machine.href}
                className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                View Machine

                <ArrowRight size={18} />

              </Link>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
