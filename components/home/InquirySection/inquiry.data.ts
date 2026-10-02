import { InquiryAction } from "./inquiry.types";
import { getWhatsAppEnquiryUrl } from "@/lib/whatsapp";

export const inquiryActions: InquiryAction[] = [
  {
    title: "Request a Quotation",
    subtitle: "Get pricing for your drilling project.",
    href: "/contact",
    icon: "📄",
    primary: true,
  },
  {
    title: "WhatsApp",
    subtitle: "Chat directly with our sales engineers.",
    href: getWhatsAppEnquiryUrl("I am enquiring from your homepage about a drilling project."),
    icon: "💬",
  },
  {
    title: "Email Us",
    subtitle: "Share your project requirements.",
    href: "mailto:info@ngedrill.com",
    icon: "✉️",
  },
  {
    title: "Call Our Team",
    subtitle: "Speak with an expert for quick guidance.",
    href: "tel:+91 9106360907",
    icon: "📞",
  },
];