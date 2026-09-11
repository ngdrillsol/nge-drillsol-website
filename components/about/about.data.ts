import {
  CompanyStat,
  CoreValue,
  Certification,
  LeadershipMember,
} from "./about.types";

/* ============================================================
   COMPANY INFORMATION
   ============================================================ */

export const companyStats: CompanyStat[] = [
  {
    label: "Drilling Rig Categories",
    value: "7",
  },
  {
    label: "Manufacturing Base",
    value: "India",
  },
  {
    label: "Market Reach",
    value: "Global",
  },
  {
    label: "Engineering Approach",
    value: "Project-Based",
  },
];

/* ============================================================
   CORE VALUES
   ============================================================ */

export const coreValues: CoreValue[] = [
  {
    title: "Engineering Around the Project",

    description:
      "Drilling equipment selection and configuration should reflect geology, drilling depth, bore diameter, drilling method and operating requirements.",

    icon: "⚙️",
  },

  {
    title: "Practical Product Development",

    description:
      "Machine development is guided by field requirements, customer applications and the operating conditions in which drilling equipment will be used.",

    icon: "💡",
  },

  {
    title: "Quality-Focused Manufacturing",

    description:
      "Engineering, fabrication, mechanical assembly, hydraulic integration, inspection and functional checks form part of the drilling rig manufacturing process.",

    icon: "🏆",
  },

  {
    title: "Long-Term Equipment Support",

    description:
      "Our objective is to maintain technical communication with customers throughout machine selection, supply and continued equipment operation.",

    icon: "🤝",
  },
];

/* ============================================================
   CERTIFICATIONS, REGISTRATIONS & RECOGNITION
   ============================================================ */

export const certifications: Certification[] = [
  {
    title: "ISO 9001",
    image: "/images/certificates/iso.png",
  },

  {
    title: "CE Compliance",
    image: "/images/certificates/ce.png",
  },

  {
    title: "Startup India Recognition",
    image: "/images/certificates/startup-india.png",
  },

  {
    title: "MSME Registration",
    image: "/images/certificates/msme.png",
  },

  {
    title: "Made in India Manufacturing",
    image: "/images/certificates/make-in-india.png",
  },
];

/* ============================================================
   LEADERSHIP
   ============================================================ */

export const leadership: LeadershipMember[] = [
  {
    name: "Kuldeep Suthar",

    designation: "Director",

    image: "/images/team/kuldeep-suthar.jpg",

    description:
      "Kuldeep Suthar leads NGE Drillsol with a focus on drilling rig engineering, manufacturing and project-specific equipment solutions. His approach emphasizes understanding drilling requirements and developing practical equipment for water well, DTH, rotary, piling, core drilling and workover applications.",
  },
];