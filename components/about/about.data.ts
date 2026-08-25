import {
  CompanyStat,
  CoreValue,
  Certification,
  LeadershipMember,
} from "./about.types";

export const companyStats: CompanyStat[] = [
  {
    label: "Years of Engineering Experience",
    value: "15+",
  },
  {
    label: "Countries Served",
    value: "25+",
  },
  {
    label: "Rig Models Developed",
    value: "20+",
  },
  {
    label: "Engineering Focus",
    value: "100%",
  },
];

export const coreValues: CoreValue[] = [
  {
    title: "Engineering Excellence",
    description:
      "Every drilling rig is engineered with a focus on performance, reliability and long-term productivity in demanding field conditions.",
    icon: "⚙️",
  },
  {
    title: "Customer-Driven Innovation",
    description:
      "We engineer solutions around the customer's geology, drilling objectives and operational requirements instead of offering standard machines.",
    icon: "💡",
  },
  {
    title: "Quality Without Compromise",
    description:
      "From design to manufacturing and inspection, every stage follows a rigorous quality-driven engineering process.",
    icon: "🏆",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We believe in supporting customers beyond delivery through technical assistance, training and reliable after-sales support.",
    icon: "🤝",
  },
];

export const certifications: Certification[] = [
  {
    title: "ISO 9001",
    image: "/images/certifications/iso.png",
  },
  {
    title: "CE Certification",
    image: "/images/certifications/ce.png",
  },
  {
    title: "Startup India",
    image: "/images/certifications/startup-india.png",
  },
  {
    title: "MSME",
    image: "/images/certifications/msme.png",
  },
  {
    title: "Make in India",
    image: "/images/certifications/make-in-india.png",
  },
];

export const leadership: LeadershipMember[] = [
  {
    name: "Kuldeep Suthar",
    designation: "Director",
    image: "/images/team/kuldeep-suthar.jpg",
    description:
      "Focused on developing world-class drilling rigs and engineering solutions that serve contractors, EPC companies and governments across global markets.",
  },
];