import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Captain's Cabin | Cabaña Sancibrian",
  description:
    "Premium beachfront accommodation in Sapzurro. 4 guests, 40m², Starlink WiFi, 24/7 electricity, outdoor bath, and vintage aviation charm. Perfect for digital nomads.",
  keywords: [
    "Sapzurro cabin",
    "Captain's Cabin Sapzurro",
    "beachfront accommodation Sapzurro",
    "digital nomad Colombia",
    "Starlink Sapzurro",
    "24/7 electricity Sapzurro",
    "hospedaje Sapzurro",
    "alojamiento Sapzurro",
  ],
  openGraph: {
    title: "The Captain's Cabin | Cabaña Sancibrian",
    description:
      "Premium beachfront accommodation in Sapzurro. 4 guests, 40m², Starlink WiFi, 24/7 electricity, outdoor bath.",
    url: `${SITE_CONFIG.url}/cabin`,
    images: [
      {
        url: "/images/cabin/exterior.jpg",
        width: 1200,
        height: 630,
        alt: "The Captain's Cabin exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Captain's Cabin | Cabaña Sancibrian",
    description:
      "Premium beachfront accommodation in Sapzurro with Starlink WiFi and 24/7 electricity.",
    images: ["/images/cabin/exterior.jpg"],
  },
};

export default function CabinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
