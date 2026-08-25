import {
  BusinessHour,
  ContactCard,
  Department,
  OfficeLocation,
} from "./contact.types";

export const contactCards: ContactCard[] = [
  {
    title: "Call Us",
    value: "+91 91063 60907",
    description: "Speak directly with our engineering team.",
    href: "tel:+919106360907",
  },
  {
    title: "Email Us",
    value: "info@ngedrillsol.com",
    description: "Send us your technical inquiries.",
    href: "mailto:info@ngedrillsol.com",
  },
  {
    title: "WhatsApp",
    value: "+91 91063 60907",
    description: "Quick responses for international customers.",
    href: "https://wa.me/919106360907",
  },
  {
    title: "Head Office",
    value: "Mehsana, Gujarat, India",
    description: "Manufacturing & Engineering Facility",
    href: "#office",
  },
];

export const departments: Department[] = [
  {
    title: "Export Sales",
    description:
      "International inquiries, quotations and export documentation.",
    contact: "+91 91063 60907",
    email: "export@ngedrillsol.com",
  },
  {
    title: "Domestic Sales",
    description:
      "Sales assistance for customers across India.",
    contact: "+91 91063 60907",
    email: "sales@ngedrillsol.com",
  },
  {
    title: "Engineering Support",
    description:
      "Machine selection, technical consultation and project guidance.",
    contact: "+91 91063 60907",
    email: "engineering@ngedrillsol.com",
  },
  {
    title: "Service & Spare Parts",
    description:
      "After-sales support, spare parts and maintenance assistance.",
    contact: "+91 91063 60907",
    email: "service@ngedrillsol.com",
  },
];

export const businessHours: BusinessHour[] = [
  {
    day: "Monday",
    hours: "09:00 AM - 06:30 PM",
  },
  {
    day: "Tuesday",
    hours: "09:00 AM - 06:30 PM",
  },
  {
    day: "Wednesday",
    hours: "09:00 AM - 06:30 PM",
  },
  {
    day: "Thursday",
    hours: "09:00 AM - 06:30 PM",
  },
  {
    day: "Friday",
    hours: "09:00 AM - 06:30 PM",
  },
  {
    day: "Saturday",
    hours: "09:00 AM - 05:00 PM",
  },
  {
    day: "Sunday",
    hours: "Closed",
  },
];

export const office: OfficeLocation = {
  title: "NGE DRILLSOL PVT. LTD.",
  address:
    "Mehsana, Gujarat, India",
  phone: "+91 91063 60907",
  email: "info@ngedrillsol.com",
};