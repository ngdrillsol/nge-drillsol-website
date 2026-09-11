"use client";

import { motion } from "framer-motion";

import { rigCategories } from "./drilling-rigs.data";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <section
      id="rig-categories"
      className="py-24"
      aria-labelledby="drilling-rig-categories-heading"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Drilling Rig Categories
          </span>

          <h2
            id="drilling-rig-categories-heading"
            className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Choose a Drilling Rig by Method and Application
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Select from water well drilling rigs, DTH drilling rigs, rotary
            drilling rigs, piling rigs, core drilling rigs, workover rigs and
            tractor-mounted drilling equipment. The right machine depends on
            drilling depth, hole diameter, geology, drilling method and project
            application.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {rigCategories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}