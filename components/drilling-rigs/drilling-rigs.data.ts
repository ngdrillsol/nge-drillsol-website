import { RigCategory } from "./drilling-rigs.types";

export const rigCategories: RigCategory[] = [
  /* ============================================================
     1. WATER WELL DRILLING RIGS
     ============================================================ */

  {
    id: "water-well",

    title: "Water Well Drilling Rigs",

    description:
      "Water well drilling rigs engineered for deep borewell construction, municipal water supply, irrigation, industrial groundwater projects and large-diameter wells using mud rotary, DTH and foam drilling methods.",

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
      "Irrigation",
      "Industrial Wells",
      "Government Projects",
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

  /* ============================================================
     2. DTH DRILLING RIGS
     ============================================================ */

  {
    id: "dth",

    title: "DTH Drilling Rigs",

    description:
      "Down-The-Hole drilling rigs engineered for high penetration rates in hard rock formations for water wells, mining, exploration and infrastructure drilling projects.",

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

  /* ============================================================
     3. ROTARY DRILLING RIGS
     ============================================================ */

  {
    id: "rotary",

    title: "Rotary Drilling Rigs",

    description:
      "Heavy-duty rotary drilling rigs designed for deep and large-diameter boreholes, water well construction, municipal supply, industrial wells and infrastructure projects.",

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
      "Municipal Water",
      "Industrial Wells",
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

  /* ============================================================
     4. TRACTOR MOUNTED DRILLING RIGS
     ============================================================ */

  {
    id: "tractor",

    title: "Tractor Mounted Drilling Rigs",

    description:
      "Compact tractor-mounted drilling rigs developed for economical water well drilling, DTH drilling, piling and core drilling in rural, agricultural and remote project locations.",

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
      "Solar Projects",
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

  /* ============================================================
     5. PILING RIGS
     ============================================================ */

  {
    id: "piling",

    title: "Piling Rigs",

    description:
      "Foundation and micro-piling drilling rigs developed for solar parks, transmission lines, bridges, highways, civil foundations and infrastructure construction projects.",

    image: "/images/categories/piling.jpg",

    href: "/drilling-rigs/piling-rigs",

    badge: "Infrastructure",

    bestFor: "Solar & Foundation Drilling",

    depth: "5–18 m",

    holeDiameter: "100–700 mm",

    methods: [
      "Dry Piling",
      "Wet Piling",
    ],

    applications: [
      "Solar Projects",
      "Infrastructure",
      "Civil Foundations",
      "Transmission Lines",
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

  /* ============================================================
     6. CORE DRILLING RIGS
     ============================================================ */

  {
    id: "core",

    title: "Core Drilling Rigs",

    description:
      "Core drilling rigs developed for geological exploration, mineral investigation, geotechnical drilling, rock sampling and subsurface investigation projects.",

    image: "/images/categories/core.jpg",

    href: "/drilling-rigs/core-drilling-rigs",

    badge: "Exploration",

    bestFor: "Geological & Mineral Exploration",

    depth: "50–200 m",

    holeDiameter: "NQ / HQ / PQ",

    methods: [
      "Core Drilling",
      "Diamond Core",
    ],

    applications: [
      "Mining",
      "Geological Exploration",
      "Site Investigation",
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

  /* ============================================================
     7. WORKOVER RIGS
     ============================================================ */

  {
    id: "workover",

    title: "Workover Rigs",

    description:
      "Heavy-duty workover rigs developed for oil and gas well servicing, well intervention, rehabilitation, maintenance and production support operations.",

    image: "/images/categories/workover.jpg",

    href: "/drilling-rigs/workover-rigs",

    badge: "Oil & Gas",

    bestFor: "Oil & Gas Well Servicing",

    depth: "1500–2000 m",

    holeDiameter: "Application Specific",

    methods: [
      "Workover",
      "Well Intervention",
    ],

    applications: [
      "Oil & Gas",
      "Well Rehabilitation",
      "Well Maintenance",
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
];