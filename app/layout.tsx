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
  metadataBase: new URL("https://microweddingmontana.com"),
  title: "Montana Micro Wedding Venue | Private Whitefish Ranch Near Glacier | North Star Ranch",
  description: "Plan a private Montana micro wedding at North Star Ranch, a 40-acre Whitefish retreat with onsite lodging near Glacier National Park.",
  keywords: "montana micro wedding, micro wedding montana, small wedding venue montana, whitefish wedding venue, glacier national park micro wedding",
  alternates: { canonical: "https://microweddingmontana.com/" },
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
    "name": "North Star Ranch",
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
    "image": "https://microweddingmontana.com/images/ranch-hero.jpg",
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
