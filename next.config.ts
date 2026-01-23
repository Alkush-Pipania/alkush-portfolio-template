import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stealth.blr1.digitaloceanspaces.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/script.js",
        destination: `${process.env.NEXT_PUBLIC_RYBBIT_HOST}/api/script.js`,
      },
      {
        source: "/api/track",
        destination: `${process.env.NEXT_PUBLIC_RYBBIT_HOST}/api/track`,
      },
    ];
  },
};

export default nextConfig;
