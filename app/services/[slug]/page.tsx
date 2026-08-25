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
    return {
      title: "Service | NGE DRILLSOL",
      description:
        "Engineering, drilling and technical services from NGE DRILLSOL.",
    };
  }

  return {
    title: `${service.title} | NGE DRILLSOL`,

    description: service.description,

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