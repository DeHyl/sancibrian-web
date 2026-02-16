import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Sapzurro | The Caribbean's Best-Kept Secret",
  description:
    "Discover Sapzurro, Colombia's hidden paradise at the Panama border. Pristine beaches, Darién biodiversity, and the perfect stopover for San Blas-Cartagena sailors.",
  keywords: [
    "Sapzurro Colombia",
    "Sapzurro Darién",
    "Sapzurro beach",
    "Caribbean Colombia",
    "Chocó Colombia",
    "San Blas to Cartagena",
    "Darién Gap tourism",
  ],
  openGraph: {
    title: "About Sapzurro | The Caribbean's Best-Kept Secret",
    description:
      "Pristine beaches, jungle biodiversity, and Caribbean paradise at the Colombia-Panama border.",
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
