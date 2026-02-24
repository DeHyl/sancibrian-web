import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/en/fr", destination: "/fr", permanent: false },
      { source: "/es/fr", destination: "/fr", permanent: false },
    ];
  },
};

export default nextConfig;
