'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, useInView } from 'framer-motion'
import { Filter, ArrowRight, MessageSquare } from 'lucide-react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

type DrillingRig = {
  id: string
  model: string
  name: string
  category: string
  image: string
  images: string[]
  depth: string
  diameter: string
  pullback: string
  engine: string
  mounting: string
  operation: string
  applications: string[]
  tag?: string
  flagship?: boolean
}

const DrillingRigs: DrillingRig[] = [
  {
    id: 'ngwr3100', model: 'NGWR3100', name: 'Workover Drilling Rig', category: 'workover',
    image: '/images/machine-ngwr3100-premium.png',
    depth: '1,500m – 2,000m', diameter: '—', pullback: '150,000 kg',
    engine: '300–400 HP Dual', mounting: 'Trailer, Truck', operation: 'Workover, Oil, Natural Gas',
    applications: ['Oil well', 'Natural gas', 'Well servicing', 'Workover'],
    tag: 'Heavy Duty',
    images: []
  },
  {
    id: 'ngdr3000', model: 'NGDR3000', name: 'Rotary Drilling Rig', category: 'rotary',
    image: '/images/machine-ngdr3000-premium.png',
    images: [
      '/images/ngdr3000-1.jpg',
      '/images/ngdr3000-2.jpg',
      '/images/ngdr3000-3.jpg',
      '/images/ngdr3000-4.jpg'
    ],
    depth: '1,000m – 1,500m', diameter: '300mm – 1,500mm', pullback: '120,000 kg',
    engine: '300–400 HP Dual', mounting: 'Trailer', operation: 'Rotary, DTH, Foam Drilling',
    applications: ['Deep water wells', 'EPC projects', 'Mining', 'Large diameter'],
    tag: 'Water-Well', flagship: true,
  },
  {
    id: 'ngdr2000', model: 'NGDR2000', name: 'Rotary Drilling Rig', category: 'rotary',
    image: '/images/machine-ngdr2000-premium.png',
    depth: '850m', diameter: '300mm – 1,200mm', pullback: '80,000 kg',
    engine: '235–300 HP', mounting: 'Truck, Trailer, Skid', operation: 'Direct Rotary / DTH',
    applications: ['Irrigation', 'Mining', 'Water supply', 'Export'],
    tag: 'Water-Well, Best Seller',
    images: []
  },
  {
    id: 'ngdr1500', model: 'NGDR1500', name: 'Rotary Drilling Rig', category: 'rotary',
    image: '/images/machine-ngdr1500-premium.png',
    depth: '600m', diameter: '250mm – 1,500mm', pullback: '70,000 kg',
    engine: '235 HP Cummins', mounting: 'Truck, Trailer, Skid', operation: 'Direct Rotary / DTH',
    applications: ['Water well', 'Foundation', 'Borewell', 'Infrastructure'],
    images: []
  },
  {
    id: 'ngdr1000', model: 'NGDR1000', name: 'Rotary Drilling Rig', category: 'rotary',
    image: '/images/machine-ngdr1000-premium.png',
    depth: '500m', diameter: '200mm – 1,500mm', pullback: '40,000 kg',
    engine: '188 HP', mounting: 'Truck, Trailer, Skid', operation: 'Direct Rotary',
    applications: ['Borewell', 'Water well', 'Small EPC', 'Domestic'],
    images: []
  },
  {
    id: 'ngdth200', model: 'NGDTH200', name: 'DTH Drilling Rig', category: 'dth',
    image: '/images/machine-ngdth200r-premium.png',
    depth: '200m', diameter: '—', pullback: '—',
    engine: '—', mounting: '—', operation: 'DTH Drilling',
    applications: ['Hard rock', 'Borewell', 'Foundation', 'Compressor drilling'],
    images: []
  },
  {
    id: 'ngdth300', model: 'NGDTH300', name: 'DTH Drilling Rig', category: 'dth',
    image: '/images/machine-ngdth300r-premium.png',
    depth: '300m', diameter: '—', pullback: '—',
    engine: '—', mounting: '—', operation: 'DTH Drilling',
    applications: ['Rock drilling', 'Water well', 'Borewell', 'Mining'],
    images: []
  },
  {
    id: 'ngdth600', model: 'NGDTH600', name: 'DTH Drilling Rig', category: 'dth',
    image: '/images/machine-ngdth600r-premium.png',
    depth: '600m', diameter: '—', pullback: '—',
    engine: '—', mounting: '—', operation: 'DTH Drilling',
    applications: ['Deep hard rock', 'Export projects', 'Africa operations', 'Mining'],
    tag: 'Export Ready',
    images: []
  },
  {
    id: 'ngdp15', model: 'NGDP15', name: 'Tractor Mounted Piling Rig', category: 'piling',
    image: '/images/machine-ngdp15-premium.png',
    depth: '6m', diameter: '100mm – 350mm', pullback: '1,000 kg',
    engine: 'Tractor Engine', mounting: 'Tractor', operation: 'Dry Piling',
    applications: ['Solar piling', 'Foundation', 'Fencing', 'Signage'],
    images: []
  },
  {
    id: 'ngdp30', model: 'NGDP30', name: 'Tractor Mounted Piling Rig', category: 'piling',
    image: '/images/machine-ngdp30-premium.png',
    depth: '10m', diameter: '100mm – 500mm', pullback: '5,000 kg',
    engine: 'Tractor Engine', mounting: 'Tractor', operation: 'Dry Piling',
    applications: ['Solar farm piling', 'Road barrier', 'Foundation', 'Construction'],
    images: []
  },
  {
    id: 'ngdp60', model: 'NGDP60', name: 'Piling Rig (Dry & Wet)', category: 'piling',
    image: '/images/machine-ngdp60-premium.png',
    depth: '18m', diameter: '200mm – 700mm', pullback: '10,000 kg',
    engine: 'Heavy Duty Piston', mounting: 'Tractor', operation: 'Dry & Wet Piling',
    applications: ['Large solar piling', 'Bridge foundation', 'EPC piling', 'Industrial'],
    tag: 'Heavy Duty',
    images: []
  },
  {
    id: 'ngdth30', model: 'NGDTH30', name: 'Tractor Mounted DTH Rig', category: 'tractor',
    image: '/images/machine-ngdth30-premium.png',
    depth: '150m', diameter: '100mm – 500mm', pullback: '10,000 kg',
    engine: 'Hydraulic Rotary', mounting: 'Tractor', operation: 'DTH Dry & Water Well',
    applications: ['Water well', 'DTH rock', 'Borewell', 'Rural water supply'],
    images: []
  },
  {
    id: 'ngdth50', model: 'NGDTH50', name: 'Tractor Mounted Multi-Purpose Rig', category: 'tractor',
    image: '/images/machine-ngdth50-premium.png',
    depth: '200m', diameter: '125mm – 700mm', pullback: '15,000 kg',
    engine: 'Hydraulic + 200–400A Generator', mounting: 'Tractor', operation: 'DTH, Rotary & Odex',
    applications: ['Multi-purpose', 'Water well', 'Rock drilling', 'Export projects'],
    tag: 'Multi-Purpose',
    images: []
  },
  {
    id: 'ngcore50', model: 'NGCORE50', name: 'Core Drilling Rig', category: 'core',
    image: '/images/machine-ngcore50-premium.png',
    depth: '50m – 150m', diameter: 'NX / HX / PX', pullback: '8,000 kg',
    engine: 'TATA 1210 Engine', mounting: 'Trolley', operation: 'Geo-Technical & Core Drilling',
    applications: ['Geo-technical', 'Soil sampling', 'Core analysis', 'Survey'],
    tag: 'Geo-Tech',
    images: [
  '/images/machine-ngcore100-premium.png'
]
  },
  {
    id: 'ngcore100', model: 'NGCORE100', name: 'Core Drilling Rig', category: 'core',
    image: '/images/machine-ngcore100-trolley-premium.png',
    depth: '200m', diameter: 'NQ / HQ / PQ', pullback: '12,000 kg',
    engine: 'Trolley / 80HP Deck', mounting: 'Trolley', operation: 'Surface Exploration',
    applications: ['Mineral exploration', 'Core sampling', 'Survey', 'Geo-tech'],
    tag: 'Exploration',
    images: [
  '/images/machine-ngcore100-trolley-premium.png'
]
  },
  {
    id: 'ngcore100tractor', model: 'NGCORE100', name: 'Core Drilling Rig', category: 'core',
    image: '/images/machine-ngcore100-premium.png',
    depth: '200m', diameter: 'NQ / HQ / PQ', pullback: '12,000 kg',
    engine: 'Tractor / 80HP Deck', mounting: 'Tractor', operation: 'Surface Exploration',
    applications: ['Mineral exploration', 'Core sampling', 'Survey', 'Geo-tech'],
    tag: 'Exploration',
    images: ['/images/machine-ngcore50-premium.png']
   },
  
]

const categoryTabs = [
  { id: 'all', label: 'All Drilling Rigs' },
  { id: 'rotary', label: 'Rotary' },
  { id: 'dth', label: 'DTH' },
  { id: 'tractor-mounted', label: 'Tractor Mounted Drilling Rigs' },
  { id: 'core', label: 'Core Drilling' },
  { id: 'workover', label: 'Workover' },
]

export default function DrillingRigsPage() {
  const searchParams = useSearchParams()

const [activeTab, setActiveTab] = useState(
  searchParams.get('category') || 'all'
)
  const filtered =
  activeTab === 'all'
    ? DrillingRigs
    : DrillingRigs.filter(rig =>
        activeTab === 'tractor-mounted'
          ? rig.category === 'tractor' || rig.category === 'piling'
          : rig.category === activeTab
      )
  return (
    <div className="pt-28 lg:pt-36 pb-20 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-12">
          <div className="section-label mb-4">Full Range</div>
          <h1
            className="font-heading text-white mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05 }}
          >
            Drilling Rig{' '}
            <span className="text-yellow">Product Catalogue</span>
          </h1>
          <p className="text-gray-450 font-body text-sm max-w-xl leading-relaxed">
            16 field-proven models. Rotary, DTH, core, piling and workover rigs — each engineered
            for specific geology, depth and project requirements.
          </p>
        </FadeIn>

        {/* Category filter tabs */}
        <FadeIn delay={0.1} className="mb-10">
          <div className="flex gap-2 flex-wrap items-center">
            <Filter size={14} className="text-gray-550 mr-1" />
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-heading font-500 px-4 py-2 border transition-all ${
                  activeTab === tab.id
                    ? 'bg-yellow text-black border-yellow'
                    : 'border-[#2A2A2A] text-gray-450 hover:border-yellow/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Machine grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((machine, i) => (
            <FadeIn key={machine.id} delay={i * 0.05}>
              <div
                id={machine.id}
                className={`product-card h-full flex flex-col ${machine.flagship ? 'ring-1 ring-yellow/30' : ''}`}
              >
                {/* Image */}
                <div className="relative h-44 bg-white overflow-hidden">
                  <Image
                    src={machine.image}
                    alt={machine.model}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                  {machine.tag && (
                    <div className="absolute top-3 left-3 tag">{machine.tag}</div>
                  )}
                  {machine.flagship && (
                    <div className="absolute top-3 right-3 tag bg-yellow/20 text-yellow border-yellow/40">
                      ★ Flagship
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="mb-3">
                    <div className="font-heading font-700 text-white text-base tracking-tight">
                      {machine.model}
                    </div>
                    <div className="text-gray-550 text-xs font-body">{machine.name}</div>
                  </div>

                  {/* Specs */}
                  <div className="space-y-1.5 mb-4 flex-1">
                    {[
                      { k: 'Depth', v: machine.depth },
                      { k: 'Diameter', v: machine.diameter },
                      { k: 'Pullback', v: machine.pullback },
                      { k: 'Mounting', v: machine.mounting },
                    ].map((s) => (
                      <div key={s.k} className="flex justify-between text-xs">
                        <span className="text-gray-550 font-body">{s.k}</span>
                        <span className="text-white font-heading font-500 text-right ml-2">{s.v}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {machine.applications.slice(0, 3).map((a) => (
                      <span key={a} className="tag text-[0.6rem]">{a}</span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2 mt-4 flex-wrap relative z-[9999]">
                    <Link
                      href={`/contact?model=${machine.model}`}
                      className="btn-primary text-[0.65rem] py-2 px-3 flex-1 justify-center gap-1"
                    >
                      Inquire <ArrowRight size={10} />
                    </Link>
                    <Link
                     href={`/machines/${machine.id}`}
                     className="btn-outline text-[0.65rem] py-2 px-3 flex items-center justify-center relative z-50"
                    >
                     SPECS
                    </Link>
                    <a
                      href={`https://wa.me/919106360907?text=I%20am%20interested%20in%20${machine.model}%20drilling%20rig`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-[0.65rem] py-2 px-3 gap-1"
                    >
                      <MessageSquare size={10} /> WA
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Spare parts CTA */}
        <FadeIn delay={0.2} className="mt-16">
          <div className="bg-[#141414] border border-[#2A2A2A] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="section-label mb-3">Spare Parts & Accessories</div>
              <h3 className="font-heading font-700 text-white text-xl mb-2 tracking-tight">
                Complete Spare Parts Inventory Available
              </h3>
              <p className="text-gray-450 text-sm font-body max-w-lg">
                API drill pipes, DTH hammers, bits, mud pumps, rotary components, hydraulic parts
                and all accessories available ex-stock for rapid dispatch.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/contact" className="btn-primary text-xs gap-2">
                Parts Inquiry <ArrowRight size={12} />
              </Link>
              <Image
                src="/images/spare-parts.png"
                alt="Spare Parts"
                width={80}
                height={60}
                className="object-contain hidden lg:block opacity-70"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
