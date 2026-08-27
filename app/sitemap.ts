import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ngedrill.com";

  const pages = [
    "",

    "/about",
    "/contact",

    "/drilling-rigs",
    "/drilling-rigs/water-well-drilling-rigs",
    "/drilling-rigs/rotary-drilling-rigs",
    "/drilling-rigs/dth-drilling-rigs",
    "/drilling-rigs/core-drilling-rigs",
    "/drilling-rigs/piling-rigs",
    "/drilling-rigs/tractor-mounted-drilling-rigs",
    "/drilling-rigs/workover-rigs",

    "/drilling-rigs/ngdr3000",
    "/drilling-rigs/ngdr2000",
    "/drilling-rigs/ngdr1500",
    "/drilling-rigs/ngdr1000",
    "/drilling-rigs/ngdth600r",
    "/drilling-rigs/ngdth450r",
    "/drilling-rigs/ngdth300r",
    "/drilling-rigs/ngdth200r",
    "/drilling-rigs/ngdth50",
    "/drilling-rigs/ngdth30",
    "/drilling-rigs/ngwr3100",
    "/drilling-rigs/ngdp60",
    "/drilling-rigs/ngdp30",
    "/drilling-rigs/ngdp15",
    "/drilling-rigs/ngcore100",
    "/drilling-rigs/ngcore100-tractor",
    "/drilling-rigs/ngcore50",

    "/solutions",
    "/solutions/geology/clay",
    "/solutions/geology/sand",
    "/solutions/geology/gravel",
    "/solutions/geology/hard-rock",
    "/solutions/geology/limestone",
    "/solutions/geology/mixed-formation",

    "/industries",
    "/industries/water-supply",
    "/industries/agriculture",
    "/industries/mining",
    "/industries/infrastructure",
    "/industries/solar",
    "/industries/oil-gas",
    "/industries/geological-exploration",

    "/services",
    "/services/drilling-services",
    "/services/rig-customization",
    "/services/spare-parts",

    "/projects",
    "/projects/adani-green-hydrogen",

    "/markets",
    "/markets/africa/kenya",
    "/markets/africa/south-africa",
    "/markets/africa/morocco",
    "/markets/africa/egypt",
    "/markets/africa/tanzania",

    "/resources",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === ""
        ? "weekly"
        : path.startsWith("/resources")
          ? "weekly"
          : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/drilling-rigs"
          ? 0.95
          : path === "/solutions"
            ? 0.9
            : path === "/markets"
              ? 0.9
              : path === "/projects"
                ? 0.9
                : path.includes("ngdr") ||
                    path.includes("ngdth") ||
                    path.includes("ngdp")
                  ? 0.85
                  : 0.8,
  }));
}