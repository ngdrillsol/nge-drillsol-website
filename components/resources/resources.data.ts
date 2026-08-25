import {
  DownloadResource,
  FeaturedArticle,
  KnowledgeCategory,
} from "./resources.types";

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    id: "drilling-guides",
    title: "Drilling Guides",
    description:
      "Comprehensive guides covering drilling techniques, planning and best practices.",
    icon: "📖",
    articles: 25,
    href: "/resources/drilling-guides",
  },
  {
    id: "country-geology",
    title: "Country Geology",
    description:
      "Geological formations, groundwater conditions and drilling recommendations by country.",
    icon: "🌍",
    articles: 50,
    href: "/resources/country-geology",
  },
  {
    id: "formation-guide",
    title: "Rock & Formation Guide",
    description:
      "Understand clay, sand, gravel, limestone, basalt, granite and hard rock formations.",
    icon: "🪨",
    articles: 18,
    href: "/resources/rock-formations",
  },
  {
    id: "drilling-methods",
    title: "Drilling Methods",
    description:
      "Mud Rotary, DTH, Core Drilling, Piling, Reverse Circulation and more.",
    icon: "⚙",
    articles: 20,
    href: "/resources/drilling-methods",
  },
  {
    id: "rig-selection",
    title: "Rig Selection Guide",
    description:
      "Choose the right drilling rig according to depth, geology and application.",
    icon: "🚜",
    articles: 16,
    href: "/resources/rig-selection",
  },
  {
    id: "drill-bits",
    title: "Drill Bit Guide",
    description:
      "Selection guides for Drag Bits, Tricone Bits, PDC Bits and DTH Hammers.",
    icon: "🦷",
    articles: 15,
    href: "/resources/drill-bits",
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description:
      "Real drilling projects showcasing engineering solutions and field performance.",
    icon: "📑",
    articles: 12,
    href: "/resources/case-studies",
  },
  {
    id: "technical-faq",
    title: "Technical FAQs",
    description:
      "Frequently asked technical questions from drilling professionals worldwide.",
    icon: "❓",
    articles: 60,
    href: "/resources/faq",
  },
];

export const featuredArticles: FeaturedArticle[] = [
  {
    id: "mud-rotary-vs-dth",
    title: "Mud Rotary vs DTH Drilling: Which Method Should You Choose?",
    description:
      "Compare drilling methods based on geology, bore depth, productivity and project requirements.",
    category: "Drilling Methods",
    readTime: "8 min",
    image: "/images/resources/mud-rotary-vs-dth.jpg",
    href: "/resources/drilling-methods/mud-rotary-vs-dth",
  },
  {
    id: "kenya-geology",
    title: "Understanding Kenya's Geological Formations for Water Well Drilling",
    description:
      "Explore Kenya's major formations and recommended drilling approaches.",
    category: "Country Geology",
    readTime: "10 min",
    image: "/images/resources/kenya-geology.jpg",
    href: "/resources/country-geology/kenya",
  },
  {
    id: "choose-drilling-rig",
    title: "How to Select the Right Drilling Rig for Your Project",
    description:
      "A practical engineering guide for selecting drilling rigs according to geology and drilling objectives.",
    category: "Rig Selection",
    readTime: "12 min",
    image: "/images/resources/rig-selection.jpg",
    href: "/resources/rig-selection/how-to-select",
  },
  {
    id: "drag-bit-guide",
    title: "Complete Drag Bit Selection Guide",
    description:
      "Formation-wise recommendations for selecting drag bits for maximum drilling efficiency.",
    category: "Drill Bits",
    readTime: "9 min",
    image: "/images/resources/drag-bit-guide.jpg",
    href: "/resources/drill-bits/drag-bit-guide",
  },
];

export const downloadResources: DownloadResource[] = [
  {
    title: "NGE DRILLSOL Product Catalog",
    type: "PDF",
    size: "18 MB",
    href: "/downloads/nge-drillsol-catalog.pdf",
  },
  {
    title: "Water Well Drilling Rig Brochure",
    type: "PDF",
    size: "9 MB",
    href: "/downloads/water-well-rigs.pdf",
  },
  {
    title: "DTH Drilling Rig Brochure",
    type: "PDF",
    size: "8 MB",
    href: "/downloads/dth-rigs.pdf",
  },
  {
    title: "Piling Rig Brochure",
    type: "PDF",
    size: "7 MB",
    href: "/downloads/piling-rigs.pdf",
  },
];