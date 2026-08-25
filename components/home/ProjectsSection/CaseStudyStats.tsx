"use client";

import {
  MapPin,
  Building2,
  Drill,
  Compass,
  Mountain,
  ArrowDownCircle,
} from "lucide-react";

import { ProjectData } from "./project.types";

interface CaseStudyStatsProps {
  project: ProjectData;
}

const stats = (project: ProjectData) => [
  {
    icon: MapPin,
    title: "Location",
    value: project.location,
  },
  {
    icon: Building2,
    title: "Client",
    value: project.client,
  },
  {
    icon: Compass,
    title: "Project",
    value: project.project,
  },
  {
    icon: Drill,
    title: "Rig Used",
    value: project.rig,
  },
  {
    icon: Mountain,
    title: "Method",
    value: project.method,
  },
  {
    icon: ArrowDownCircle,
    title: "Maximum Depth",
    value: project.depth,
  },
];

export default function CaseStudyStats({
  project,
}: CaseStudyStatsProps) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {stats(project).map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white/[0.05]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500/20">
              <Icon size={28} strokeWidth={1.8} />
            </div>

            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              {item.title}
            </p>

            <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
              {item.value}
            </h3>
          </div>
        );
      })}
    </div>
  );
}