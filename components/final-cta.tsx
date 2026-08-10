import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/ui/link-button'

export function FinalCta({
  title = 'Discover Bushrah Collection',
  description = 'Thoughtful essentials, a private experience, and elegance designed around you.',
  primaryLabel = 'Shop the Collection',
  primaryHref = '/shop',
  secondaryLabel = 'Get in Touch',
  secondaryHref = '/contact',
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="bg-blush/25">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="max-w-2xl font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={primaryHref} variant="primary" size="lg">
              {primaryLabel}
              <ArrowRight />
            </LinkButton>
            <LinkButton href={secondaryHref} variant="ghostGold" size="lg">
              {secondaryLabel}
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
