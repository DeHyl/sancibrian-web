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
  // Optimizaciones para mejor performance
  // experimental: {
  //   optimizeCss: true, // Deshabilitado temporalmente
  // },
};

export default nextConfig;
