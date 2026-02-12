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
  title: "Montana Micro Wedding | Intimate Mountain Wedding Venue",
  description: "Experience the magic of an intimate Montana micro wedding. Affordable, natural, and breathtakingly beautiful ceremonies in the heart of Montana's pristine wilderness.",
  keywords: "montana micro wedding, intimate wedding montana, small wedding venue montana, mountain wedding montana, affordable wedding montana, natural wedding venue",
  verification: {
    google: "z2pEGNK_5W9MghXfleYgslkSEWsWppx4VdN56OdD5jc",
  },
  openGraph: {
    title: "Montana Micro Wedding | Intimate Mountain Wedding Venue",
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
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}
