"use client";

import { motion } from "framer-motion";

import Heading from "@/components/ui/heading";

export default function ProjectsHeader() {
  return (
    <motion.div
    
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative mx-auto max-w-4xl pt-2 pb-8 text-center"
>
    {/* Background Blend */}
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />
  <div className="absolute right-0 top-10 h-[320px] w-[320px] rounded-full bg-amber-400/10 blur-[120px]" />
  <div className="absolute left-0 top-20 h-[260px] w-[260px] rounded-full bg-blue-500/8 blur-[110px]" />
</div>
      <Heading
        subtitle="ENGINEERING CASE STUDIES"
        title="Projects That Define Performance"
        align="center"
      />

      <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-400">
        Every drilling project tells a story of engineering precision,
        operational reliability, and field-proven performance. Explore how
        NGE DRILLSOL delivers dependable drilling solutions in some of the
        most demanding geological environments.
      </p>
    </motion.div>
  );
}