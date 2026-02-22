import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Captain's Cabin | Sapzurro Accommodation — Cabaña Sancibrian",
  description:
    "Book The Captain's Cabin in Sapzurro: 4 guests, 40m², Starlink WiFi, 24/7 BatX electricity, outdoor herb bath & vintage aviation décor. From $100,000 COP/person/night.",
  keywords: [
    "Sapzurro accommodation",
    "Captain's Cabin Sapzurro",
    "beachfront accommodation Sapzurro",
    "hospedaje Sapzurro Colombia",
    "alojamiento Sapzurro frente al mar",
    "digital nomad Caribbean Colombia",
    "Starlink Sapzurro",
    "24/7 electricity Sapzurro",
    "cabaña Sapzurro",
    "Darien Gap lodging",
  ],
  openGraph: {
    title: "The Captain's Cabin | Sapzurro Accommodation — Cabaña Sancibrian",
    description:
      "Book The Captain's Cabin in Sapzurro: 4 guests, 40m², Starlink WiFi, 24/7 electricity, outdoor herb bath. From $100,000 COP/person/night.",
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
    title: "The Captain's Cabin | Sapzurro Accommodation — Cabaña Sancibrian",
    description:
      "4 guests, 40m², Starlink WiFi, 24/7 electricity, outdoor herb bath. From $100,000 COP/person/night in Sapzurro, Colombia.",
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
