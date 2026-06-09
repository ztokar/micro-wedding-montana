# Deployment And Publish Checklist

The site is connected to Vercel and deploys from GitHub `master`.

## Standard Publish

1. Run `npm run build`.
2. Run `git diff --check`.
3. Review public copy for unsupported claims and internal SEO language.
4. Verify the internal link graph and metadata.
5. Commit and push to `origin/master`.
6. Wait for Vercel production deployment.
7. Verify every changed live URL returns HTTP 200.
8. Inspect desktop and mobile output.
9. Confirm titles, canonicals, schema, favicon, social images, sitemap, robots, feed, forms, links, and images.
10. Submit regular indexing only after the live checks pass.

## Production URLs

- Site: https://microweddingmontana.com/
- Guides: https://microweddingmontana.com/guides
- Sitemap: https://microweddingmontana.com/sitemap.xml
- Robots: https://microweddingmontana.com/robots.txt
- Feed: https://microweddingmontana.com/feed.xml

## Notes

- Do not restore the old `out/` export folder. Vercel builds the current Next.js app.
- Do not migrate back to Lovable. The current production site is hosted on Vercel.
- Google controls when refreshed titles and favicons appear in search results.
