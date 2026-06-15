'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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

const timeline = [
  { year: '1985', title: 'Company Founded', desc: 'NGE Engineering established in Mehsana, Gujarat by a team of drilling engineers.' },
  { year: '1990', title: 'First Export', desc: 'First international export to a neighbouring country. Beginning of the global journey.' },
  { year: '2000', title: '100 Units Milestone', desc: 'Crossed 100 units delivered. Expanded manufacturing capacity at Mehsana facility.' },
  { year: '2008', title: 'NGE Drillsol Brand', desc: 'Rebranded as NGE Drillsol Pvt. Ltd. Expanding into rotary, DTH and piling categories.' },
  { year: '2015', title: 'African Market Entry', desc: 'Active export operations in Kenya, Sudan, Ethiopia and Mozambique.' },
  { year: '2020', title: '10+ Countries', desc: 'Operations and deliveries across 10+ countries spanning Africa, Asia, Middle East and Australia.' },
  { year: '2024', title: '1000+ Units Sold', desc: 'Milestone of 1000+ units delivered globally. Adani project references added.' },
]

const capabilities = [
  'Large-diameter drilling: 4" to 26"',
  'Depth capabilities up to 3,000 feet (850+ meters)',
  'Hard rock, desert, coastal and high-salinity performance',
  'Dual-engine and high-horsepower configurations',
  'Custom geology-specific rig design',
  'EPC timeline compatible high-uptime machines',
  'Full spare parts lifecycle support',
  'Export documentation and logistics support',
]

export default function AboutPage() {
  return (
    <div className="pt-28 lg:pt-36 pb-20 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Hero */}
        <FadeIn className="mb-16">
          <div className="section-label mb-4">Our Story</div>
          <h1
            className="font-heading text-white mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05 }}
          >
            Four Decades of{' '}
            <span className="text-yellow">Drilling Excellence</span>
          </h1>
          <p className="text-gray-450 font-body text-sm max-w-2xl leading-relaxed">
            Founded in 1985, NGE Drillsol Pvt. Ltd. began as a small engineering initiative
            and has grown into a trusted manufacturer and exporter of heavy-duty drilling solutions.
            Over four decades, we have designed and delivered rotary, DTH, water well, and specialised
            drilling rigs capable of operating in extreme geological and climatic conditions across
            India and international markets.
          </p>
        </FadeIn>

        {/* Stats band */}
        <FadeIn className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E1E1E]">
            {[
              { n: '40+', l: 'Years Legacy' },
              { n: '1000+', l: 'Units Sold' },
              { n: '10+', l: 'Countries' },
              { n: '16+', l: 'Machine Models' },
            ].map((s) => (
              <div key={s.l} className="bg-[#0A0A0A] py-8 text-center">
                <div className="stat-number mb-1">{s.n}</div>
                <div className="text-gray-450 text-xs font-body uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Factory image */}
          <FadeIn>
            <div className="relative aspect-[4/3] bg-[#141414] border border-[#1E1E1E] overflow-hidden">
              <Image src="/images/factory.jpg" alt="NGE Drillsol Manufacturing Facility" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="tag mb-1">Manufacturing Facility</div>
                <div className="text-white text-sm font-heading font-600">
                  Mehsana, Gujarat, India
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Vision & Mission */}
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div>
                <div className="section-label mb-3">Our Vision</div>
                <p className="text-gray-350 font-body text-sm leading-relaxed">
                  To be a long-term drilling solutions partner for infrastructure, energy,
                  and industrial projects by delivering robust, scalable, and field-tested
                  drilling systems to the most demanding environments in the world.
                </p>
              </div>
              <div className="hr-yellow" />
              <div>
                <div className="section-label mb-3">Our Mission</div>
                <p className="text-gray-350 font-body text-sm leading-relaxed mb-4">
                  We aim to support organisations like Adani Group and Reliance Industries with
                  engineering-driven designs, customisable rigs for project-specific geology,
                  high-uptime machines suitable for EPC timelines, and on-ground serviceability
                  and lifecycle support.
                </p>
                <div className="bg-[#141414] border-l-2 border-yellow p-4">
                  <p className="text-yellow font-heading font-600 text-sm italic">
                    "Reduce drilling risk. Increase execution certainty. Deliver results at scale."
                  </p>
                </div>
              </div>
              <div>
                <div className="section-label mb-3">Manufacturing Capabilities</div>
                <div className="grid grid-cols-1 gap-2">
                  {capabilities.slice(0, 4).map((c) => (
                    <div key={c} className="flex items-start gap-2.5">
                      <CheckCircle2 size={13} className="text-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-gray-450 text-xs font-body">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Timeline */}
        <FadeIn className="mb-20">
          <div className="section-label mb-6">Company Timeline</div>
          <h2 className="font-heading text-white text-2xl font-700 mb-10 tracking-tight">
            Journey Since <span className="text-yellow">1985</span>
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-[#1E1E1E] hidden lg:block" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <FadeIn key={t.year} delay={i * 0.08}>
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                    <div className="lg:w-20 flex-shrink-0 text-right">
                      <span className="font-heading font-700 text-yellow text-sm">{t.year}</span>
                    </div>
                    <div className="relative lg:pl-8 pb-4 lg:pb-0 border-b lg:border-b-0 border-[#1E1E1E]">
                      {/* Dot */}
                      <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-yellow border-2 border-[#0A0A0A] hidden lg:block" />
                      <div className="font-heading font-600 text-white text-sm mb-1">{t.title}</div>
                      <div className="text-gray-450 text-xs font-body leading-relaxed">{t.desc}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Full capabilities */}
        <FadeIn className="mb-16">
          <div className="bg-[#0D0D0D] border border-[#1E1E1E] p-8 lg:p-12">
            <div className="section-label mb-5">Engineering Capabilities</div>
            <h3 className="font-heading font-700 text-white text-xl mb-8 tracking-tight">
              Built to Perform Where Others Can't
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((c) => (
                <div key={c} className="flex items-start gap-2.5">
                  <CheckCircle2 size={13} className="text-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-gray-350 text-xs font-body leading-relaxed">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/machines" className="btn-primary gap-2">
              Explore Our Machines <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-outline gap-2">
              Contact Our Team
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
