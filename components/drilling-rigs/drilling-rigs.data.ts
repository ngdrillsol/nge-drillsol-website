import { RigCategory } from "./drilling-rigs.types";

export const rigCategories: RigCategory[] = [
  {
    id: "water-well",

    title: "Water Well Drilling Rigs",

    description:
      "Heavy-duty drilling rigs designed for deep water well construction, municipal water supply, irrigation, industrial borewells and large-diameter groundwater projects.",

    image: "/images/categories/water-well.jpg",

    href: "/drilling-rigs/water-well-drilling-rigs",

    badge: "Most Popular",

    bestFor: "Deep Water Well Projects",

    depth: "150–1500 m",

    holeDiameter: "100–1500 mm",

    methods: [
      "Mud Rotary",
      "DTH",
      "Foam Drilling",
    ],

    applications: [
      "Water Supply",
      "Agriculture",
      "Industrial",
      "Government",
    ],

    formations: [
      "Clay",
      "Sand",
      "Gravel",
      "Hard Rock",
      "Basalt",
    ],

    machines: [
      "NGDR3000",
      "NGDR2000",
      "NGDR1500",
      "NGDR1000",
      "NGDTH600R",
      "NGDTH450R",
      "NGDTH300R",
      "NGDTH200R",
    ],

    totalModels: 8,
  },

  {
    id: "workover",

    title: "Workover Rigs",

    description:
      "Heavy-duty workover rigs developed for oil & gas well servicing, intervention, rehabilitation and production support operations.",

    image: "/images/categories/workover.jpg",

    href: "/drilling-rigs/workover-rigs",

    badge: "Oil & Gas",

    bestFor: "Well Servicing",

    depth: "1500–2000 m",

    holeDiameter: "Application Specific",

    methods: [
      "Workover",
      "Well Intervention",
    ],

    applications: [
      "Oil & Gas",
      "Well Rehabilitation",
      "Production Support",
    ],

    formations: [
      "Oil Fields",
      "Gas Fields",
    ],

    machines: [
      "NGWR3100",
    ],

    totalModels: 1,
  },

  {
    id: "rotary",

    title: "Rotary Drilling Rigs",

    description:
      "Mechanical rotary drilling rigs for large-diameter deep borewell drilling with excellent torque, stability and field reliability.",

    image: "/images/categories/rotary.jpg",

    href: "/drilling-rigs/rotary-drilling-rigs",

    badge: "Best Seller",

    bestFor: "Large Diameter Boreholes",

    depth: "200–1500 m",

    holeDiameter: "150–1500 mm",

    methods: [
      "Mud Rotary",
      "Direct Rotary",
    ],

    applications: [
      "Water Wells",
      "Municipal",
      "Industrial",
      "Infrastructure",
    ],

    formations: [
      "Clay",
      "Sand",
      "Gravel",
      "Mixed Formation",
    ],

    machines: [
      "NGDR3000",
      "NGDR2000",
      "NGDR1500",
      "NGDR1000",
    ],

    totalModels: 4,
  },

  {
    id: "dth",

    title: "DTH Drilling Rigs",

    description:
      "High-performance Down-The-Hole drilling rigs engineered for fast penetration in hard rock formations and challenging terrains.",

    image: "/images/categories/dth.jpg",

    href: "/drilling-rigs/dth-drilling-rigs",

    badge: "Hard Rock",

    bestFor: "Hard Rock Drilling",

    depth: "150–600 m",

    holeDiameter: "100–700 mm",

    methods: [
      "DTH",
      "Top Drive",
      "Rotary",
    ],

    applications: [
      "Water Wells",
      "Mining",
      "Exploration",
      "Infrastructure",
    ],

    formations: [
      "Granite",
      "Basalt",
      "Quartz",
      "Hard Rock",
    ],

    machines: [
      "NGDTH600R",
      "NGDTH450R",
      "NGDTH300R",
      "NGDTH200R",
      "NGDTH50",
      "NGDTH30",
    ],

    totalModels: 6,
  },

  {
    id: "core",

    title: "Core Drilling Rigs",

    description:
      "Precision core drilling rigs for geological exploration, mineral investigation, geotechnical drilling and soil testing.",

    image: "/images/categories/core.jpg",

    href: "/drilling-rigs/core-drilling-rigs",

    badge: "Exploration",

    bestFor: "Mineral Exploration",

    depth: "50–200 m",

    holeDiameter: "NQ / HQ / PQ",

    methods: [
      "Core Drilling",
      "Diamond Core",
    ],

    applications: [
      "Mining",
      "Geology",
      "Investigation",
      "Soil Testing",
    ],

    formations: [
      "Rock",
      "Mineral Zones",
      "Mixed Formation",
    ],

    machines: [
      "NGCORE100 (Trolley)",
      "NGCORE100 (Tractor)",
      "NGCORE50 (Trolley)",
    ],

    totalModels: 3,
  },

  {
    id: "piling",

    title: "Piling Rigs",

    description:
      "Foundation drilling rigs for solar parks, transmission lines, bridges, highways and infrastructure development.",

    image: "/images/categories/piling.jpg",

    href: "/drilling-rigs/piling-rigs",

    badge: "Infrastructure",

    bestFor: "Solar Foundation",

    depth: "5–18 m",

    holeDiameter: "100–700 mm",

    methods: [
      "Dry Piling",
      "Wet Piling",
    ],

    applications: [
      "Solar",
      "Infrastructure",
      "Civil",
      "Transmission",
    ],

    formations: [
      "Clay",
      "Soil",
      "Mixed Ground",
    ],

    machines: [
      "NGDP60",
      "NGDP30",
      "NGDP15",
      "NGDTH50",
      "NGDTH30",
    ],

    totalModels: 5,
  },

  {
    id: "tractor",

    title: "Tractor Mounted Drilling Rigs",

    description:
      "Compact tractor-mounted drilling rigs offering economical drilling solutions for water wells, DTH drilling, piling and exploration.",

    image: "/images/categories/tractor.jpg",

    href: "/drilling-rigs/tractor-mounted-drilling-rigs",

    badge: "Compact",

    bestFor: "Rural & Remote Projects",

    depth: "50–200 m",

    holeDiameter: "100–700 mm",

    methods: [
      "DTH",
      "Piling",
      "Core Drilling",
    ],

    applications: [
      "Agriculture",
      "Water Wells",
      "Solar",
      "Exploration",
    ],

    formations: [
      "Clay",
      "Sand",
      "Hard Rock",
    ],

    machines: [
      "NGDP60",
      "NGDP30",
      "NGDP15",
      "NGDTH50",
      "NGDTH30",
      "NGCORE100 (Tractor)",
    ],

    totalModels: 6,
  },
];