import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Feather,
  Gem,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Check,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { FinalCta } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Our Story — Bushrah Collection',
  description:
    'Bushrah Collection was created to provide women with thoughtfully selected intimate essentials that balance comfort, quality, beauty, and a respectful shopping experience.',
}

const values = [
  { Icon: Feather, title: 'Comfort', text: 'Ease and softness in every choice.' },
  { Icon: Gem, title: 'Quality', text: 'Considered fabrics, fit, and finish.' },
  { Icon: Sparkles, title: 'Elegance', text: 'Feminine, tasteful, and refined.' },
  { Icon: HeartHandshake, title: 'Dignity', text: 'Respect at the heart of it all.' },
  { Icon: ShieldCheck, title: 'Trust', text: 'Privacy and care you can rely on.' },
]

const commitments = [
  'Thoughtful product selection',
  'Quality-conscious sourcing',
  'Tasteful presentation',
  'Discreet packaging',
  'Respectful customer service',
  'A comfortable and private shopping experience',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Our Story"
        description="Bushrah Collection was created to offer women thoughtfully selected intimate essentials that balance comfort, quality, beauty, practicality, and a respectful shopping experience."
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] border border-border/60 shadow-xl">
              <Image
                src="/images/about.png"
                alt="Soft draped fabric beside delicate white flowers in warm light"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Thoughtfully Founded"
              title="Everyday essentials, elevated with care"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We believe the everyday essentials a woman chooses should feel as
                good as they look. Bushrah Collection began with a simple idea:
                that intimate wear can be comfortable, beautiful, and dignified
                all at once.
              </p>
              <p>
                Each piece in our edit is chosen with intention—prioritizing soft
                fabrics, considered fit, and lasting quality. Just as importantly,
                we shape the entire experience around privacy, warmth, and respect.
              </p>
            </div>
            <blockquote className="mt-8 rounded-2xl border border-gold/40 bg-blush/30 p-6">
              <p className="font-serif text-xl leading-relaxed text-foreground italic">
                &ldquo;Bushrah Collection was created with the belief that the
                everyday essentials women choose should feel as good as they
                look—while the experience of shopping for them should feel
                comfortable, private, and respectful.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-medium tracking-wide text-muted-foreground">
                — A note from our founder
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="scroll-mt-24 bg-pink">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Our Values"
            title="What Guides Us"
            description="Five principles shape every product and every interaction."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 90}
                className="group flex flex-col items-center gap-4 rounded-3xl border border-border/60 bg-card p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-blush/60 text-primary transition-colors group-hover:bg-gold">
                  <value.Icon className="size-6" />
                </span>
                <h3 className="font-serif text-xl text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bushrah */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why Bushrah Collection?"
              title="A brand built on quiet, considered care"
              description="We are committed to the details that make choosing and receiving your essentials feel effortless and respectful."
            />
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm leading-snug text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Become Part of Our Story"
        description="Discover intimate essentials designed around comfort, quality, and dignity."
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  )
}
