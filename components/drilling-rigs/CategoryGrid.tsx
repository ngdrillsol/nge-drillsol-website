"use client";

import { motion } from "framer-motion";

import { rigCategories } from "./drilling-rigs.data";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <section
      id="rig-categories"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Product Categories
          </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Find The Right Drilling Rig
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every drilling project is different.
            Explore our complete drilling rig portfolio
            based on your drilling method,
            application,
            geology
            and project requirements.
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
