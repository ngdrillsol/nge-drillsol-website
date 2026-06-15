'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const machineData: any = {
    ngwr3100: {
        name: 'NGWR3100',
        images: ['/images/machine/ngwr3100/1.png'],
        specs: {
            'Rig Type': 'Workover Drilling Rig',
            'Depth Capacity': '1500m – 2000m',
            'Pullback Capacity': '150,000 kg',
            'Mounting': 'Truck / Trailer',
            'Operation': 'Oil / Natural Gas',
            'Applications': 'Well Servicing / Workover',
        },
    },

    ngdr3000: {
        name: 'NGDR3000',
        images: [
            '/images/machine/ngdr3000/1.png',
            '/images/machine/ngdr3000/2.png',
            '/images/machine/ngdr3000/3.png',
            '/images/machine/ngdr3000/4.png',
        ],
        specs: {
            'Rig Type': 'Rotary Drilling Rig',
            'Depth Capacity': '1000m – 1500m',
            'Hole Diameter': '300mm – 1500mm',
            'Mounting': 'Trailer Mounted',
            'Operation': 'Rotary / DTH / Foam',
            'Applications': 'Waterwell / Mining',
        },
    },

    ngdr2000: {
        name: 'NGDR2000',
        images: ['/images/machine/ngdr2000/1.png'],
        specs: {
            'Rig Type': 'Rotary Drilling Rig',
            'Depth Capacity': '850m',
            'Hole Diameter': '300mm – 1200mm',
            'Mounting': 'Truck / Trailer / Skid',
            'Operation': 'Direct Rotary / DTH',
            'Applications': 'Irrigation / Mining',
        },
    },

    ngdr1500: {
        name: 'NGDR1500',
        images: ['/images/machine/ngdr1500/1.png'],
        specs: {
            'Rig Type': 'Rotary Drilling Rig',
            'Depth Capacity': '600m',
            'Hole Diameter': '250mm – 1500mm',
            'Mounting': 'Truck / Trailer',
            'Operation': 'Rotary',
            'Applications': 'Waterwell / Borewell',
        },
    },

    ngdr1000: {
        name: 'NGDR1000',
        images: ['/images/machine/ngdr1000/1.png'],
        specs: {
            'Rig Type': 'Rotary Drilling Rig',
            'Depth Capacity': '500m',
            'Hole Diameter': '200mm – 1200mm',
            'Mounting': 'Truck Mounted',
            'Operation': 'Rotary',
            'Applications': 'Waterwell',
        },
    },

    ngdth200: {
        name: 'NGDTH200',
        images: ['/images/machine/ngdth200/1.png'],
        specs: {
            'Rig Type': 'DTH Drilling Rig',
            'Depth Capacity': '200m',
            'Mounting': 'Truck Mounted',
            'Operation': 'DTH',
            'Applications': 'Waterwell / Quarry',
        },
    },

    ngdth300: {
        name: 'NGDTH300',
        images: ['/images/machine/ngdth300/1.png'],
        specs: {
            'Rig Type': 'DTH Drilling Rig',
            'Depth Capacity': '300m',
            'Mounting': 'Truck Mounted',
            'Operation': 'DTH',
            'Applications': 'Waterwell / Quarry',
        },
    },

    ngdth30: {
        name: 'NGDTH30',
        images: ['/images/machine/ngdth30/1.png'],
        specs: {
            'Rig Type': 'Tractor Mounted DTH Rig',
            'Depth Capacity': '300m',
            'Mounting': 'Tractor Mounted',
            'Operation': 'DTH / Rotary',
            'Applications': 'Waterwell / Agriculture',
        },
    },

    ngdth50: {
        name: 'NGDTH50',
        images: ['/images/machine/ngdth50/1.png'],
        specs: {
            'Rig Type': 'Tractor Mounted DTH Rig',
            'Depth Capacity': '500m',
            'Mounting': 'Tractor Mounted',
            'Operation': 'DTH / Rotary',
            'Applications': 'Deep Waterwell / Agriculture',
        },
    },

    ngdp15: {
        name: 'NGDP15',
        images: ['/images/machine/ngdp15/1.png'],
        specs: {
            'Rig Type': 'Hydraulic Piling Rig',
            'Depth Capacity': '15m',
            'Pile Diameter': '600mm – 1200mm',
            'Mounting': 'Crawler Mounted',
            'Operation': 'Rotary Piling',
            'Applications': 'Foundation / Infrastructure',
        },
    },

    ngdp30: {
        name: 'NGDP30',
        images: ['/images/machine/ngdp30/1.png'],
        specs: {
            'Rig Type': 'Hydraulic Piling Rig',
            'Depth Capacity': '30m',
            'Pile Diameter': '800mm – 1500mm',
            'Mounting': 'Crawler Mounted',
            'Operation': 'Rotary Piling',
            'Applications': 'Commercial Foundation',
        },
    },

    ngdp60: {
        name: 'NGDP60',
        images: ['/images/machine/ngdp60/1.png'],
        specs: {
            'Rig Type': 'Hydraulic Piling Rig',
            'Depth Capacity': '60m',
            'Pile Diameter': '1000mm – 2000mm',
            'Mounting': 'Crawler Mounted',
            'Operation': 'Rotary Piling',
            'Applications': 'Bridge / High-rise Foundation',
        }
    },

    ngcore100: {
        name: 'NGCORE100 Trolley Mounted Rig',
        images: [
            '/images/machine/ngcore100/1.png',
        ],
        specs: {
            'Rig Type': 'Core Drilling Rig',
            'Depth Capacity': '300m',
            'Core Size': 'NQ / HQ / PQ',
            'Mounting': 'Trolley Mounted',
            'Operation': 'Core Drilling',
            'Applications': 'Mineral Exploration / Geological Survey',
        },
    },

    ngcore100tractor: {
        name: 'NGCORE100 Tractor Mounted Rig',
        images: [
            '/images/machine/ngcore100-tractor/1.png',
        ],
        specs: {
            'Rig Type': 'Core Drilling Rig',
            'Depth Capacity': '300m',
            'Core Size': 'NQ / HQ / PQ',
            'Mounting': 'Tractor Mounted',
            'Operation': 'Core Drilling',
            'Applications': 'Mineral Exploration / Geological Survey',
        },
    },

    ngcore50: {
        name: 'NGCORE50 Rig',
        images: [
            '/images/machine/ngcore50/1.png',
        ],
        specs: {
            'Rig Type': 'Core Drilling Rig',
            'Depth Capacity': '150m',
            'Core Size': 'NQ / HQ',
            'Mounting': 'Skid / Trolley',
            'Operation': 'Core Drilling',
            'Applications': 'Mineral Exploration / Soil Investigation',
        },
    },
}

export default function MachineDetailPage() {
    const params = useParams()
    const machine = machineData[params.id as string]
    console.log(params.id)

    const [currentImage, setCurrentImage] = useState(0)

    if (!machine) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Machine Not Found
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white py-16 px-5">
            <div className="max-w-6xl mx-auto">

                {/* Machine Images Carousel */}
                <div className="mb-10">
                    <div className="relative bg-[#111] border border-yellow-500 rounded-2xl overflow-hidden h-[700px]">
                        <Image
                            src={machine.images[currentImage]}
                            alt={machine.name}
                            fill
                            className="object-contain p-10 hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="flex gap-4 mt-4 overflow-x-auto">
                        {machine.images.map((img: string, index: number) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={`border-2 rounded-lg overflow-hidden min-w-[120px] h-[80px]
                ${currentImage === index ? 'border-yellow-500' : 'border-gray-700'}`}
                            >
                                <Image
                                    src={img}
                                    alt=""
                                    width={120}
                                    height={80}
                                    className="object-cover w-full h-full"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Specs Table */}
                <div className="bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-yellow-500/30 rounded-[30px] p-10 mb-12 shadow-[0_0_40px_rgba(255,204,0,0.08)] backdrop-blur-sm">
                    <h1 className="text-5xl font-bold tracking-tight text-[#FFD54A] mb-10">
                        {machine.name} Technical Specifications
                    </h1>

                    <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(machine.specs).map(([key, value]) => (
                            <div
                                key={key}
                                className="flex justify-between items-center border border-[#222] bg-[#0E0E0E] hover:border-yellow-500/30 transition-all rounded-2xl px-6 py-5"
                            >
                                <span className="text-gray-400">{key}</span>
                                <span className="font-semibold">{value as string}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href={`https://wa.me/919106360907?text=Hello%20NGE%20Drillsol,%20I%20am%20interested%20in%20the%20full%20technical%20specification%20of%20${machine.name}.%20Please%20share%20the%20detailed%20datasheet.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-[#FFD54A] to-[#F4B400] hover:scale-105 transition-all duration-300 text-black px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_0_35px_rgba(255,204,0,0.2)]"
                    >
                        Request Full Specs
                    </a>
                </div>

            </div>
        </div>
    )
}