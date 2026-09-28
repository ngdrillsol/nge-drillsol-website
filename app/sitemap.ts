import type { MetadataRoute } from "next";

import { getAllRigs } from "@/components/drilling-rigs/rig.data";
import { rigCategories } from "@/components/drilling-rigs/drilling-rigs.data";
import { countryMarkets } from "@/components/markets/markets.data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ngedrill.com";

  /*
   * Core pages that should be indexed.
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

    "/privacy-policy",
    "/terms-of-use",
    "/sitemap",
  ];

  /*
   * Automatically use the real drilling-rig category URLs.
   */
  const categoryPaths = rigCategories.map(
    (category) => category.href
  );

  /*
   * Automatically use the real product slugs from rig.data.ts.
   */
  const rigPaths = getAllRigs().map(
    (rig) => `/drilling-rigs/${rig.slug}`
  );

  /*
   * Automatically use all real country market URLs.
   *
   * Examples:
   * /markets/africa/kenya
   * /markets/africa/morocco
   * /markets/africa/tunisia
   */
  const marketPaths = countryMarkets.map(
    (market) => market.href
  );

  /*
   * Combine everything and remove duplicates.
   */
  const paths = Array.from(
    new Set([
      ...staticPaths,
      ...categoryPaths,
      ...rigPaths,
      ...marketPaths,
    ])
  );

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}