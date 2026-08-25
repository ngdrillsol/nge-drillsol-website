import { Industry } from "./industries.types";

export const industries: Industry[] = [
  {
    id: "water-supply",

    title: "Water Supply",

    description:
      "Reliable drilling solutions for municipal water supply, rural drinking water schemes, commercial water wells and deep groundwater development.",

    icon: "💧",

    image: "/images/industries/water-supply.jpg",

    engineeringInformation:
      "Water supply drilling involves constructing reliable boreholes to access groundwater for municipal, rural, commercial and industrial use. Projects can range from relatively shallow wells to deep groundwater development and may encounter changing geological formations with depth.",

    applications: [
      "Municipal Water Supply",
      "Rural Water Schemes",
      "Commercial Borewells",
      "Industrial Water Supply",
    ],

    geology: [
      "Clay",
      "Sand",
      "Gravel",
      "Basalt",
      "Granite",
    ],

    challenges: [
      "Variable geological formations",
      "Borehole stability in loose formations",
      "Increasing drilling depth",
      "Large borehole diameter requirements",
      "Hard-rock intervals",
      "Casing and borehole construction",
    ],

    rigRequirements: [
      "Adequate rotary torque",
      "Controlled feed and pullback",
      "Reliable mud circulation",
      "Suitable depth capability",
      "Large-diameter drilling capability",
      "Casing handling capability",
    ],

    recommendedRigs: [
      "NGDR3000",
      "NGDR2000",
      "NGDR1500",
      "NGDR1000",
    ],

    href: "/industries/water-supply",
  },

  {
    id: "agriculture",

    title: "Agriculture & Irrigation",

    description:
      "Efficient drilling rigs for irrigation borewells, agricultural water supply and groundwater development for farming applications.",

    icon: "🌾",

    image: "/images/industries/agriculture.jpg",

    engineeringInformation:
      "Agricultural drilling focuses on developing dependable groundwater sources for irrigation and farm water supply. The drilling system should provide a practical balance between drilling depth, bore diameter, formation conditions, mobility and operating cost.",

    applications: [
      "Irrigation",
      "Farm Water Supply",
      "Tube Wells",
      "Groundwater Development",
    ],

    geology: [
      "Clay",
      "Sand",
      "Gravel",
    ],

    challenges: [
      "Loose and unstable formations",
      "Changing groundwater conditions",
      "Borehole collapse",
      "Efficient cuttings removal",
      "Required drilling depth",
      "Cost-effective field operation",
    ],

    rigRequirements: [
      "Controlled rotary drilling",
      "Adequate feed force",
      "Reliable mud circulation",
      "Suitable borehole depth capability",
      "Casing handling capability",
      "Practical field mobility",
    ],

    recommendedRigs: [
      "NGDR1500",
      "NGDR1000",
      "NGDTH300R",
    ],

    href: "/industries/agriculture",
  },

  {
    id: "mining",

    title: "Mining",

    description:
      "Drilling solutions for mineral exploration, production drilling, blast hole drilling and mining support operations.",

    icon: "⛏",

    image: "/images/industries/mining.jpg",

    engineeringInformation:
      "Mining drilling can involve mineral exploration, hard-rock drilling, blast-hole applications and other drilling activities associated with mine development. Equipment selection depends strongly on rock strength, hole diameter, required depth and the drilling objective.",

    applications: [
      "Mineral Exploration",
      "Blast Hole Drilling",
      "Mine Development",
    ],

    geology: [
      "Granite",
      "Basalt",
      "Hard Rock",
    ],

    challenges: [
      "High rock strength",
      "High tooling wear",
      "Hard-rock penetration",
      "Variable and fractured formations",
      "High drilling loads",
      "Maintaining drilling productivity",
    ],

    rigRequirements: [
      "High drilling energy",
      "Strong feed and pullback capability",
      "Adequate rotary torque",
      "Reliable hydraulic power",
      "Suitable compressor capability for DTH",
      "Heavy-duty drilling tooling compatibility",
    ],

    recommendedRigs: [
      "NGDTH600R",
      "NGDTH450R",
      "NGCORE100",
    ],

    href: "/industries/mining",
  },

  {
    id: "infrastructure",

    title: "Infrastructure",

    description:
      "Foundation drilling solutions for bridges, highways, transmission lines, commercial buildings and civil engineering projects.",

    icon: "🏗",

    image: "/images/industries/infrastructure.jpg",

    engineeringInformation:
      "Infrastructure drilling supports foundation and civil engineering projects where reliable and accurately positioned boreholes or piles are required. Ground conditions can vary considerably between project sites and may include soil, mixed formations and hard rock.",

    applications: [
      "Bridge Foundations",
      "Highways",
      "Commercial Construction",
      "Transmission Towers",
    ],

    geology: [
      "Mixed Formations",
      "Hard Rock",
    ],

    challenges: [
      "Variable ground conditions",
      "Foundation depth requirements",
      "Hard or compact ground",
      "Maintaining drilling accuracy",
      "High-volume repetitive drilling",
      "Site access and positioning",
    ],

    rigRequirements: [
      "Controlled feed system",
      "Adequate drilling torque",
      "Suitable piling depth capability",
      "Reliable hydraulic system",
      "Stable drilling platform",
      "Efficient positioning and operation",
    ],

    recommendedRigs: [
      "NGDP60",
      "NGDP30",
      "NGDP15",
    ],

    href: "/industries/infrastructure",
  },

  {
    id: "solar",

    title: "Solar",

    description:
      "Pile foundation drilling solutions for utility-scale solar parks, renewable energy projects and photovoltaic installations.",

    icon: "☀",

    image: "/images/industries/solar.jpg",

    engineeringInformation:
      "Solar infrastructure drilling involves creating large numbers of foundation holes for photovoltaic structures. Productivity, consistent hole dimensions, ground adaptability and machine mobility are important considerations for large solar projects.",

    applications: [
      "Solar Parks",
      "PV Foundations",
      "Renewable Energy",
    ],

    geology: [
      "Clay",
      "Sand",
      "Gravel",
      "Hard Rock",
    ],

    challenges: [
      "Large number of repetitive holes",
      "Variable ground conditions",
      "Required foundation depth",
      "Consistent hole diameter",
      "High daily productivity",
      "Site mobility and positioning",
    ],

    rigRequirements: [
      "Fast and controlled feed",
      "Reliable rotary or DTH capability",
      "Suitable piling depth",
      "Efficient positioning",
      "Reliable hydraulic system",
      "High operational productivity",
    ],

    recommendedRigs: [
      "NGDP60",
      "NGDP30",
      "NGDP15",
    ],

    href: "/industries/solar",
  },

  {
    id: "oil-gas",

    title: "Oil & Gas",

    description:
      "Heavy-duty drilling equipment and workover rigs for upstream oilfield support and energy sector operations.",

    icon: "🛢",

    image: "/images/industries/oil-gas.jpg",

    engineeringInformation:
      "Oil and gas field support operations can require heavy-duty equipment for well servicing, workover and related intervention activities. Equipment must be selected according to the specific well, depth, intervention requirements and operating conditions.",

    applications: [
      "Workover Operations",
      "Oilfield Services",
      "Energy Projects",
    ],

    geology: [
      "Sedimentary Rock",
      "Sandstone",
      "Limestone",
    ],

    challenges: [
      "Heavy well-service operations",
      "Deep well intervention requirements",
      "High equipment loads",
      "Reliable hydraulic and mechanical operation",
      "Well-site operating conditions",
      "Safe and controlled equipment handling",
    ],

    rigRequirements: [
      "High structural capacity",
      "Strong hoisting and pulling capability",
      "Reliable hydraulic power",
      "Heavy-duty mast and support structure",
      "Suitable well-service configuration",
      "Reliable control systems",
    ],

    recommendedRigs: [
      "NGWR3100",
    ],

    href: "/industries/oil-gas",
  },

  {
    id: "geological-exploration",

    title: "Geological Exploration",

    description:
      "Core drilling systems for geological mapping, geotechnical investigation, mineral exploration and scientific studies.",

    icon: "🧪",

    image: "/images/industries/geological-exploration.jpg",

    engineeringInformation:
      "Geological exploration drilling is focused on obtaining reliable subsurface information through core samples and investigation boreholes. Drilling performance depends on formation conditions, required core diameter, target depth and sample quality.",

    applications: [
      "Core Sampling",
      "Geotechnical Investigation",
      "Mineral Exploration",
    ],

    geology: [
      "All Geological Formations",
    ],

    challenges: [
      "Maintaining core recovery",
      "Variable rock formations",
      "Tooling wear",
      "Accurate drilling control",
      "Required exploration depth",
      "Preserving sample quality",
    ],

    rigRequirements: [
      "Controlled rotary speed",
      "Precise feed control",
      "Suitable core drilling system",
      "Reliable circulation",
      "Appropriate drill-string configuration",
      "Compatible core tooling",
    ],

    recommendedRigs: [
      "NGCORE100",
      "NGCORE50",
    ],

    href: "/industries/geological-exploration",
  },
];