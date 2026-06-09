import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import GuideCard from "@/components/GuideCard";
import Footer from "@/components/Footer";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Montana Micro Wedding Planning Guides | North Star Ranch",
  description: "Plan a Montana micro wedding near Whitefish and Glacier National Park with clear guides to venues, packages, seasons, lodging, and timelines.",
  alternates: { canonical: "https://microweddingmontana.com/guides" }
};

export default function GuidesPage() {
  return <main className="bg-cream">
    <div className="relative bg-earth-900 pb-20 pt-36 text-white">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-earth-300">Planning Library</p>
        <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">Clear answers for planning a Montana micro wedding.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-earth-200">Start with the choices that control the whole trip: venue, lodging, season, travel, and how Glacier National Park fits into the day.</p>
      </div>
    </div>
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
      {guides.map((guide) => <GuideCard guide={guide} key={guide.slug} />)}
    </section>
    <Footer />
  </main>;
}
