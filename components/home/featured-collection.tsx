import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const categories = [
  {
    title: 'Underwear Essentials',
    description: 'Soft, breathable basics made for everyday comfort.',
    image: '/images/category-everyday.png',
  },
  {
    title: 'Seamless Underwear',
    description: 'Smooth, soft fabrics that move with you.',
    image: '/images/category-seamless.png',
  },
  {
    title: 'Nightwear & Loungewear',
    description: 'Refined satin layers for restful, beautiful evenings.',
    image: '/images/category-premium.png',
  },
  {
    title: 'Gift Box Packages',
    description: 'Beautifully packaged, thoughtfully curated gifts.',
    image: '/images/category-gift.png',
  },
]

export function FeaturedCollection() {
  return (
    <section className="bg-blush/25">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Featured Collection"
          title="Curated For Every Moment"
          description="Explore collections thoughtfully organized around your needs, preferences, and occasions."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl text-foreground">
                    {cat.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <Link
                    href="/shop"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-gold"
                  >
                    Explore Collection
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
