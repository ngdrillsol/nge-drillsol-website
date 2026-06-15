'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Wrench, Globe2, Package, Headphones, Settings, FileText, ArrowRight, Droplets,
Building2,
Sun } from 'lucide-react'

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

const services = [
  {
    icon: <Wrench size={26} />,
    title: 'Custom Rig Manufacturing',
    desc: 'Every machine engineered to your exact specifications. Geology, depth, diameter, mounting type and engine preference — all configured to your project requirements.',
    details: ['Truck, trailer, tractor, skid, trolley mounting', 'Custom mast and rotary head configuration', 'Cummins, Tata and domestic engine options', 'Dual-engine high-HP configurations'],
  },
  {
    icon: <Globe2 size={26} />,
    title: 'Export Support & Logistics',
    desc: 'Complete export service from manufacturing to on-site delivery. We handle all documentation, freight coordination and customs support for international orders.',
    details: ['CIF / FOB / EXW pricing', 'HS code and customs documentation', 'Sea freight coordination', 'In-country delivery support'],
  },
  {
    icon: <Package size={26} />,
    title: 'Spare Parts Supply',
    desc: 'Complete spare parts inventory available ex-stock for fast dispatch. Original NGE parts and compatible equivalents for all rig models.',
    details: ['API drill pipes and DTH pipes', 'DTH hammers and bits', 'Mud pumps and centrifugal pumps', 'Rotary heads and hydraulic parts'],
  },
  {
    icon: <Headphones size={26} />,
    title: 'After-Sales Support',
    desc: 'Dedicated after-sales team providing technical support, remote diagnostics and on-site service for all NGE Drillsol machines worldwide.',
    details: ['Operator training at factory', 'Remote diagnostic support', 'Field service teams (India)', 'WhatsApp technical helpdesk'],
  },
  {
    icon: <Settings size={26} />,
    title: 'Rig Customisation',
    desc: 'Existing rig upgrades, capacity enhancement and refurbishment services. Extend machine life or upgrade performance to match new project requirements.',
    details: ['Engine upgrades', 'Mast extension and capacity upgrade', 'Control system modernisation', 'Full rig refurbishment'],
  },
  {
    icon: <FileText size={26} />,
    title: 'Drilling Consultancy',
    desc: 'Pre-project drilling consultancy to identify the right machine configuration for your geology, depth and budget. Free for all serious inquiries.',
    details: ['Geology-based machine selection', 'Depth and diameter optimisation', 'Formation-specific tooling advice', 'Project cost estimation'],
  },
  {
  icon: <Droplets size={26} />,
  title: 'Deep Tubewell',
  desc: 'Complete deep tubewell drilling services for industrial, agricultural and infrastructure projects. Specialized in high-depth groundwater exploration and borewell execution.',
  details: [
    'Deep borewell drilling',
    'Large diameter drilling',
    'Groundwater exploration',
    'Industrial & agricultural projects'
  ],
},

{
  icon: <Building2 size={26} />,
  title: 'Micro Piling',
  desc: 'Professional micro piling and foundation solutions for bridges, solar projects, industrial plants and difficult terrain conditions.',
  details: [
    'Foundation strengthening',
    'Solar piling support',
    'Bridge & infrastructure work',
    'Heavy-duty piling solutions'
  ],
},

{
  icon: <Sun size={26} />,
  title: 'Solar Infrastructure',
  desc: 'End-to-end drilling and piling support for utility-scale solar parks, renewable energy projects and EPC contractors.',
  details: [
    'Solar piling',
    'Foundation drilling',
    'EPC project support',
    'Renewable infrastructure'
  ],
},
]

export default function ServicesPage() {
  return (
    <div className="pt-28 lg:pt-36 pb-20 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <FadeIn className="mb-14">
          <div className="section-label mb-4">What We Offer</div>
          <h1
            className="font-heading text-white mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05 }}
          >
            End-to-End{' '}
            <span className="text-yellow">Drilling Solutions</span>
          </h1>
          <p className="text-gray-450 font-body text-sm max-w-xl leading-relaxed">
            Beyond manufacturing, NGE Drillsol provides a complete service ecosystem —
            from pre-project consultancy to after-sales support, spare parts and export logistics.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="product-card h-full p-6 group">
                <div className="text-yellow mb-4 group-hover:scale-110 transition-transform inline-block">
                  {s.icon}
                </div>
                <h3 className="font-heading font-700 text-white text-base mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-gray-450 text-xs font-body leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-gray-550 font-body">
                      <span className="text-yellow mt-0.5">›</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="bg-[#F5C518] p-8 lg:p-12 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div>
              <h3 className="font-heading font-700 text-[#0A0A0A] text-xl mb-2 tracking-tight">
                Free Engineering Consultation
              </h3>
              <p className="text-[#0A0A0A]/70 text-sm font-body max-w-lg">
                Describe your project and our team will recommend the right machine, estimate
                drilling costs and prepare a detailed technical proposal at no charge.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-heading font-600 text-sm px-6 py-3 hover:bg-[#1A1A1A] transition-colors"
              >
                Start Consultation <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/919106360907?text=I%20need%20a%20free%20drilling%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#0A0A0A]/30 text-[#0A0A0A] font-heading font-600 text-sm px-5 py-3 hover:bg-[#0A0A0A]/10 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
