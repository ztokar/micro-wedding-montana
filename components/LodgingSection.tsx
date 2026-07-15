import Link from 'next/link';

export default function LodgingSection() {
  return (
    <section id="lodging" className="py-24 md:py-32 bg-cream grain">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">Stay Together</p>
          <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            A Montana Wedding Venue
            <span className="mt-2 block italic font-normal text-sage-700">With Lodging Onsite</span>
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-earth-800">
          <p>
            Most Montana wedding venues send guests back to hotels across town at the end of the night. North Star Ranch keeps the group in one place. The private 40-acre property has onsite lodging across a five-bedroom chalet, four cabins, and an eight-room lodge.
          </p>
          <p>
            For a destination micro wedding, lodging is a venue feature, not an afterthought. Onsite rooms cut driving, make group meals easier, and give the weekend more time without adding another formal event.
          </p>
          <p>
            Compare the choice in the{' '}
            <Link href="/guides/small-wedding-venues-in-montana" className="font-medium text-sage-800 underline decoration-sage-400 underline-offset-4">small wedding venue guide</Link>
            , see{' '}
            <Link href="/guides/getting-to-whitefish-montana-wedding" className="font-medium text-sage-800 underline decoration-sage-400 underline-offset-4">how guests get here and where they stay</Link>
            , then ask about your dates.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-sage-700 text-white font-medium tracking-wide transition-all duration-300 hover:bg-sage-800 hover:scale-105"
            >
              Check Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
