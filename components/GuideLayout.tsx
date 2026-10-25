import type { ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import type { Guide } from "@/lib/guides";
import { guideMap } from "@/lib/guides";

const linkClass = "font-medium text-sage-800 underline decoration-sage-400 underline-offset-4";

// Parses inline [label](href) markdown links. Internal hrefs (start with / or #)
// render as Next Link; external http(s) hrefs render as nofollow noopener anchors.
function renderRichText(text: string, keyPrefix: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const [, label, href] = match;
    if (/^https?:\/\//i.test(href)) {
      nodes.push(
        <a key={`${keyPrefix}-l${i}`} href={href} rel="nofollow noopener" target="_blank" className={linkClass}>{label}</a>
      );
    } else {
      nodes.push(
        <Link key={`${keyPrefix}-l${i}`} href={href} className={linkClass}>{label}</Link>
      );
    }
    lastIndex = regex.lastIndex;
    i += 1;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function LinkedParagraph({ text }: { text: string }) {
  return <p>{renderRichText(text, text.slice(0, 24))}</p>;
}

export default function GuideLayout({ guide }: { guide: Guide }) {
  return (
    <main className="bg-cream text-earth-900">
      <SiteHeader />
      <article>
        <header className="relative min-h-[74dvh] overflow-hidden bg-earth-900 text-white">
          <img src={guide.hero} alt={guide.heroAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/90 via-earth-900/65 to-earth-900/30" />
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-earth-900/75 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-earth-900/80 via-earth-900/35 to-transparent" />
          <div className="relative mx-auto flex min-h-[74dvh] max-w-7xl items-end px-6 pb-14 pt-32 md:px-8 md:pb-20">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-earth-200">{guide.eyebrow}</p>
              <h1 className="text-4xl font-light leading-[1.05] md:text-6xl lg:text-7xl">{guide.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-earth-100 md:text-lg">{guide.description}</p>
              <div className="mt-8 flex gap-6 text-xs uppercase tracking-[0.16em] text-earth-100">
                <span>{guide.readTime}</span><span>{guide.updated}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid min-w-0 max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[240px_minmax(0,760px)] lg:justify-between lg:py-24">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-sage-700">In this guide</p>
            <nav className="border-l border-earth-300">
              {guide.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="block border-l border-transparent py-2 pl-4 text-sm leading-6 text-earth-700 transition-colors hover:border-sage-700 hover:text-sage-800">
                  {section.heading}
                </a>
              ))}
              <a href="#questions" className="block border-l border-transparent py-2 pl-4 text-sm leading-6 text-earth-700 transition-colors hover:border-sage-700 hover:text-sage-800">Common questions</a>
            </nav>
          </aside>

          <div className="min-w-0">
            <section className="mb-16 border-y border-earth-300 py-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sage-700">The short answer</p>
              <p className="font-display text-2xl font-light leading-9 md:text-3xl md:leading-10">{guide.quickAnswer}</p>
            </section>

            {guide.sections.map((section, index) => (
              <section id={section.id} key={section.id} className="scroll-mt-8 border-b border-earth-300 py-12 first:pt-0">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-earth-700">0{index + 1}</p>
                <h2 className="mb-7 text-3xl font-light leading-tight md:text-5xl">{section.heading}</h2>
                <div className="space-y-5 text-base leading-8 text-earth-800 md:text-lg">
                  {section.paragraphs?.map((paragraph) => <LinkedParagraph key={paragraph} text={paragraph} />)}
                </div>
                {section.bullets && (
                  <ul className="mt-7 space-y-3 border-l-2 border-sage-600 pl-6 text-base leading-7 text-earth-800 md:text-lg">
                    {section.bullets.map((bullet) => <li key={bullet}>{renderRichText(bullet, bullet.slice(0, 24))}</li>)}
                  </ul>
                )}
                {section.steps && (
                  <ol className="mt-7 space-y-4 text-base leading-7 text-earth-800 md:text-lg">
                    {section.steps.map((step, stepIndex) => (
                      <li key={step} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-800 text-sm font-semibold text-white">{stepIndex + 1}</span>
                        <span className="pt-1">{renderRichText(step, step.slice(0, 24))}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {section.figure && (
                  <figure className="mt-8">
                    <picture>
                      {section.figure.mobileSrc && <source media="(max-width: 640px)" srcSet={section.figure.mobileSrc} />}
                      <img src={section.figure.src} alt={section.figure.alt} width={section.figure.width} height={section.figure.height} loading="lazy" decoding="async" className="h-auto w-full max-w-full border border-earth-200 bg-white" />
                    </picture>
                    {section.figure.caption && <figcaption className="mt-3 text-sm leading-6 text-earth-700">{renderRichText(section.figure.caption, "figcap")}</figcaption>}
                  </figure>
                )}
                {section.quotes && (
                  <div className="mt-8 space-y-6">
                    {section.quotes.map((quote) => (
                      <blockquote key={quote.text} className="border-y border-earth-300 py-6">
                        <p className="font-display text-xl leading-8 text-earth-900">&ldquo;{quote.text}&rdquo;</p>
                        <footer className="mt-3 text-sm leading-6 text-earth-700">
                          <a href={quote.url} rel="nofollow noopener" target="_blank" className="font-semibold text-sage-800 underline decoration-sage-400 underline-offset-2">{quote.name}</a>, {quote.credential}. Outside expert, not affiliated with North Star Ranch.
                        </footer>
                      </blockquote>
                    ))}
                  </div>
                )}
                {section.table && (
                  <div className="mt-8 max-w-full overflow-x-auto border-y border-earth-300">
                    <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                      <thead><tr>{section.table.headers.map((header) => <th key={header} className="bg-sage-800 px-4 py-4 font-semibold text-white">{header}</th>)}</tr></thead>
                      <tbody>{section.table.rows.map((row) => <tr key={row.join("-")} className="border-t border-earth-200">{row.map((cell) => <td key={cell} className="px-4 py-4 align-top leading-6 text-earth-800">{cell}</td>)}</tr>)}</tbody>
                    </table>
                  </div>
                )}
                {section.resources && (
                  <div className="mt-8 divide-y divide-earth-200 border-y border-earth-300">
                    {section.resources.map((resource) => (
                      <div key={resource.name} className="py-4">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <p className="text-base font-semibold text-earth-900">{resource.name}</p>
                          {(resource.phone || resource.price) && (
                            <p className="text-sm text-earth-700">{[resource.phone, resource.price].filter(Boolean).join(" · ")}</p>
                          )}
                        </div>
                        <p className="mt-1 text-sm leading-6 text-earth-700">
                          {resource.note}
                          {resource.url && (
                            <>
                              {" "}
                              <a href={resource.url} rel="nofollow noopener" target="_blank" className="text-sage-800 underline decoration-sage-400 underline-offset-2">Visit site</a>
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {section.more && (
                  <details className="group mt-8 border-y border-earth-300 py-4">
                    <summary className="cursor-pointer list-none py-2 text-sm font-semibold uppercase tracking-[0.16em] text-sage-800 marker:hidden">
                      <span className="mr-2 inline-block transition-transform group-open:rotate-90">&rsaquo;</span>{section.more.label}
                    </summary>
                    <div className="mt-4 space-y-4 text-base leading-7 text-earth-800">
                      {section.more.paragraphs.map((paragraph) => <LinkedParagraph key={paragraph} text={paragraph} />)}
                    </div>
                  </details>
                )}
                {section.download && (
                  <div className="mt-8 flex flex-col gap-3 border border-earth-300 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                    {section.download.note && <p className="text-sm leading-6 text-earth-700">{section.download.note}</p>}
                    <a href={section.download.href} className="inline-flex min-h-11 w-fit items-center border border-sage-800 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-sage-800 transition-colors hover:bg-sage-800 hover:text-white">{section.download.label}</a>
                  </div>
                )}
                {section.image && (
                  <figure className="mt-8">
                    <img src={section.image.src} alt={section.image.alt} width={1200} height={800} loading="lazy" decoding="async" className="aspect-[3/2] h-auto w-full max-w-full object-cover" style={{ objectPosition: "center 30%" }} />
                    {section.image.caption && <figcaption className="mt-3 text-sm leading-6 text-earth-700">{section.image.caption}</figcaption>}
                  </figure>
                )}
              </section>
            ))}

            <section id="questions" className="scroll-mt-8 py-14">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sage-700">Common questions</p>
              <h2 className="mb-8 text-3xl font-light md:text-5xl">A few answers before you plan</h2>
              <div className="divide-y divide-earth-300 border-y border-earth-300">
                {guide.faqs.map((faq) => (
                  <div key={faq.question} className="py-6">
                    <h3 className="mb-2 text-xl font-medium">{faq.question}</h3>
                    <p className="leading-7 text-earth-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {guide.sources && (
              <section id="sources" className="scroll-mt-8 border-t border-earth-300 py-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sage-700">Sources</p>
                <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-earth-700">
                  {guide.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} rel="nofollow noopener" target="_blank" className="underline decoration-earth-300 underline-offset-2 hover:text-sage-800">{source.label}</a>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>

        <section className="bg-sage-900 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-8">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">North Star Ranch</p>
              <h2 className="text-4xl font-light leading-tight md:text-6xl">A private Montana place to gather near Whitefish and Glacier.</h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="mb-8 max-w-xl text-lg leading-8 text-sage-100">North Star Ranch sits on forty private acres, eight miles from downtown Whitefish, with onsite lodging and room for a destination group to spend real time together.</p>
              <Link href="/#contact" className="w-fit border border-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-sage-900">Check availability</Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">Keep planning</p>
            <div className="grid gap-8 md:grid-cols-3">
              {guide.related.map((slug) => {
                const related = guideMap[slug];
                return <Link href={`/guides/${slug}`} key={slug} className="group border-t border-earth-300 pt-5">
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-earth-700">{related.eyebrow}</p>
                  <h3 className="text-2xl font-light leading-tight transition-colors group-hover:text-sage-700">{related.title}</h3>
                </Link>;
              })}
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
