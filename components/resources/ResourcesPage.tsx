"use client";

import ResourcesHero from "./ResourcesHero";
import ResourceTopics from "./ResourceTopics";
import FeaturedArticles from "./FeaturedArticles";
import VideoLearning from "./VideoLearning";
import FAQSection from "./FAQSection";
import NewsletterCTA from "./NewsletterCTA";
import CTASection from "./CTASection";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-28 px-6 py-10 lg:px-8">

        {/* Hero */}

        <ResourcesHero />

        {/* Main Knowledge Topics */}

        <ResourceTopics />

        {/* Featured Articles */}

        <FeaturedArticles />

        {/* Video Learning */}

        <VideoLearning />

        {/* FAQs */}

        <FAQSection />

        {/* Newsletter */}

        <NewsletterCTA />

        {/* Final CTA */}

        <CTASection />

      </div>
    </main>
  );
}