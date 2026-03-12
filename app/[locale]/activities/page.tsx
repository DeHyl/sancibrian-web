import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import ActivitiesClient from "./ActivitiesClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isEs = locale === "es";

  const title = isEs
    ? "Qué Hacer en Sapzurro — Actividades y Aventuras | Cabaña Sancibrian"
    : "Things to Do in Sapzurro — Activities & Adventures | Cabaña Sancibrian";

  const description = dict.activities.intro;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/activities`,
      languages: { en: "/en/activities", es: "/es/activities" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_CONFIG.url}/${locale}/activities`,
      images: [
        {
          url: `${SITE_CONFIG.url}/images/sapzurro/aerial-border.jpg`,
          width: 1200,
          height: 630,
          alt: dict.activities.heroTitle,
        },
      ],
    },
  };
}

export default function ActivitiesPage() {
  return <ActivitiesClient />;
}
