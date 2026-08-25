import { Service, WorkflowStep } from "./services.types";

export const services: Service[] = [
  {
    id: "drilling-services",

    title: "Drilling Services",

    description:
      "Engineering support for water well, mining, infrastructure, solar and industrial drilling projects from planning to execution.",

    icon: "🛠",

    image: "/images/services/drilling-services.jpg",

    features: [
      "Project Planning",
      "Rig Selection",
      "Drilling Method Selection",
      "Technical Guidance",
    ],

    relatedSolutions: [
      "Water Well Drilling",
      "Rotary Drilling",
      "DTH Drilling",
    ],

    href: "/services/drilling-services",
  },

  {
    id: "rig-customization",

    title: "Rig Customization",

    description:
      "Customized drilling rigs engineered according to drilling depth, geology, mast capacity, truck chassis and customer requirements.",

    icon: "⚙",

    image: "/images/services/rig-customization.jpg",

    features: [
      "Custom Mast Design",
      "Hydraulic Configuration",
      "Truck Mounting",
      "Customer Specifications",
    ],

    relatedSolutions: [
      "Custom Engineering",
      "Water Well",
      "Mining",
    ],

    href: "/services/rig-customization",
  },

  {
    id: "spare-parts",

    title: "Spare Parts",

    description:
      "Genuine drilling rig spare parts, hydraulic components, mud pumps, drill pipes and drilling accessories.",

    icon: "🔩",

    image: "/images/services/spare-parts.jpg",

    features: [
      "Hydraulic Parts",
      "Mud Pumps",
      "Drill Pipes",
      "Drill Bits",
    ],

    relatedSolutions: [
      "Maintenance",
      "Field Support",
    ],

    href: "/services/spare-parts",
  },

  {
    id: "consultancy",

    title: "Drilling Consultancy",

    description:
      "Professional engineering consultation for geology evaluation, drilling methods, rig selection and project planning.",

    icon: "👨‍💻",

    image: "/images/services/consultancy.jpg",

    features: [
      "Geology Study",
      "Rig Recommendation",
      "Drilling Strategy",
      "Project Planning",
    ],

    relatedSolutions: [
      "Engineering",
      "Project Design",
    ],

    href: "/services/drilling-consultancy",
  },

  {
    id: "tender-support",

    title: "Tender Technical Support",

    description:
      "Technical specifications, compliance documents and engineering support for government and international tenders.",

    icon: "📄",

    image: "/images/services/tender-support.jpg",

    features: [
      "Technical Documents",
      "Compliance",
      "Specifications",
      "Proposal Support",
    ],

    relatedSolutions: [
      "Government",
      "EPC Projects",
    ],

    href: "/services/tender-support",
  },

  {
    id: "commissioning",

    title: "Installation & Commissioning",

    description:
      "Machine installation, testing, commissioning and on-site technical support for successful project startup.",

    icon: "🚚",

    image: "/images/services/commissioning.jpg",

    features: [
      "Installation",
      "Machine Testing",
      "Commissioning",
      "Site Support",
    ],

    relatedSolutions: [
      "After Sales",
      "Training",
    ],

    href: "/services/installation-commissioning",
  },

  {
    id: "training",

    title: "Operator Training",

    description:
      "Practical operator training covering drilling techniques, maintenance and safe machine operation.",

    icon: "🎓",

    image: "/images/services/training.jpg",

    features: [
      "Machine Operation",
      "Maintenance",
      "Safety",
      "Best Practices",
    ],

    relatedSolutions: [
      "Commissioning",
      "Support",
    ],

    href: "/services/operator-training",
  },

  {
    id: "technical-support",

    title: "Technical Support",

    description:
      "Long-term engineering assistance, troubleshooting and technical guidance throughout the equipment lifecycle.",

    icon: "📞",

    image: "/images/services/technical-support.jpg",

    features: [
      "Troubleshooting",
      "Remote Support",
      "Engineering Help",
      "Spare Parts",
    ],

    relatedSolutions: [
      "After Sales",
      "Maintenance",
    ],

    href: "/services/technical-support",
  },
];

export const workflow: WorkflowStep[] = [
  {
    step: 1,
    title: "Requirement Discussion",
    description:
      "Understanding your project objectives, geology and drilling requirements.",
  },
  {
    step: 2,
    title: "Engineering Consultation",
    description:
      "Evaluating technical requirements and recommending the best drilling solution.",
  },
  {
    step: 3,
    title: "Rig Selection & Customization",
    description:
      "Selecting and configuring the drilling rig according to project needs.",
  },
  {
    step: 4,
    title: "Manufacturing & Inspection",
    description:
      "Precision manufacturing, quality inspection and testing before dispatch.",
  },
  {
    step: 5,
    title: "Export & Delivery",
    description:
      "Export documentation, packaging, logistics and international shipment.",
  },
  {
    step: 6,
    title: "Installation & Lifetime Support",
    description:
      "Commissioning, operator training, spare parts and ongoing engineering support.",
  },
];