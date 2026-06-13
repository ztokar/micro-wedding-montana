import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideLayout from "@/components/GuideLayout";
import { guideMap, guides } from "@/lib/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideMap[slug];
  if (!guide) return {};
  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: { canonical: `https://microweddingmontana.com/guides/${guide.slug}` },
    openGraph: {
      title: guide.seoTitle,
      description: guide.description,
      url: `https://microweddingmontana.com/guides/${guide.slug}`,
      siteName: "Montana Micro Wedding",
      images: [{
        url: `/social/${guide.slug}.jpg`,
        width: 1200,
        height: 630,
        alt: guide.seoTitle
      }],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: guide.seoTitle,
      description: guide.description,
      images: [`/social/${guide.slug}.jpg`]
    }
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideMap[slug];
  if (!guide) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: "2026-06-14",
    author: { "@type": "Organization", name: "North Star Ranch" },
    publisher: { "@type": "Organization", name: "North Star Ranch" },
    image: `https://microweddingmontana.com/social/${guide.slug}.jpg`,
    mainEntityOfPage: `https://microweddingmontana.com/guides/${guide.slug}`
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <GuideLayout guide={guide} />
  </>;
}
