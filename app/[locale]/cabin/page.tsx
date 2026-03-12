import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import CabinClient from "./CabinClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isEs = locale === "es";

  const title = isEs
    ? `${dict.cabin.title} — Suite a Pasos de Playa Bonita, Sapzurro | Cabaña Sancibrian`
    : `${dict.cabin.title} — Suite Steps from Playa Bonita, Sapzurro | Cabaña Sancibrian`;

  const description = isEs
    ? "Suite de 40m² a pocos pasos de Playa Bonita en Sapzurro, Colombia. WiFi Starlink, electricidad 24/7, bañera exterior de hierbas, Netflix y Alexa."
    : "40m² suite steps from Playa Bonita in Sapzurro, Colombia. Starlink WiFi, 24/7 electricity, outdoor herbal bathtub, Netflix and Alexa.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/cabin`,
      languages: { en: "/en/cabin", es: "/es/cabin" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_CONFIG.url}/${locale}/cabin`,
      images: [
        {
          url: `${SITE_CONFIG.url}/images/cabin/facade-front.jpg`,
          width: 1200,
          height: 630,
          alt: dict.cabin.title,
        },
      ],
    },
  };
}

export default function CabinPage() {
  return <CabinClient />;
}
