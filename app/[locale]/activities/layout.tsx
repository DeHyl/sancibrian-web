import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Activities in Sapzurro | Things to Do",
  description:
    "Snorkeling, kayaking, hiking to La Miel beach, bird watching, fishing, and more. Discover adventures in Sapzurro and the Colombian Darién.",
  keywords: [
    "Sapzurro activities",
    "things to do Sapzurro",
    "snorkeling Sapzurro",
    "La Miel beach hike",
    "Capurganá day trip",
    "activities Darién Colombia",
    "Sapzurro tours",
  ],
  openGraph: {
    title: "Activities in Sapzurro | Things to Do",
    description:
      "Snorkeling, kayaking, jungle hikes, and more adventures in Caribbean paradise.",
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
