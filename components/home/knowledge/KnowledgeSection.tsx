"use client";

import Link from "next/link";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import KnowledgeHeader from "./KnowledgeHeader";
import KnowledgeCard from "./KnowledgeCard";
import { knowledgeCategories } from "./knowledge.data";

export default function KnowledgeSection() {
  return (
    <Section
      id="knowledge-center"
      className="relative overflow-hidden bg-[#05070B]"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[180px]" />
      </div>

      <Container className="relative z-10">
        <KnowledgeHeader />

        {/* Categories */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {knowledgeCategories.map((category) => (
            <KnowledgeCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white">
            Continue Learning
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Browse our complete engineering knowledge library featuring
            drilling guides, geology reports, field case studies and
            technical resources.
          </p>

          <Link
            href="/resources"
            className="mt-8 inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-8 py-4 font-semibold text-yellow-300 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
          >
            View Knowledge Center
          </Link>
        </div>
      </Container>
    </Section>
  );
}