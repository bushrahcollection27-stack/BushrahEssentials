import { Feather, ShieldCheck, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const features = [
  {
    Icon: Feather,
    title: 'Comfort First',
    text: 'Thoughtfully selected pieces designed for everyday comfort and ease.',
  },
  {
    Icon: ShieldCheck,
    title: 'Quality You Can Trust',
    text: 'Carefully chosen products with attention to fabric, fit, finish, and durability.',
  },
  {
    Icon: Sparkles,
    title: 'Elegantly Yours',
    text: 'Feminine, tasteful essentials created for women who appreciate beauty and dignity.',
  },
]

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Why Bushrah"
        title="Designed With You in Mind"
        description="Every detail is considered so that what you wear each day feels as good as it looks."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal
            key={feature.title}
            delay={i * 120}
            className="group flex flex-col rounded-3xl border border-border/70 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
          >
            <span className="flex size-14 items-center justify-center rounded-2xl bg-blush/50 text-primary transition-colors group-hover:bg-gold group-hover:text-primary">
              <feature.Icon className="size-6" />
            </span>
            <h3 className="mt-6 font-serif text-2xl text-foreground">
              {feature.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {feature.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
