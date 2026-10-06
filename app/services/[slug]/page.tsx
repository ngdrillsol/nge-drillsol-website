import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServiceDetailPage from "@/components/services/servicedetailpage";
import { services } from "@/components/services/services.data";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ============================================================
   FIND SERVICE
   ============================================================ */

function getServiceBySlug(slug: string) {
  return services.find((service) => {
    const serviceSlug = service.href.split("/").filter(Boolean).pop();

    return serviceSlug?.toLowerCase() === slug.toLowerCase();
  });
}

/* ============================================================
   STATIC PARAMS
   Creates pages for every service already defined
   in services.data.ts
   ============================================================ */

export async function generateStaticParams() {
  return services.map((service) => {
    const slug = service.href.split("/").filter(Boolean).pop();

    return {
      slug,
    };
  });
}

/* ============================================================
   SEO METADATA
   ============================================================ */

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return {
    title: service.title,

    description: service.description,
    alternates: { canonical: service.href },
    openGraph: {
      title: `${service.title} | NGE Drillsol`, description: service.description,
      url: service.href, type: "website", siteName: "NGE Drillsol", locale: "en_US",
    },
    twitter: {
      card: "summary_large_image", title: `${service.title} | NGE Drillsol`, description: service.description,
    },

    keywords: [
      service.title,
      "NGE DRILLSOL",
      "drilling services",
      "drilling engineering",
      "drilling equipment",
      ...service.relatedSolutions,
    ],
  };
}

/* ============================================================
   PAGE
   ============================================================ */

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  /* ==========================================================
     INVALID SERVICE
     ========================================================== */

  if (!service) {
    notFound();
  }

  /* ==========================================================
     SERVICE DETAIL
     ========================================================== */

  return <ServiceDetailPage service={service} />;
}