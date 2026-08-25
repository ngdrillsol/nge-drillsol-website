"use client";

import Image from "next/image";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import TrustHeader from "./TrustHeader";

const certificates = [
  {
    name: "ISO Certified",
    image: "/images/certificates/iso.png",
    description:
      "Quality management systems designed for consistent engineering and manufacturing excellence.",
  },
  {
    name: "CE Certification",
    image: "/images/certificates/ce.png",
    description:
      "Products designed to meet international compliance and safety requirements for global markets.",
  },
  {
    name: "Startup India",
    image: "/images/certificates/startup-india.png",
    description:
      "Recognized by the Government of India for innovation, technology and manufacturing excellence.",
  },
  {
    name: "Make in India",
    image: "/images/certificates/make-in-india.png",
    description:
      "Supporting India's manufacturing initiative through world-class drilling equipment and engineering.",
  },
  {
    name: "MSME Registered",
    image: "/images/certificates/msme.png",
    description:
      "Registered manufacturing enterprise committed to quality production and customer satisfaction.",
  },
  {
    name: "Export Quality",
    image: "/images/certificates/export-quality.png",
    description:
      "Every drilling rig is engineered, inspected and prepared for demanding international operating conditions.",
  },
];

export default function TrustSection() {
  return (
    <Section
      id="trust"
      className="relative overflow-hidden bg-[#05070B]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[180px]" />
      </div>

      <Container className="relative z-10">

        {/* Header */}
        <TrustHeader />

        {/* Certificate Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {certificates.map((certificate) => (
            <div
              key={certificate.name}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] transition-all duration-300 hover:border-yellow-500/30 hover:bg-white/[0.05]"
            >

              {/* Certificate Image */}
              <div className="relative flex h-[230px] items-center justify-center overflow-hidden border-b border-white/10 bg-white/[0.025] p-6">

                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  width={500}
                  height={300}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />

              </div>

              {/* Certificate Content */}
              <div className="p-7">

                <h3 className="text-xl font-bold text-white">
                  {certificate.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {certificate.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-20 max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.03] px-10 py-12 text-center">

          <h3 className="text-3xl font-bold text-white">
            Engineering Confidence for Every Project
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            From engineering design and precision manufacturing to global
            delivery and after-sales support, every NGE Drillsol solution is
            developed with a commitment to quality, reliability and long-term
            customer success.
          </p>

        </div>

      </Container>
    </Section>
  );
}