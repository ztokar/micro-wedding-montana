import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import GuideCard from "@/components/GuideCard";
import Footer from "@/components/Footer";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Montana Micro Wedding Planning Guides | Venues, Packages, Seasons, Glacier and Guest Travel | North Star Ranch",
  description: "Plan a Montana micro wedding near Whitefish and Glacier National Park with practical guides to wedding venues, packages, onsite lodging, seasons, and timelines.",
  alternates: { canonical: "https://microweddingmontana.com/guides" },
  openGraph: {
    title: "Montana Micro Wedding Planning Guides",
    description: "Clear answers for planning the venue, lodging, season, travel, and Glacier National Park portion of the trip.",
    url: "https://microweddingmontana.com/guides",
    siteName: "Montana Micro Wedding",
    type: "website",
    images: [{
      url: "/social/guides.jpg",
      width: 1200,
      height: 630,
      alt: "Montana Micro Wedding planning guides from North Star Ranch"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Montana Micro Wedding Planning Guides",
    description: "Clear answers for planning the whole Montana wedding trip.",
    images: ["/social/guides.jpg"]
  }
};

export default function GuidesPage() {
  const planningGuides = guides.filter((guide) => guide.category !== "local");
  const localGuides = guides.filter((guide) => guide.category === "local");
  return <main className="bg-cream">
    <div className="relative bg-earth-900 pb-20 pt-36 text-white">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-earth-300">Planning Library</p>
        <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">Montana micro wedding planning guides for the choices that shape the trip.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-earth-200">Start with the venue, lodging, season, guest travel, and how Glacier National Park fits into the wedding day.</p>
      </div>
    </div>
    <section className="border-b border-earth-300 bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">Plan the Big Decisions First</p>
          <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">Build the wedding around the guest experience.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-earth-800">
          <p>This is a guide to intimate wedding venue planning in Montana, from choosing the venue itself to guest travel and the days around the ceremony. A destination micro wedding is easier to plan when the venue, reception, lodging, and travel work together, so these guides compare the choices that affect the full trip, not only the ceremony view.</p>
          <p>North Star Ranch is a private 40-acre Montana wedding venue near Whitefish with onsite lodging across a five-bedroom chalet, four cabins, and an eight-room lodge. It gives a small destination group one gathering base near downtown Whitefish, Glacier Park International Airport, and Glacier National Park.</p>
          <p><Link href="/#contact" className="font-medium text-sage-800 underline decoration-sage-400 underline-offset-4">Ask North Star Ranch about current wedding options and availability</Link>, then use the planning guides below to compare packages, seasons, venue types, and the guest-day timeline.</p>
        </div>
      </div>
    </section>
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 lg:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">Planning the wedding</p>
      <section className="mt-10 grid gap-16 lg:grid-cols-2">
        {planningGuides.map((guide) => <GuideCard guide={guide} key={guide.slug} />)}
      </section>
      {localGuides.length > 0 && (
        <>
          <p className="mt-24 border-t border-earth-300 pt-12 text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">Whitefish local guides</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-earth-700">Practical guides for guest travel, lodging, dining, activities, and vendors around Whitefish and Glacier National Park.</p>
          <section className="mt-10 grid gap-16 lg:grid-cols-2">
            {localGuides.map((guide) => <GuideCard guide={guide} key={guide.slug} />)}
          </section>
        </>
      )}
    </div>
    <Footer />
  </main>;
}
