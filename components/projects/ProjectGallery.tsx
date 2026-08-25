"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Drill,
  Briefcase,
} from "lucide-react";

const gallery = [
  {
    image: "/images/projects/gallery/adani-01.jpg",
    title: "Adani Green Hydrogen Project",
    location: "Suigam, Gujarat",
    machine: "NGDR1500",
    application: "Groundwater Investigation",
  },
  {
    image: "/images/projects/gallery/adani-02.jpg",
    title: "Khavda Renewable Energy Park",
    location: "Khavda, Gujarat",
    machine: "NGDP Series",
    application: "Solar Foundation",
  },
  {
    image: "/images/projects/gallery/adani-03.jpg",
    title: "Deep Water Well Project",
    location: "India",
    machine: "NGDR2000",
    application: "Water Supply",
  },
  {
    image: "/images/projects/gallery/adani-04.jpg",
    title: "Hard Rock Drilling",
    location: "Project Site",
    machine: "NGDTH600R",
    application: "Hard Rock Drilling",
  },
  {
    image: "/images/projects/gallery/adani-05.jpg",
    title: "Infrastructure Project",
    location: "Construction Site",
    machine: "NGDP30",
    application: "Foundation Drilling",
  },
  {
    image: "/images/projects/gallery/adani-06.jpg",
    title: "Exploration Project",
    location: "Field Location",
    machine: "NGCORE100",
    application: "Core Drilling",
  },
];

export default function ProjectGallery() {
  return (
    <section className="space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Project Gallery
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Engineering In The Field
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Explore our projects through real site photographs showcasing
          drilling rigs, field conditions and engineering execution.
        </p>

      </div>

      {/* Gallery */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {gallery.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#090909]"
          >

            {/* Image */}

            <div className="relative h-72 overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            </div>

            {/* Content */}

            <div className="space-y-5 p-7">

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <div className="space-y-3">

                <div className="flex items-center gap-3 text-slate-300">

                  <MapPin
                    size={18}
                    className="text-yellow-400"
                  />

                  {item.location}

                </div>

                <div className="flex items-center gap-3 text-slate-300">

                  <Drill
                    size={18}
                    className="text-yellow-400"
                  />

                  {item.machine}

                </div>

                <div className="flex items-center gap-3 text-slate-300">

                  <Briefcase
                    size={18}
                    className="text-yellow-400"
                  />

                  {item.application}

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}