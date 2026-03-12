import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import CafeClient from "./CafeClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isEs = locale === "es";

  const title = isEs
    ? "Hangar Café & Coworking en Sapzurro | Cabaña Sancibrian"
    : "Hangar Café & Coworking Space in Sapzurro | Cabaña Sancibrian";

  const description = dict.cafe.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/cafe`,
      languages: { en: "/en/cafe", es: "/es/cafe" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_CONFIG.url}/${locale}/cafe`,
      images: [
        {
          url: `${SITE_CONFIG.url}/images/cafe/hangar-cafe-patio.png`,
          width: 1200,
          height: 630,
          alt: dict.cafe.title,
        },
      ],
    },
  };
}

export default function CafePage() {
  return <CafeClient />;
}
