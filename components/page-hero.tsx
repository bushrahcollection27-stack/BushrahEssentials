import { Eyebrow } from '@/components/section-heading'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-28 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-blush/40 blur-3xl" />
        <div className="absolute top-10 right-0 size-72 rounded-full bg-gold/10 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 py-20 text-center sm:px-8 lg:py-28">
        {eyebrow ? (
          <div className="animate-fade-up">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        ) : null}
        <h1 className="animate-fade-up font-serif text-5xl leading-[1.05] text-balance text-foreground [animation-delay:80ms] sm:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="animate-fade-up max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:160ms]">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
