# Micro Wedding Montana

Production website for North Star Ranch's Montana micro-wedding offering.

- Live site: https://microweddingmontana.com/
- Planning library: https://microweddingmontana.com/guides
- Repository: https://github.com/ztokar/micro-wedding-montana
- Hosting: Vercel through GitHub `master`

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Vercel

## Local Commands

```powershell
npm install
npm run dev
npm run build
```

`npm run build` is the required pre-publish check. Vercel deploys after a push to `master`.

## Content Structure

- `app/page.tsx`: homepage and money page
- `app/guides/page.tsx`: planning-guide library
- `app/guides/[slug]/page.tsx`: shared guide route and metadata
- `lib/guides.ts`: guide titles, copy, FAQs, links, and imagery
- `components/GuideLayout.tsx`: editorial guide template
- `public/social/`: branded social cards for each page
- `app/icon.png`, `app/favicon.ico`, `app/apple-icon.png`: search and browser branding

## Publishing Rules

- Use verified North Star Ranch facts only.
- Do not publish pricing, packages, vendor inclusions, testimonials, guest limits, or availability unless confirmed.
- Keep the homepage focused on `micro wedding montana`.
- Supporting guides must link naturally to the homepage and selected related guides.
- Before publishing: build, inspect desktop/mobile, verify titles, canonicals, schema, links, assets, sitemap, and live HTTP status.
- Use regular indexing only unless Zechariah explicitly approves instant indexing.

## Client Context

The source of truth for positioning, launch research, and future work is:

`C:\Users\innat\clients\montana-sky-vows`
