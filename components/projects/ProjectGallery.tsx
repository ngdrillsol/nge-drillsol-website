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
    image: "/images/projects/adani/adani-2.png",
    title: "Adani Green Hydrogen Project",
    location: "Suigam, Gujarat",
    machine: "NGDR1500",
    application: "Groundwater Investigation",
  },
  {
    image: "/images/projects/adani/adani-3.png",
    title: "Khavda Renewable Energy Park",
    location: "Khavda, Gujarat",
    machine: "NGDP Series",
    application: "Solar Foundation",
  },
  {
    image: "/images/projects/adani/adani-4.png",
    title: "Deep Water Well Project",
    location: "India",
    machine: "NGDR2000",
    application: "Water Supply",
  },
  {
    image: "/images/projects/adani/adani-5.png",
    title: "Hard Rock Drilling",
    location: "Project Site",
    machine: "NGDTH600R",
    application: "Hard Rock Drilling",
  },
  {
    image: "/images/projects/adani/adani-6.png",
    title: "Infrastructure Project",
    location: "Construction Site",
    machine: "NGDP30",
    application: "Foundation Drilling",
  },
  {
    image: "/images/projects/adani/adani-7.png",
    title: "Exploration Project",
    location: "Field Location",
    machine: "NGCORE100",
    application: "Core Drilling",
  },
];

export default function ProjectGallery() {
  return (
    <section className="space-y-10 md:space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Project Gallery
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Engineering In The Field
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Explore our projects through real site photographs showcasing
          drilling rigs, field conditions and engineering execution.
        </p>

      </div>

      {/* Gallery */}

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-8 md:grid-cols-2 md:overflow-visible xl:grid-cols-3">

        {gallery.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="group w-[84vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[30px] border border-white/10 bg-[#090909] md:w-auto md:max-w-none"
          >

            {/* Image */}

            <div className="relative h-60 overflow-hidden md:h-72">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            </div>

            {/* Content */}

            <div className="space-y-5 p-6 md:p-7">

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
