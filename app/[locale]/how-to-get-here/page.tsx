import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import HowToGetHereClient from "./HowToGetHereClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isEs = locale === "es";

  const title = isEs
    ? "Cómo Llegar a Sapzurro, Colombia 2026 — Guía Completa | Cabaña Sancibrian"
    : "How to Get to Sapzurro, Colombia 2026 — Complete Guide | Cabaña Sancibrian";

  const description = dict.howToGetHere.intro;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/how-to-get-here`,
      languages: { en: "/en/how-to-get-here", es: "/es/how-to-get-here" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_CONFIG.url}/${locale}/how-to-get-here`,
      images: [
        {
          url: `${SITE_CONFIG.url}/images/sapzurro/aerial-border.jpg`,
          width: 1200,
          height: 630,
          alt: dict.howToGetHere.title,
        },
      ],
    },
  };
}

export default function HowToGetHerePage() {
  return <HowToGetHereClient />;
}
