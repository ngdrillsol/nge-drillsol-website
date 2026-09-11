import type { MetadataRoute } from "next";

import { getAllRigs } from "@/components/drilling-rigs/rig.data";
import { rigCategories } from "@/components/drilling-rigs/drilling-rigs.data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ngedrill.com";

  /*
   * Core pages that we know should be indexed.
   * We will add deeper Solutions / Industries / Markets pages
   * after verifying every route actually exists.
   */
  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/drilling-rigs",

    "/solutions",
    "/industries",
    "/services",

    "/projects",
    "/projects/adani-green-hydrogen",

    "/markets",

    "/resources",
  ];

  /*
   * Automatically use the REAL drilling-rig category URLs.
   */
  const categoryPaths = rigCategories.map(
    (category) => category.href
  );

  /*
   * Automatically use the REAL product slugs from rig.data.ts.
   *
   * Example:
   * ngdth600 -> /drilling-rigs/ngdth600
   */
  const rigPaths = getAllRigs().map(
    (rig) => `/drilling-rigs/${rig.slug}`
  );

  /*
   * Combine everything and remove duplicates.
   */
  const paths = Array.from(
    new Set([
      ...staticPaths,
      ...categoryPaths,
      ...rigPaths,
    ])
  );

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}