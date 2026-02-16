import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Get to Sapzurro | Cabaña Sancibrian",
  description:
    "Complete travel guide to reach Sapzurro, Colombia. Routes from Medellín, Bogotá, Cartagena, and San Blas Islands. We help coordinate your entire journey.",
  keywords: [
    "how to get to Sapzurro",
    "Sapzurro travel guide",
    "como llegar a Sapzurro",
    "Sapzurro transportation",
    "Necoclí to Sapzurro",
    "boat to Sapzurro",
    "Medellín to Sapzurro",
    "San Blas to Cartagena route",
  ],
  openGraph: {
    title: "How to Get to Sapzurro | Cabaña Sancibrian",
    description:
      "Complete travel guide with routes from Medellín, Bogotá, Cartagena, and San Blas Islands.",
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
    title: "How to Get to Sapzurro | Cabaña Sancibrian",
    description:
      "Complete travel guide to reach Sapzurro, Colombia from anywhere.",
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
