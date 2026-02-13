import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Montana Micro Wedding Venue | Whitefish, MT",
  description: "Experience the magic of an intimate Montana micro wedding. Affordable, natural, and breathtakingly beautiful ceremonies in the heart of Montana's pristine wilderness.",
  keywords: "montana micro wedding, intimate wedding montana, small wedding venue montana, mountain wedding montana, affordable wedding montana, natural wedding venue",
  verification: {
    google: "z2pEGNK_5W9MghXfleYgslkSEWsWppx4VdN56OdD5jc",
  },
  openGraph: {
    title: "Montana Micro Wedding Venue | Whitefish, MT",
    description: "Experience the magic of an intimate Montana micro wedding.",
    type: "website",
    url: "https://microweddingmontana.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WeddingVenue",
    "name": "Montana Micro Wedding",
    "description": "Intimate Montana micro wedding venue near Whitefish and Glacier National Park",
    "url": "https://microweddingmontana.com",
    "telephone": "+1-406-225-7268",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "355 Beaver Lake Rd",
      "addressLocality": "Whitefish",
      "addressRegion": "MT",
      "postalCode": "59937",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.4108",
      "longitude": "-114.3356"
    },
    "priceRange": "$$",
    "image": "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2940&auto=format&fit=crop",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "40-acre private ranch"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Mountain views"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Intimate ceremony space"
      }
    ]
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}
