import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "striped-grouse-591.convex.cloud", protocol: "https"},
      { hostname: "dashboard.convex.dev/t/micky967/ticketr-9eadf/graceful-basilisk-414/files", protocol: "https"},
    ],
  },
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
