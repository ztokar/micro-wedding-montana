import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://microweddingmontana.com";
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1 },
    { url: `${base}/guides`, lastModified: new Date(), priority: 0.8 },
    ...guides.map((guide) => ({
      url: `${base}/guides/${guide.slug}`,
      lastModified: new Date(),
      priority: 0.7
    }))
  ];
}
