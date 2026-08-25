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
}

export const platformData: PlatformData[] = [
  {
    id: "ngdr",

    application: "WATER WELL",

    title: "NGDR SERIES",

    tagline: "Universal Water Well Drilling Rigs",

    heroImage: "/machines/ngdr/ngdr2000.png",

    description:
      "The NGDR Series is engineered for high-performance water well drilling using rotary and DTH drilling methods. Designed for sand, clay, gravel, boulders and hard rock formations with excellent reliability and low operating cost.",

    models: [
      "NGDR1000",
      "NGDR1500",
      "NGDR2000",
      "NGDR3000",
    ],

    applications: [
      "Water Well",
      "Municipal Water Supply",
      "Agriculture",
      "Industrial Boreholes",
      "Geothermal",
    ],

    formations: [
      "Sand",
      "Clay",
      "Black Soil",
      "Gravel",
      "Boulders",
      "Hard Rock",
    ],

    drillingMethods: [
      "Mud Rotary",
      "DTH",
      "Direct Rotary",
    ],

    highlights: [
      "500–1500 Meter Capacity",
      "Low Operating Cost",
      "Heavy Duty Mast",
      "Hydraulic Controls",
      "Truck / Trailer Mounted",
    ],

    cta: "Explore NGDR Series",
  },

  {
    id: "ngdth",

    application: "HARD ROCK",

    title: "NGDTH SERIES",

    tagline: "Down The Hole Drilling Rigs",

    heroImage: "/machines/ngdth/ngdth600r.png",

    description:
      "Heavy-duty DTH drilling rigs developed for efficient drilling in hard rock formations with high penetration rates and excellent compressor compatibility.",

    models: [
      "NGDTH200R",
      "NGDTH300R",
      "NGDTH600R",
    ],

    applications: [
      "Water Well",
      "Blast Hole",
      "Mining",
      "Quarry",
    ],

    formations: [
      "Hard Rock",
      "Granite",
      "Basalt",
      "Limestone",
    ],

    drillingMethods: [
      "DTH",
      "Air Rotary",
    ],

    highlights: [
      "High Penetration",
      "Heavy Duty Feed",
      "Fast Rod Handling",
      "Hydraulic Controls",
    ],

    cta: "Explore NGDTH Series",
  },

  {
    id: "ngcore",

    application: "GEOLOGICAL",

    title: "NGCORE SERIES",

    tagline: "Core Drilling Rigs",

    heroImage: "/machines/ngcore/ngcore100.png",

    description:
      "Compact and powerful core drilling rigs for geological exploration, mineral investigation and engineering surveys.",

    models: [
      "NGCORE50",
      "NGCORE100",
    ],

    applications: [
      "Mineral Exploration",
      "Geological Survey",
      "Site Investigation",
    ],

    formations: [
      "Rock",
      "Granite",
      "Basalt",
    ],

    drillingMethods: [
      "Wireline Coring",
      "Conventional Coring",
    ],

    highlights: [
      "Compact Design",
      "High Accuracy",
      "Exploration Ready",
    ],

    cta: "Explore NGCORE Series",
  },

  {
  id: "ngpiling",

  application: "FOUNDATION",

  title: "NGPILING RIGS",

  tagline: "Solar & Foundation Piling",

  heroImage: "/images/platforms/ngpiling.png",

  description:
    "Foundation drilling rigs engineered for solar farms, infrastructure, bridge foundations, civil engineering and tractor-mounted piling applications. The platform includes dedicated piling rigs together with compact tractor-mounted DTH drilling rigs for versatile field operations.",

  models: [
    "NGDP15",
    "NGDP30",
    "NGDP60",
    "NGDTH30",
    "NGDTH50",
  ],

  applications: [
    "Solar Foundation",
    "Civil Engineering",
    "Micro Piling",
    "Water Well",
    "Infrastructure",
  ],

  formations: [
    "Clay",
    "Soil",
    "Weathered Rock",
    "Hard Rock",
  ],

  drillingMethods: [
    "Rotary",
    "Auger",
    "DTH",
  ],

  highlights: [
    "Dedicated Solar Piling Solutions",
    "Compact Tractor Mounted Configuration",
    "DTH Drilling Capability",
    "High Mobility Between Job Sites",
    "Low Operating Cost",
    "Suitable for Rural & Remote Projects",
    "Heavy Duty Mast Construction",
  ],

  cta:
    "Discuss your piling or tractor-mounted drilling project with our engineering team."
},

  {
    id: "ngwr",

    application: "OIL & GAS",

    title: "NGWR3100",

    tagline: "Workover Rig",

    heroImage: "/machines/ngwr/ngwr3100.png",

    description:
      "Heavy-duty workover rig designed for oilfield servicing and production well intervention with robust lifting capacity.",

    models: [
      "NGWR3100",
    ],

    applications: [
      "Oil Wells",
      "Gas Wells",
      "Workover",
    ],

    formations: [
      "Onshore",
    ],

    drillingMethods: [
      "Workover",
    ],

    highlights: [
      "Heavy Duty Mast",
      "High Hook Load",
      "Oilfield Ready",
    ],

    cta: "Explore NGWR3100",
  },
];