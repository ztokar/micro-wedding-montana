import { guides } from "@/lib/guides";

export function GET() {
  const items = guides.map((guide) => `
    <item>
      <title><![CDATA[${guide.title}]]></title>
      <link>https://microweddingmontana.com/guides/${guide.slug}</link>
      <guid>https://microweddingmontana.com/guides/${guide.slug}</guid>
      <description><![CDATA[${guide.description}]]></description>
      <pubDate>Tue, 09 Jun 2026 00:00:00 GMT</pubDate>
    </item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Montana Micro Wedding Guides</title><link>https://microweddingmontana.com/guides</link><description>Planning guides from North Star Ranch.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
