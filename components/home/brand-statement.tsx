import { Reveal } from '@/components/reveal'
import { Eyebrow } from '@/components/section-heading'

export function BrandStatement() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 opacity-60"
        >
          <div className="absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
          <Eyebrow>More Than What You Wear</Eyebrow>
          <p className="font-serif text-3xl leading-snug text-balance sm:text-4xl md:text-5xl">
            A beautiful private experience—where comfort meets confidence,
            quality meets elegance.
          </p>
          <p className="max-w-xl leading-relaxed text-primary-foreground/75">
            Bushrah Collection is about creating a space where every woman feels
            thoughtfully considered, from the first touch of fabric to the moment
            her order arrives at her door.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
