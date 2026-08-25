"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import InquiryHeader from "./InquiryHeader";
import InquiryActions from "./InquiryActions";

export default function InquirySection() {
  return (
    <Section
      id="inquiry"
      className="relative overflow-hidden bg-[#05070B]"
    >
      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      </div>

      <Container className="relative z-10">

        <InquiryHeader />

        <InquiryActions />

      </Container>

    </Section>
  );
}