import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hébergement Sapzurro Colombie | Cabaña Sancibrian — Caraïbes & Darién",
  description:
    "Cabaña Sancibrian : cabane de luxe face à la mer à Sapzurro, Colombie. Starlink, électricité 24h/24, climatisation, accès direct à la plage. Dernière escale avant le Panama. Réservez via WhatsApp.",
  keywords: [
    "hébergement Sapzurro",
    "cabane Caraïbes Colombie",
    "dormir Sapzurro Darién",
    "logement Sapzurro Colombia",
    "Cabaña Sancibrian",
    "nuit Sapzurro",
    "hébergement Darién Gap",
    "Sapzurro Colombie voyage",
    "cabane front de mer Colombie",
    "nomade digital Caraïbes Colombie",
    "Starlink Sapzurro wifi",
    "San Blas escale Colombie",
    "Capurganá hébergement",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/fr`,
    languages: {
      en: `${SITE_CONFIG.url}/en`,
      es: `${SITE_CONFIG.url}/es`,
      fr: `${SITE_CONFIG.url}/fr`,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_CONFIG.url}/fr`,
    title: "Hébergement Sapzurro Colombie | Cabaña Sancibrian",
    description:
      "Cabane de luxe face à la mer à Sapzurro. Starlink, électricité 24h/24, café & coworking, accès plage. Dernière adresse avant le Panama.",
    siteName: "Cabaña Sancibrian",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cabaña Sancibrian — Sapzurro, Colombie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hébergement Sapzurro Colombie | Cabaña Sancibrian",
    description:
      "Cabane de luxe face à la mer à Sapzurro. Starlink, 24h/24 électricité, café & coworking.",
    images: ["/og-image.png"],
  },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
