import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { LinkButton } from '@/components/ui/link-button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-24 size-96 rounded-full bg-blush/40 blur-3xl" />
        <div className="absolute top-40 -right-20 size-80 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pt-24 lg:pb-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/60 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Intimate Essentials
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Beauty begins{' '}
            <span className="text-gold italic">beneath.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Thoughtfully selected intimate essentials designed around comfort,
            quality, femininity, and dignity.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href="/shop" variant="primary" size="lg">
              Shop the Collection
              <ArrowRight />
            </LinkButton>
            <LinkButton href="/about" variant="outline" size="lg">
              Discover Our Story
            </LinkButton>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { label: 'Everyday Comfort' },
              { label: 'Quality First' },
              { label: 'Discreet & Private' },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-serif text-lg text-gold">&#10022;</dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] border border-border/60 shadow-xl">
            <Image
              src="/images/hero.png"
              alt="Elegant folded silk and cotton fabric in navy, blush, and ivory tones"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-52 rounded-2xl border border-border/60 bg-background/95 p-5 shadow-lg backdrop-blur sm:block">
            <p className="font-serif text-lg text-foreground">
              Designed around you
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Where comfort meets quiet confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
