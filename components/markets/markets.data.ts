import { CountryMarket, MarketRegion } from "./markets.types";

export const marketRegions: MarketRegion[] = [
  {
    id: "africa",
    title: "Africa",
    description:
      "Country-specific drilling solutions based on geological conditions, drilling requirements and applications.",
    countries: 5,
    color: "#EAB308",
  },

  {
    id: "middle-east",
    title: "Middle East",
    description:
      "Heavy-duty drilling solutions for water, infrastructure and energy projects.",
    countries: 0,
    color: "#3B82F6",
  },

  {
    id: "asia",
    title: "Asia",
    description:
      "Drilling solutions for groundwater, infrastructure and industrial development.",
    countries: 0,
    color: "#10B981",
  },
];

export const countryMarkets: CountryMarket[] = [
  {
    id: "kenya",
    country: "Kenya",
    region: "Africa",

    geology: [
      "Basalt",
      "Volcanic Rock",
      "Clay",
      "Sand",
    ],

    geologyOverview: [
      "Kenya has highly variable geological conditions ranging from volcanic formations and basalt to unconsolidated clay and sand.",
      "Volcanic and hard-rock zones can require high-energy DTH drilling, while softer overburden may require mud rotary drilling.",
    ],

    applications: [
      "Water Wells",
      "Agriculture",
      "Infrastructure",
    ],

    challenges: [
      "Hard volcanic formations",
      "Variable overburden",
      "Mixed soft and hard formations",
    ],

    rigRequirements: [
      "High torque rotary capability",
      "DTH capability for hard rock",
      "Mud rotary capability for softer formations",
    ],

    drillingMethods: [
      "DTH",
      "Mud Rotary",
    ],

    drillingMethodReasons: [
      "DTH is suitable for hard volcanic and basalt formations where high penetration energy is required.",
      "Mud Rotary is suitable where clay, sand and weathered formations require circulation and borehole support.",
    ],

    recommendedRigs: [
      "NGDTH600R",
      "NGDR2000",
      "NGDR1500",
    ],

    rigReasons: [
      "NGDTH600R is suitable for demanding hard-rock and DTH applications.",
      "NGDR2000 provides a heavy-duty platform for deeper water-well and mixed-formation drilling.",
      "NGDR1500 is suitable for water-well projects requiring rotary drilling capability.",
    ],

    image: "/images/markets/kenya.jpg",

    href: "/markets/africa/kenya",
  },

  {
    id: "south-africa",
    country: "South Africa",
    region: "Africa",

    geology: [
      "Granite",
      "Gneiss",
      "Basalt",
      "Sandstone",
      "Hard Rock",
    ],

    geologyOverview: [
      "South Africa contains extensive crystalline basement rocks including granite and gneiss, together with basalt, sandstone and other sedimentary formations.",
      "Ground conditions can vary significantly between regions, making drilling-method selection dependent on formation hardness and project depth.",
    ],

    applications: [
      "Water Wells",
      "Mining",
      "Exploration",
      "Infrastructure",
    ],

    challenges: [
      "Hard crystalline formations",
      "Fractured rock",
      "Variable geological conditions",
    ],

    rigRequirements: [
      "High torque drilling system",
      "DTH capability for hard formations",
      "Strong feed and mast system",
    ],

    drillingMethods: [
      "DTH",
      "Mud Rotary",
      "Core Drilling",
    ],

    drillingMethodReasons: [
      "DTH is effective for hard crystalline formations such as granite, gneiss and basalt.",
      "Mud Rotary can be used through softer overburden and weathered formations.",
      "Core drilling is appropriate where geological investigation and continuous rock samples are required.",
    ],

    recommendedRigs: [
      "NGDTH600R",
      "NGDR2000",
      "NGCORE100",
    ],

    rigReasons: [
      "NGDTH600R is suitable for high-performance hard-rock drilling.",
      "NGDR2000 is suitable for deep and demanding water-well applications.",
      "NGCORE100 is suitable for geological and mineral exploration requiring core recovery.",
    ],

    image: "/images/markets/south-africa.jpg",

    href: "/markets/africa/south-africa",
  },

  {
    id: "morocco",
    country: "Morocco",
    region: "Africa",

    geology: [
      "Limestone",
      "Sandstone",
      "Granite",
      "Metamorphic Rock",
      "Hard Rock",
    ],

    geologyOverview: [
      "Morocco has diverse geological conditions including extensive sedimentary formations, limestone, sandstone and areas of crystalline and metamorphic rock.",
      "Hard limestone and fractured formations can create demanding drilling conditions, particularly where deeper groundwater targets are involved.",
    ],

    applications: [
      "Water Wells",
      "Agriculture",
      "Mining",
      "Infrastructure",
    ],

    challenges: [
      "Hard limestone formations",
      "Fractured rock",
      "Variable formation hardness",
    ],

    rigRequirements: [
      "High torque rotary system",
      "DTH capability",
      "Controlled feed for fractured formations",
    ],

    drillingMethods: [
      "DTH",
      "Mud Rotary",
    ],

    drillingMethodReasons: [
      "DTH is suitable for hard limestone and other competent rock formations.",
      "Mud Rotary is suitable for softer sedimentary formations and overburden.",
    ],

    recommendedRigs: [
      "NGDTH600R",
      "NGDR2000",
      "NGDR1500",
    ],

    rigReasons: [
      "NGDTH600R provides strong hard-rock drilling capability.",
      "NGDR2000 is suitable for deeper and heavier water-well drilling requirements.",
      "NGDR1500 provides a practical rotary platform for water-well projects.",
    ],

    image: "/images/markets/morocco.jpg",

    href: "/markets/africa/morocco",
  },

  {
    id: "egypt",
    country: "Egypt",
    region: "Africa",

    geology: [
      "Nubian Sandstone",
      "Limestone",
      "Alluvial Deposits",
      "Sand",
      "Basement Rock",
    ],

    geologyOverview: [
      "Egypt contains extensive sedimentary formations, including Nubian Sandstone, limestone and large areas of unconsolidated sand and alluvial deposits.",
      "Deep groundwater projects can require substantial drilling depth, while loose formations require controlled circulation and borehole stability.",
    ],

    applications: [
      "Water Wells",
      "Agriculture",
      "Industrial Water Supply",
      "Groundwater Development",
    ],

    challenges: [
      "Deep groundwater drilling",
      "Loose sand and alluvial formations",
      "Large depth requirements",
    ],

    rigRequirements: [
      "Deep drilling capability",
      "Reliable mud circulation",
      "High-capacity feed and hoisting system",
    ],

    drillingMethods: [
      "Mud Rotary",
      "Rotary",
      "DTH",
    ],

    drillingMethodReasons: [
      "Mud Rotary is suitable for unconsolidated sand, alluvial formations and deep groundwater drilling.",
      "Rotary drilling provides the torque and stability required for larger-diameter boreholes.",
      "DTH can be considered where hard basement or competent rock formations are encountered.",
    ],

    recommendedRigs: [
      "NGDR3000",
      "NGDR2000",
      "NGDR1500",
    ],

    rigReasons: [
      "NGDR3000 is suited to large, deep and demanding groundwater projects.",
      "NGDR2000 provides a heavy-duty solution for deep water-well drilling.",
      "NGDR1500 is suitable for medium-to-deep rotary water-well applications.",
    ],

    image: "/images/markets/egypt.jpg",

    href: "/markets/africa/egypt",
  },

  {
    id: "tanzania",
    country: "Tanzania",
    region: "Africa",

    geology: [
      "Granite",
      "Gneiss",
      "Volcanic Rock",
      "Basalt",
      "Sedimentary Rock",
    ],

    geologyOverview: [
      "Tanzania has diverse geological conditions including crystalline basement rocks, volcanic formations and sedimentary formations.",
      "Hard basement and volcanic formations can require DTH drilling, while weathered and sedimentary zones may be better suited to rotary or mud rotary methods.",
    ],

    applications: [
      "Water Wells",
      "Mining",
      "Agriculture",
      "Infrastructure",
    ],

    challenges: [
      "Hard crystalline basement",
      "Volcanic formations",
      "Variable overburden",
    ],

    rigRequirements: [
      "High torque drilling",
      "DTH capability for hard formations",
      "Mud rotary capability for overburden",
    ],

    drillingMethods: [
      "DTH",
      "Mud Rotary",
    ],

    drillingMethodReasons: [
      "DTH is suitable for hard crystalline basement, granite, gneiss and volcanic formations.",
      "Mud Rotary is suitable for softer weathered zones, clay, sand and overburden.",
    ],

    recommendedRigs: [
      "NGDTH600R",
      "NGDR2000",
      "NGDR1500",
    ],

    rigReasons: [
      "NGDTH600R is suitable for demanding hard-rock drilling.",
      "NGDR2000 is suitable for deeper water-well and mixed-formation projects.",
      "NGDR1500 provides a versatile rotary drilling platform for water-well applications.",
    ],

    image: "/images/markets/tanzania.jpg",

    href: "/markets/africa/tanzania",
  },
];