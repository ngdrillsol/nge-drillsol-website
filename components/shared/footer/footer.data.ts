import {
  ContactItem,
  FooterSection,
  SocialLink,
} from "./footer.types";

export const footerSections: FooterSection[] = [
  {
    title: "Drilling Rigs",
    links: [
      {
        title: "Water Well Rigs",
        href: "/drilling-rigs",
      },
      {
        title: "DTH Drilling Rigs",
        href: "/drilling-rigs",
      },
      {
        title: "Core Drilling Rigs",
        href: "/drilling-rigs",
      },
      {
        title: "Piling Rigs",
        href: "/drilling-rigs",
      },
    ],
  },

  {
    title: "Solutions",
    links: [
      {
        title: "Engineering Solutions",
        href: "/solutions",
      },
      {
        title: "Industries",
        href: "/industries",
      },
      {
        title: "Projects",
        href: "/projects",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        title: "Knowledge Hub",
        href: "/knowledge",
      },
      {
        title: "Blogs",
        href: "/blogs",
      },
      {
        title: "Downloads",
        href: "/downloads",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
    ],
  },
];

export const contactItems: ContactItem[] = [
  {
    icon: "📍",
    title: "Address",
    value: "Mehsana, Gujarat, India",
    href: "#",
  },
  {
    icon: "📞",
    title: "Phone",
    value: "+91 9106360907",
    href: "tel:+919106360907",
  },
  {
    icon: "✉️",
    title: "Email",
    value: "info@ngedrill.com",
    href: "mailto:info@ngedrill.com",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
  },
];