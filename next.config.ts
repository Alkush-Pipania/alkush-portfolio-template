import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stealth.blr1.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
      },
    ],
  },
};

export default nextConfig;
