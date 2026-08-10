import { Hero } from '@/components/home/hero'
import { Features } from '@/components/home/features'
import { FeaturedCollection } from '@/components/home/featured-collection'
import { BrandStatement } from '@/components/home/brand-statement'
import { FinalCta } from '@/components/final-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedCollection />
      <BrandStatement />
      <FinalCta />
    </>
  )
}
