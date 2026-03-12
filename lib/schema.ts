/**
 * schema.ts — TypeScript types for schema.org JSON-LD structured data
 * Used across layout.tsx (LodgingBusiness) and blog/[slug]/page.tsx (BlogPosting)
 */

interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

interface Rating {
  "@type": "Rating";
  ratingValue: string;
  bestRating?: string;
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: string;
  reviewCount: string;
  bestRating: string;
  worstRating: string;
}

interface Person {
  "@type": "Person";
  name: string;
}

interface Organization {
  "@type": "Organization";
  name: string;
  logo?: string;
  url?: string;
}

interface Review {
  "@type": "Review";
  author: Person;
  datePublished: string;
  reviewRating: Rating;
  reviewBody: string;
  publisher: Organization;
}

interface LocationFeatureSpecification {
  "@type": "LocationFeatureSpecification";
  name: string;
  value: boolean;
}

export interface LodgingBusinessSchema {
  "@context": "https://schema.org";
  "@type": "LodgingBusiness";
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  image: string[];
  address: PostalAddress;
  geo: GeoCoordinates;
  hasMap: string;
  priceRange: string;
  checkinTime: string;
  checkoutTime: string;
  numberOfRooms: number;
  petsAllowed: boolean;
  starRating: Rating;
  aggregateRating: AggregateRating;
  review: Review[];
  amenityFeature: LocationFeatureSpecification[];
  sameAs: string[];
}

export interface BlogPostingSchema {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: Person;
  publisher: Organization;
  url: string;
  inLanguage: string;
  keywords: string[];
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
}
