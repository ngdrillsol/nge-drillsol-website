import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/drilling-rigs/ngdth600r",
        destination: "/drilling-rigs/ngdth600",
        permanent: true,
      },
      {
        source: "/drilling-rigs/ngdth300r",
        destination: "/drilling-rigs/ngdth300",
        permanent: true,
      },
      {
        source: "/drilling-rigs/ngdth200r",
        destination: "/drilling-rigs/ngdth200",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;