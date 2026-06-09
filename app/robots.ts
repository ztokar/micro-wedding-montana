import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot"], allow: "/" }
    ],
    sitemap: "https://microweddingmontana.com/sitemap.xml"
  };
}
