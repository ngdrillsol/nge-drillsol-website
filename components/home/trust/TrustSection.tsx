"use client";

import Link from "next/link";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import TrustHeader from "./TrustHeader";
import CertificationGrid from "./CertificationGrid";

export default function TrustSection() {
  return (
    <Section
      id="trust"
      className="relative overflow-hidden bg-[#05070B] py-12 sm:py-16 lg:py-32"
    >

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[180px]" />

      </div>

      <Container className="relative z-10">

        {/* Header */}

        <TrustHeader />

        {/* Credentials */}

        <CertificationGrid />

        {/* Bottom Statement */}

        <div className="mx-auto mt-10 max-w-4xl rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-7 text-center sm:mt-14 sm:px-7 sm:py-9 lg:mt-20 lg:rounded-[32px] lg:px-10 lg:py-12">

          <h3 className="text-3xl font-bold text-white">
            Engineering and Manufacturing Support for Drilling Projects
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            From project evaluation and machine configuration to
            manufacturing, inspection, export preparation and
            after-sales support, NGE Drillsol works with drilling
            contractors and project teams throughout the equipment
            selection and supply process.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/about"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-yellow-500/40 hover:text-yellow-400"
            >
              About NGE Drillsol
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              Contact Our Team
            </Link>

          </div>

        </div>

      </Container>

    </Section>
  );
}