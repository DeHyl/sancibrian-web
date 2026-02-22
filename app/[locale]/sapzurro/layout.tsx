import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sapzurro, Colombia — The Caribbean's Best-Kept Secret | Sancibrian",
  description:
    "Sapzurro Colombia: pristine beaches, Darién jungle & Colombia-Panama border. Perfect San Blas to Cartagena stopover. Discover the Darién's most beautiful hidden village.",
  keywords: [
    "Sapzurro Colombia",
    "Sapzurro Darién",
    "Sapzurro beach",
    "Caribbean Colombia",
    "Chocó Caribe Colombia",
    "San Blas to Cartagena stopover",
    "Darién Gap tourism",
    "Capurganá Sapzurro Colombia",
    "frontera Colombia Panamá playa",
    "Golfo de Urabá turismo",
  ],
  openGraph: {
    title: "Sapzurro, Colombia — The Caribbean's Best-Kept Secret | Sancibrian",
    description:
      "Pristine Caribbean beaches, Darién jungle & Colombia-Panama border. The perfect San Blas to Cartagena stopover.",
    url: `${SITE_CONFIG.url}/sapzurro`,
    images: [
      {
        url: "/images/sapzurro/beach-1.jpg",
        width: 1200,
        height: 630,
        alt: "Sapzurro beach",
      },
    ],
  },
};

export default function SapzurroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
