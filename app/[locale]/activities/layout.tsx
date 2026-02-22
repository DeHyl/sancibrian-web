import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Things to Do in Sapzurro — Activities & Adventures | Sancibrian",
  description:
    "Best things to do in Sapzurro: snorkeling, kayaking, hike to La Miel (Panama), bird watching & Capurganá day trips. Adventures in the Colombian Darién from Cabaña Sancibrian.",
  keywords: [
    "things to do Sapzurro",
    "Sapzurro activities",
    "qué hacer en Sapzurro",
    "snorkeling Sapzurro",
    "La Miel beach hike Panama",
    "Capurganá day trip",
    "activities Darién Colombia",
    "Sapzurro tours",
    "actividades Capurganá",
    "senderismo Darién Colombia",
  ],
  openGraph: {
    title: "Things to Do in Sapzurro — Activities & Adventures | Sancibrian",
    description:
      "Snorkeling, kayaking, La Miel hike (Panama), bird watching & Capurganá day trips. Adventures in Colombian Caribbean paradise.",
    url: `${SITE_CONFIG.url}/activities`,
    images: [
      {
        url: "/images/sapzurro/beach-2.jpg",
        width: 1200,
        height: 630,
        alt: "Sapzurro activities",
      },
    ],
  },
};

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
