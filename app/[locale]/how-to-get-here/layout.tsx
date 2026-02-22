import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Get to Sapzurro 2026 — All Routes & Prices | Sancibrian",
  description:
    "How to get to Sapzurro 2026: flights via Acandí (2.5h), boats from Turbo & Necoclí, overnight bus. Updated routes and prices from Medellín, Bogotá and Cartagena.",
  keywords: [
    "how to get to Sapzurro",
    "como llegar a Sapzurro",
    "Sapzurro travel guide 2026",
    "Medellín to Sapzurro",
    "vuelo Acandí Medellín",
    "lancha Turbo Capurganá",
    "boat to Sapzurro",
    "Sapzurro transportation",
    "Necoclí to Sapzurro",
    "San Blas to Cartagena route",
  ],
  openGraph: {
    title: "How to Get to Sapzurro 2026 — All Routes & Prices | Sancibrian",
    description:
      "Flights via Acandí (2.5h), boats from Turbo, bus from Medellín. All routes and 2026 prices for getting to Sapzurro, Colombia.",
    url: `${SITE_CONFIG.url}/how-to-get-here`,
    images: [
      {
        url: "/images/sapzurro/path.jpg",
        width: 1200,
        height: 630,
        alt: "Path to Sapzurro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get to Sapzurro 2026 — All Routes & Prices | Sancibrian",
    description:
      "Flights via Acandí (2.5h), boats from Turbo, bus from Medellín. All 2026 routes and prices to Sapzurro, Colombia.",
    images: ["/images/sapzurro/path.jpg"],
  },
};

export default function HowToGetHereLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
