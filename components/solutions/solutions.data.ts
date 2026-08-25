import { SolutionCategory } from "./solutions.types";

export const solutionCategories: SolutionCategory[] = [
  {
    id: "geology",

    title: "Select by Geology",

    description:
      "Find the most suitable drilling rig according to your ground formation, rock hardness and drilling conditions.",

    icon: "🌍",

    image: "/images/solutions/geology.jpg",

    href: "/solutions/by-geology",

    badge: "Most Popular",

    suitableFor: [
      "Clay",
      "Sand",
      "Gravel",
      "Hard Rock",
      "Basalt",
      "Limestone",
    ],

    relatedRigs: [
      "NGDR3000",
      "NGDR2000",
      "NGDTH600R",
      "NGDTH300R",
    ],
  },

  {
    id: "application",

    title: "Select by Application",

    description:
      "Choose drilling equipment based on your project application including water wells, mining, solar and infrastructure.",

    icon: "🏗",

    image: "/images/solutions/application.jpg",

    href: "/solutions/by-application",

    badge: "Engineering Guide",

    suitableFor: [
      "Water Wells",
      "Mining",
      "Solar",
      "Infrastructure",
      "Agriculture",
      "Exploration",
    ],

    relatedRigs: [
      "NGDR2000",
      "NGDP60",
      "NGDP30",
      "NGWR3100",
    ],
  },

  {
    id: "recommendation",

    title: "Rig Recommendation",

    description:
      "Tell us your drilling depth, hole diameter, geology and application. We'll recommend the right drilling rig.",

    icon: "🎯",

    image: "/images/solutions/recommendation.jpg",

    href: "/solutions/rig-recommendation",

    badge: "Expert Support",

    suitableFor: [
      "New Buyers",
      "Contractors",
      "Government Projects",
      "Export Customers",
    ],

    relatedRigs: [
      "Complete Product Range",
    ],
  },

  {
    id: "methods",

    title: "Drilling Method Guide",

    description:
      "Understand Mud Rotary, DTH, Core Drilling and Piling methods before selecting a drilling machine.",

    icon: "⚙",

    image: "/images/solutions/methods.jpg",

    href: "/solutions/drilling-method-guide",

    badge: "Knowledge Hub",

    suitableFor: [
      "Mud Rotary",
      "DTH",
      "Core Drilling",
      "Piling",
    ],

    relatedRigs: [
      "NGDR Series",
      "NGDTH Series",
      "NGCORE Series",
      "NGDP Series",
    ],
  },
];