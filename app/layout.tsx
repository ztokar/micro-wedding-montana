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
  title: "Plan a Montana Micro Wedding at a Private Whitefish Ranch | North Star Ranch",
  description: "Plan a private Montana micro wedding at North Star Ranch, a 40-acre Whitefish retreat with onsite lodging near Glacier National Park.",
  keywords: "montana micro wedding, micro wedding montana, small wedding venue montana, whitefish wedding venue, glacier national park micro wedding",
  alternates: {
    canonical: "https://microweddingmontana.com/",
    types: { "application/rss+xml": "https://microweddingmontana.com/feed.xml" }
  },
  applicationName: "Montana Micro Wedding",
  authors: [{ name: "North Star Ranch" }],
  creator: "North Star Ranch",
  publisher: "North Star Ranch",
  category: "Wedding Venue",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" }
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"]
  },
  verification: {
    google: "z2pEGNK_5W9MghXfleYgslkSEWsWppx4VdN56OdD5jc",
  },
  openGraph: {
    title: "Plan a Montana Micro Wedding at a Private Whitefish Ranch",
    description: "A private 40-acre Whitefish retreat with onsite lodging near Glacier National Park.",
    type: "website",
    url: "https://microweddingmontana.com",
    siteName: "Montana Micro Wedding",
    images: [{
      url: "/social/home.jpg",
      width: 1200,
      height: 630,
      alt: "Montana Micro Wedding at North Star Ranch near Whitefish and Glacier National Park"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan a Montana Micro Wedding at a Private Whitefish Ranch",
    description: "A private 40-acre Whitefish retreat with onsite lodging near Glacier National Park.",
    images: ["/social/home.jpg"]
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
    "logo": "https://microweddingmontana.com/icon.png",
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
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Montana Micro Wedding",
    "alternateName": "Micro Wedding Montana",
    "url": "https://microweddingmontana.com/"
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}
