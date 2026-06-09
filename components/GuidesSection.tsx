import GuideCard from "@/components/GuideCard";
import { guides } from "@/lib/guides";

export default function GuidesSection() {
  return (
    <section id="guides" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-8 border-b border-earth-300 pb-12 md:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">Plan With Clear Answers</p>
          <div>
            <h2 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">Montana micro wedding guides for the decisions that shape the whole trip.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-earth-700">Start with the venue, lodging, season, and Glacier plan. The smaller details become easier once those choices are clear.</p>
          </div>
        </div>
        <div className="grid gap-14 lg:grid-cols-2">
          {guides.map((guide) => <GuideCard guide={guide} key={guide.slug} />)}
        </div>
      </div>
    </section>
  );
}
