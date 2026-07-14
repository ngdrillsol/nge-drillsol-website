'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const projectImages = [
  '/images/adani/adani-1.png',
  '/images/adani/adani-2.png',
  '/images/adani/adani-3.png',
  '/images/adani/adani-4.png',
  '/images/adani/adani-5.png',
  '/images/adani/adani-6.png',
  '/images/adani/adani-7.png',
  '/images/adani/adani-8.png',
  '/images/adani/adani-9.png',
  '/images/adani/adani-10.png',
  '/images/adani/adani-11.png',
  '/images/adani/adani-12.png',
  '/images/adani/adani-13.png',
  '/images/adani/adani-14.png',
  '/images/adani/adani-15.png',
]

export default function AdaniProjectPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 border-b border-[#1a1a1a] bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

          <div className="mb-8">
            <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
              Featured Project
            </span>
          </div>

          <h1
            className="text-white mb-8 tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.02em',}}
>
            Adani Green Hydrogen Project
          </h1>

          <p className="text-gray-300 text-lg lg:text-xl max-w-4xl leading-relaxed">
            <span className="text-yellow-400"> NGE Drillsol Pvt. Ltd. successfully executed groundwater exploration and deep borewell drilling operations for one of India’s major Green Hydrogen infrastructure developments. The project involved large-scale drilling activities in challenging desert formations, requiring high-capacity rotary drilling systems, continuous operations, and precision execution under demanding site conditions.

The drilling program was designed to support long-term industrial water requirements for future green energy development. Operations included deep borewell construction, geological formation analysis, bore conditioning, casing installation, and groundwater targeting in remote locations.</span>
          </p>
        </div>
      </section>

     {/* Image Gallery */}
<section className="py-10 md:py-16">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      loop={projectImages.length > 1}
      navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={800}
      className="adani-project-swiper"
    >
      {projectImages.map((img, i) => (
        <SwiperSlide key={img}>
          <div className="relative w-full h-[50vh] min-h-[350px] md:h-[70vh] md:min-h-[500px] lg:h-[80vh] lg:max-h-[850px] bg-black overflow-hidden rounded-2xl">
            <Image
              src={img}
              alt={`Adani Green Hydrogen Project - Photo ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-contain"
              priority={i === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <p className="text-center text-gray-500 text-sm mt-5">
      Swipe or use the arrows to explore all {projectImages.length} project photos
    </p>

  </div>
</section>

      {/* Project Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8 text-yellow-400">
            Project Information
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-[#111] border border-[#222] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Project Overview
              </h3>

              <p className="text-gray-400 leading-8">
                NGE Drillsol successfully executed groundwater exploration,
                deep borewell drilling, piezometer well installation,
                casing lowering and aquifer investigation operations
                for the Adani Green Hydrogen development project in
                remote desert conditions.
              </p>
            </div>

            <div className="bg-[#111] border border-[#222] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Key Highlights
              </h3>

              <div className="space-y-4 text-gray-300">
                <div>✔ 6 Borewells Completed</div>
                <div>✔ Deep Desert Drilling Operations</div>
                <div>✔ Hard Rock & Clay Formation</div>
                <div>✔ Rotary Drilling Method</div>
                <div>✔ Piezometer Borewell Installation</div>
                <div>✔ High Salinity Water Zones Managed</div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-20 border-t border-[#1A1A1A] border-b border-[#1A1A1A]">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

    <h2 className="text-4xl font-bold text-white mb-12">
      Project <span className="text-yellow-400">Highlights</span>
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-[28px] p-8">
        <p className="text-yellow-400 text-sm uppercase tracking-[2px] mb-2">
          Client
        </p>
        <h3 className="text-white text-xl font-semibold">
          Adani Group
        </h3>
      </div>

      <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-[28px] p-8">
        <p className="text-yellow-400 text-sm uppercase tracking-[2px] mb-2">
          Industry
        </p>
        <h3 className="text-white text-xl font-semibold">
          Green Hydrogen
        </h3>
      </div>

      <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-[28px] p-8">
        <p className="text-yellow-400 text-sm uppercase tracking-[2px] mb-2">
          Scope
        </p>
        <h3 className="text-white text-xl font-semibold">
          Groundwater Infrastructure
        </h3>
      </div>

      <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-[28px] p-8">
        <p className="text-yellow-400 text-sm uppercase tracking-[2px] mb-2">
          Machine Used
        </p>
        <h3 className="text-white text-xl font-semibold">
          NGDR2000
        </h3>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-24">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

    <div className="bg-gradient-to-r from-[#0D0D0D] to-[#141414] border border-[#2A2A2A] rounded-[36px] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

      <div>
        <span className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold mb-5">
          Let's Talk
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Discuss Similar <span className="text-yellow-400">Project</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl">
          Looking for groundwater drilling, piling, mining or industrial drilling solutions? Connect with NGE Drillsol team for project discussion.
        </p>
      </div>

      <div className="flex gap-4 flex-wrap">

        <a
          href="https://wa.me/919106360907"
          target="_blank"
          className="bg-yellow-500 hover:bg-yellow-400 transition px-8 py-4 rounded-full text-black font-semibold"
        >
          WhatsApp Us
        </a>

        <a
          href="/contact"
          className="border border-[#2A2A2A] hover:border-yellow-500 transition px-8 py-4 rounded-full text-white font-semibold"
        >
          Send Inquiry
        </a>

      </div>
    </div>

  </div>
</section>
    </div>
  )
}