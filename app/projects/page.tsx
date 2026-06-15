'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

const projects = [
  {
    title: 'Adani Green Hydrogen Project',
    slug: 'adani-green-hydrogen',
    client: 'Adani Group',
    machine: 'NGDR2000',
    image: '/images/adani/adani-card.png',
    depth: '850m',
    diameter: '500mm',
    formation: 'Hard rock / Basalt',
    sector: 'Renewable Energy',
    country: 'India',
    desc: 'Large-scale foundation and water well drilling for one of India\'s largest green hydrogen infrastructure projects. NGDR2000 deployed for deep high-capacity drilling with dual-engine configuration.',
  },
  {
    title: 'Deep Borewell Infrastructure Program',
    client: 'State Government',
    machine: 'NGDR2000',
    image: '/images/machine-ngdr2000-premium.png',
    depth: '600m',
    diameter: '300mm',
    formation: 'Alluvial / Granite',
    sector: 'Water Security',
    country: 'India',
    desc: 'Multiple deep borewells for rural water supply program. NGDR2000 proven in mixed alluvial and granite formations with consistent performance across 50+ wells.',
  },
  {
    title: 'Solar Infrastructure — Large Scale Farm',
    client: 'Solar Developer',
    machine: 'NGDP60',
    image: '/images/machine-ngdp60-premium.png',
    depth: '12m piles',
    diameter: '400mm',
    formation: 'Sandy / Laterite',
    sector: 'Solar Energy',
    country: 'India',
    desc: 'Tractor-mounted NGDP60 deployed for high-speed solar pile installation. 500+ piles completed with consistent depth and quality across laterite terrain.',
  },
  
  {
    title: 'Bullet Train Project',
    client: 'NTPC Company',
    machine: 'NGCORE100',
    image: '/images/machine-ngcore100-trolley-premium.png',
    depth: '200m',
    diameter: 'HQ Core',
    formation: 'Mixed geological',
    sector: 'Land Exploration',
    country: 'India',
    desc: 'Surface exploration core drilling for mineral survey. NGCORE100 delivered NQ/HQ core samples with high recovery rates across complex geological formations.',
  },
  
]

export default function ProjectsPage() {
  return (
    <div className="pt-28 lg:pt-36 pb-20 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <FadeIn className="mb-14">
          <div className="section-label mb-4">Case Studies</div>
          <h1
            className="font-heading text-white mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05 }}
          >
            Projects &{' '}
            <span className="text-yellow">Field Performance</span>
          </h1>
          <p className="text-gray-450 font-body text-sm max-w-xl leading-relaxed">
            NGE Drillsol rigs have been proven across energy, infrastructure, water security
            and mining projects. Real machines. Real results. Real conditions.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <Link href={`/projects/${p.slug}`} className="product-card group h-full flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] hover:border-yellow-500/30">
                <div className="relative h-52 bg-white overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain p-6 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 tag">{p.sector}</div>
                  <div className="absolute top-3 right-3 tag">{p.country}</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-700 text-white text-base mb-1 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-gray-550 text-xs font-body leading-relaxed mb-4">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-auto">
                    {[
                      { k: 'Machine', v: p.machine },
                      { k: 'Depth', v: p.depth },
                      { k: 'Diameter', v: p.diameter },
                      { k: 'Formation', v: p.formation },
                    ].map((s) => (
                      <div key={s.k} className="text-xs">
                        <span className="text-gray-550 font-body block">{s.k}</span>
                        <span className="text-white font-heading font-500">{s.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-550 font-body border-t border-[#1E1E1E] pt-3">
                    Client: <span className="text-gray-350">{p.client}</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="bg-[#0D0D0D] border border-[#1E1E1E] p-8 lg:p-12 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div>
              <h3 className="font-heading font-700 text-white text-xl mb-2 tracking-tight">
                Have a Similar Project?
              </h3>
              <p className="text-gray-450 text-sm font-body max-w-lg">
                Tell us your drilling requirements and our engineers will identify the right machine
                and provide export-ready quotation with full technical documentation.
              </p>
            </div>
            <Link href="/contact" className="btn-primary gap-2 flex-shrink-0">
              Start Your Project <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
