"use client";

import ProjectsHero from "./ProjectsHero";
import FeaturedProjects from "./FeaturedProjects";
import ProjectTimeline from "./ProjectTimeline";
import EngineeringChallenges from "./EngineeringChallenges";
import ProjectGallery from "./ProjectGallery";
import ProjectResults from "./ProjectResults";
import EngineeringHighlights from "./EngineeringHighlights";
import CTASection from "./CTASection";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-10 lg:gap-28 lg:px-8">

        {/* Hero */}
        <ProjectsHero />

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* Project Timeline */}
        <ProjectTimeline />

        {/* Engineering Challenges */}
        <EngineeringChallenges />

        {/* Project Gallery */}
        <ProjectGallery />

        {/* Project Results */}
        <ProjectResults />

        {/* Engineering Highlights */}
        <EngineeringHighlights />

        {/* CTA */}
        <CTASection />

      </div>
    </main>
  );
}
