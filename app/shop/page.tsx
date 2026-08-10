import type { Metadata } from 'next'
import Image from 'next/image'
import { Bell } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/ui/link-button'
import { PaymentSection } from '@/components/payment-section'

export const metadata: Metadata = {
  title: 'Shop — Bushrah Collection',
  description:
    'Browse curated collections of intimate essentials from Bushrah Collection. Our online boutique is opening soon.',
}

const products = [
  {
    name: 'Underwear Essentials',
    price: 'From $18',
    image: '/images/category-everyday.png',
  },
  {
    name: 'Seamless Underwear',
    price: 'From $24',
    image: '/images/category-seamless.png',
  },
  {
    name: 'Nightwear & Loungewear',
    price: 'From $32',
    image: '/images/category-premium.png',
  },
  {
    name: 'Gift Box Packages',
    price: 'From $45',
    image: '/images/category-gift.png',
  },
]

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="The Collection"
        description="A preview of the curated edits coming to our boutique. Our full online shop is opening soon."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium tracking-wide text-foreground backdrop-blur">
                    Coming Soon
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {product.price}
                  </p>
                  <button
                    type="button"
                    disabled
                    className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-border bg-muted/50 text-sm font-medium text-muted-foreground"
                  >
                    Notify Me
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-6 rounded-[2rem] border border-border/60 bg-blush/30 px-6 py-14 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-gold/20 text-gold">
            <Bell className="size-6" />
          </span>
          <h2 className="max-w-xl font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Our Boutique Is Opening Soon
          </h2>
          <p className="max-w-lg leading-relaxed text-muted-foreground">
            We are putting the finishing touches on a beautiful, private shopping
            experience. In the meantime, reach out with any questions—we would
            love to help.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/contact" variant="primary" size="lg">
              Get in Touch
            </LinkButton>
            <LinkButton href="/about" variant="ghostGold" size="lg">
              Discover Our Story
            </LinkButton>
          </div>
        </Reveal>

        <PaymentSection />
      </section>
    </>
  )
}
