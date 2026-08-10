import type { Metadata } from 'next'
import {
  Sparkles,
  PackageCheck,
  MessagesSquare,
  Ruler,
  LayoutGrid,
  Gift,
  Moon,
  Shirt,
  CalendarHeart,
  Plus,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { FinalCta } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'How We Serve You — Bushrah Collection',
  description:
    'Quality intimate essentials, discreet packaging, personalized customer care, size guidance, curated collections, and thoughtful gift options.',
}

const services = [
  {
    Icon: Sparkles,
    title: 'Quality Intimate Essentials',
    text: 'Thoughtfully selected products focused on comfort, quality, and everyday wear.',
  },
  {
    Icon: PackageCheck,
    title: 'Discreet Packaging',
    text: 'Your privacy matters. Orders are prepared and packaged with discretion.',
  },
  {
    Icon: MessagesSquare,
    title: 'Personalized Customer Care',
    text: 'Friendly and respectful assistance to help you make confident choices.',
  },
  {
    Icon: Ruler,
    title: 'Size Guidance',
    text: 'Helpful sizing information designed to make choosing the right fit easier.',
  },
  {
    Icon: LayoutGrid,
    title: 'Curated Collections',
    text: 'Carefully selected collections designed around different needs, preferences, and occasions.',
  },
  {
    Icon: Gift,
    title: 'Gift Options',
    text: 'Beautifully presented options for thoughtful gifting when available.',
  },
]

const comingSoon = [
  { Icon: Sparkles, label: 'Signature Bushrah Collections' },
  { Icon: Ruler, label: 'Expanded Size Range' },
  { Icon: Moon, label: 'Sleepwear' },
  { Icon: Shirt, label: 'Modest Loungewear' },
  { Icon: Plus, label: 'Additional Intimate Essentials' },
  { Icon: CalendarHeart, label: 'Special Seasonal Collections' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Serve You"
        title="How We Serve You"
        description="Thoughtful care at every step—so that choosing, receiving, and enjoying your essentials feels effortless, private, and respectful."
      />

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 110}
              className="group flex flex-col rounded-3xl border border-border/70 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-blush/50 text-primary transition-colors group-hover:bg-gold">
                <service.Icon className="size-6" />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
              <span aria-hidden className="h-px w-6 bg-gold/60" />
              Coming Soon
            </span>
            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-balance sm:text-4xl md:text-5xl">
              Thoughtfully Growing, With You
            </h2>
            <p className="max-w-xl leading-relaxed text-primary-foreground/75">
              We are carefully expanding our range to serve you even better in the
              seasons ahead.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoon.map((item, i) => (
              <Reveal
                key={item.label}
                delay={(i % 3) * 100}
                className="flex items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 transition-colors hover:border-gold/50"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <item.Icon className="size-5" />
                </span>
                <span className="font-serif text-lg">{item.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Explore Bushrah Collection"
        description="Discover intimate essentials and a shopping experience designed around you."
        secondaryLabel="Read Our Story"
        secondaryHref="/about"
      />
    </>
  )
}
