import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hangar Café & CoWorking | Cabaña Sancibrian",
  description:
    "Colombian coffee, fresh breakfast, and 24/7 coworking space with Starlink WiFi. Ocean view workspace in paradise. Perfect for digital nomads.",
  keywords: [
    "Hangar Café Sapzurro",
    "coworking Sapzurro",
    "coffee shop Sapzurro",
    "remote work Sapzurro",
    "digital nomad workspace Colombia",
    "café Sapzurro",
  ],
  openGraph: {
    title: "Hangar Café & CoWorking | Cabaña Sancibrian",
    description:
      "Colombian coffee, breakfast, and 24/7 coworking space with ocean views and Starlink WiFi.",
    url: `${SITE_CONFIG.url}/cafe`,
    images: [
      {
        url: "/images/cafe/interior-1.jpg",
        width: 1200,
        height: 630,
        alt: "Hangar Café interior",
      },
    ],
  },
};

export default function CafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
