export interface PlatformData {
  id: string;

  application: string;

  title: string;

  tagline: string;

  heroImage: string;

  description: string;

  models: string[];

  applications: string[];

  formations: string[];

  drillingMethods: string[];

  highlights: string[];

  cta: string;

  href: string;
}

export const platformData: PlatformData[] = [

  /* ============================================================
     NGDR WATER WELL / ROTARY SERIES
     ============================================================ */

  {
    id: "ngdr",

    application: "WATER WELL",

    title: "NGDR SERIES",

    tagline:
      "Deep Water Well & Rotary Drilling Rigs",

    heroImage:
      "/machines/ngdr/ngdr2000.png",

    description:
      "The NGDR Series is NGE Drillsol's heavy-duty water well and rotary drilling platform for deep boreholes and large-diameter groundwater projects. Available models support direct rotary, mud rotary, DTH and foam drilling according to machine configuration and project requirements.",

    models: [
      "NGDR1000",
      "NGDR1500",
      "NGDR2000",
      "NGDR3000",
    ],

    applications: [
      "Water Well Drilling",
      "Municipal Water Supply",
      "Irrigation",
      "Industrial Boreholes",
      "Groundwater Projects",
    ],

    formations: [
      "Sand",
      "Clay",
      "Gravel",
      "Boulders",
      "Mixed Formation",
      "Hard Rock",
    ],

    drillingMethods: [
      "Mud Rotary",
      "Direct Rotary",
      "DTH",
      "Foam Drilling",
    ],

    highlights: [
      "500–1500 m Published Capacity Range",
      "Deep Water Well Applications",
      "Large-Diameter Boreholes",
      "Multiple Drilling Methods",
      "Truck / Trailer / Skid Configurations",
    ],

    cta:
      "Explore NGDR Water Well Drilling Rigs",

    href:
      "/drilling-rigs/water-well-drilling-rigs",
  },

  /* ============================================================
     NGDTH SERIES
     ============================================================ */

  {
    id: "ngdth",

    application: "HARD ROCK",

    title: "NGDTH SERIES",

    tagline:
      "DTH & Hard Rock Drilling Rigs",

    heroImage:
      "/machines/ngdth/ngdth600r.png",

    description:
      "The NGDTH Series includes DTH and DTH-cum-rotary drilling rigs developed for water wells and hard-rock drilling applications. Machine selection depends on required depth, bore diameter, compressor capacity, geological formation and drilling method.",

    models: [
      "NGDTH200R",
      "NGDTH300R",
      "NGDTH450R",
      "NGDTH600R",
      "NGDTH30",
      "NGDTH50",
    ],

    applications: [
      "Water Well Drilling",
      "Hard Rock Drilling",
      "Mining",
      "Exploration",
      "Infrastructure",
    ],

    formations: [
      "Hard Rock",
      "Granite",
      "Basalt",
      "Quartz",
      "Mixed Formation",
    ],

    drillingMethods: [
      "DTH",
      "Air Drilling",
      "Rotary",
    ],

    highlights: [
      "Hard Rock Drilling",
      "Hydraulic / Top Drive Configurations",
      "Multiple Depth Classes",
      "Truck / Trailer / Tractor Options",
      "Water Well Applications",
    ],

    cta:
      "Explore NGDTH Drilling Rigs",

    href:
      "/drilling-rigs/dth-drilling-rigs",
  },

  /* ============================================================
     NGCORE SERIES
     ============================================================ */

  {
    id: "ngcore",

    application: "GEOLOGICAL",

    title: "NGCORE SERIES",

    tagline:
      "Core & Exploration Drilling Rigs",

    heroImage:
      "/machines/ngcore/ngcore100.png",

    description:
      "The NGCORE Series includes compact core drilling rigs for geological exploration, mineral investigation, geotechnical work and subsurface investigation. Trolley-mounted and tractor-mounted configurations are available depending on the selected model.",

    models: [
      "NGCORE50 (Trolley)",
      "NGCORE100 (Trolley)",
      "NGCORE100 (Tractor)",
    ],

    applications: [
      "Mineral Exploration",
      "Geological Investigation",
      "Geotechnical Investigation",
      "Site Investigation",
      "Core Sampling",
    ],

    formations: [
      "Rock",
      "Mineral Zones",
      "Granite",
      "Basalt",
      "Mixed Formation",
    ],

    drillingMethods: [
      "Core Drilling",
      "Diamond Core Drilling",
    ],

    highlights: [
      "Trolley & Tractor Configurations",
      "Geological Exploration",
      "Core Sampling",
      "Compact Field Configuration",
      "NQ / HQ / PQ Applications",
    ],

    cta:
      "Explore NGCORE Drilling Rigs",

    href:
      "/drilling-rigs/core-drilling-rigs",
  },

  /* ============================================================
     PILING / TRACTOR PLATFORM
     ============================================================ */

  {
    id: "ngpiling",

    application: "FOUNDATION",

    title: "NG PILING RIGS",

    tagline:
      "Solar, Foundation & Tractor-Mounted Drilling",

    heroImage:
      "/images/platforms/ngpiling.png",

    description:
      "NGE Drillsol piling and tractor-mounted drilling rigs are developed for solar foundations, civil foundations, infrastructure projects and compact field drilling. The range includes dedicated NGDP piling rigs together with tractor-mounted DTH machines for mobile drilling operations.",

    models: [
      "NGDP15",
      "NGDP30",
      "NGDP60",
      "NGDTH30",
      "NGDTH50",
    ],

    applications: [
      "Solar Foundations",
      "Civil Foundations",
      "Micro Piling",
      "Infrastructure",
      "Remote Drilling Projects",
    ],

    formations: [
      "Clay",
      "Soil",
      "Mixed Ground",
      "Weathered Rock",
      "Hard Rock",
    ],

    drillingMethods: [
      "Dry Piling",
      "Wet Piling",
      "Rotary",
      "DTH",
    ],

    highlights: [
      "Solar Foundation Drilling",
      "Compact Tractor-Mounted Options",
      "Foundation & Piling Applications",
      "High Field Mobility",
      "Project-Specific Configuration",
    ],

    cta:
      "Explore Piling & Tractor-Mounted Rigs",

    href:
      "/drilling-rigs/piling-rigs",
  },

  /* ============================================================
     WORKOVER PLATFORM
     ============================================================ */

  {
    id: "ngwr",

    application: "OIL & GAS",

    title: "NGWR SERIES",

    tagline:
      "Workover & Well Servicing Rigs",

    heroImage:
      "/machines/ngwr/ngwr3100.png",

    description:
      "The NGWR platform is developed for oil and gas well servicing, workover, rehabilitation and production-support operations. The NGWR3100 is the current heavy-duty workover model listed in the NGE Drillsol rig range.",

    models: [
      "NGWR3100",
    ],

    applications: [
      "Oil Wells",
      "Gas Wells",
      "Workover Operations",
      "Well Rehabilitation",
      "Production Support",
    ],

    formations: [
      "Oilfield Operations",
      "Gas Field Operations",
    ],

    drillingMethods: [
      "Workover",
      "Well Intervention",
    ],

    highlights: [
      "Heavy-Duty Workover Platform",
      "High Pull Capacity",
      "Well Servicing Applications",
      "Oil & Gas Operations",
    ],

    cta:
      "Explore NGWR Workover Rigs",

    href:
      "/drilling-rigs/workover-rigs",
  },
];