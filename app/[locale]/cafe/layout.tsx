import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hangar Café & CoWorking Sapzurro | 24/7 — Cabaña Sancibrian",
  description:
    "Hangar Café — 24/7 Colombian specialty coffee, fresh breakfast & coworking in Sapzurro. Starlink WiFi, ocean views. Free access for all Cabaña Sancibrian guests.",
  keywords: [
    "Hangar Café Sapzurro",
    "coworking Sapzurro",
    "coffee shop Sapzurro",
    "remote work Sapzurro",
    "digital nomad workspace Colombia",
    "trabajo remoto Caribe Colombia",
    "café colombiano Sapzurro",
    "nómada digital Sapzurro",
    "Starlink coworking Colombia",
  ],
  openGraph: {
    title: "Hangar Café & CoWorking Sapzurro | 24/7 — Cabaña Sancibrian",
    description:
      "24/7 Colombian coffee, fresh breakfast & Starlink coworking space in Sapzurro. Ocean views included. Free for Sancibrian guests.",
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
