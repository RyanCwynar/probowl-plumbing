import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/probowl-plumbing",
  assetPrefix: "/probowl-plumbing/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
