import Link from "next/link";
import type { Guide } from "@/lib/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="group border-t border-earth-300 pt-5">
      <Link href={`/guides/${guide.slug}`} className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="overflow-hidden">
          <img src={guide.hero} alt={guide.heroAlt} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sage-700">{guide.eyebrow}</p>
          <h3 className="mb-3 text-3xl font-light leading-tight text-earth-900 transition-colors group-hover:text-sage-700">
            {guide.title}
          </h3>
          <p className="text-sm leading-7 text-earth-700">{guide.description}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-earth-900">Read guide</p>
        </div>
      </Link>
    </article>
  );
}
