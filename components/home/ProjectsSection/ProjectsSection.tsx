"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import { projects } from "./project.data";

import ProjectsHeader from "./ProjectsHeader";
import FeaturedCaseStudy from "./FeaturedCaseStudy";
import EngineeringJourney from "./EngineeringJourney";

export default function ProjectsSection() {
  const project = projects[0];

  if (!project) return null;

  return (
    <Section
      id="projects"
      className="relative overflow-hidden bg-[#05070B]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-[220px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <Container className="relative z-10">

        {/* Section Header */}
        <ProjectsHeader />

        {/* Featured Adani Project */}
        <FeaturedCaseStudy project={project} />

        {/* Engineering Journey */}
        <EngineeringJourney project={project} />

      </Container>
    </Section>
  );
}