import {
  Drill,
  Mountain,
  Wrench,
  Settings,
  HardHat,
  Building2,
} from "lucide-react";

export const solutionData = [
  {
    id: 1,
    title: "Buy a Drilling Rig",
    description:
      "Explore our complete range of drilling rigs for water well, DTH, rotary, core drilling and piling applications.",
    icon: Drill,
    href: "/drilling-rigs",
  },

  {
    id: 2,
    title: "Select by Geology",
    description:
      "Choose the ideal drilling rig based on soil conditions, rock formation, drilling depth and application.",
    icon: Mountain,
    href: "/solutions/geology",
  },

  {
    id: 3,
    title: "Spare Parts",
    description:
      "Find genuine drilling accessories including drag bits, drill pipes, mud pumps, casing pipes and more.",
    icon: Wrench,
    href: "/services/spare-parts",
  },

  {
    id: 4,
    title: "Rig Customization",
    description:
      "Configure a drilling rig designed specifically for your project, truck chassis and drilling requirements.",
    icon: Settings,
    href: "/services/customization",
  },

  {
    id: 5,
    title: "Technical Consultancy",
    description:
      "Consult directly with our drilling engineers for machine selection, project planning and technical guidance.",
    icon: HardHat,
    href: "/services/consultancy",
  },

  {
    id: 6,
    title: "Government & NGO Projects",
    description:
      "Complete drilling solutions for government departments, NGOs, EPC contractors and public infrastructure projects.",
    icon: Building2,
    href: "/government-projects",
  },
];