import type { Metadata } from 'next'
import { Mail, MessageCircle, Clock } from 'lucide-react'
import {
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  WhatsappIcon,
} from '@/components/social-icons'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact/contact-form'
import { Faq } from '@/components/contact/faq'

export const metadata: Metadata = {
  title: 'Contact — Bushrah Collection',
  description:
    'Questions, feedback, or need help choosing? The Bushrah Collection team is here to help.',
}

const contactCards = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'bushrahcollection27@gmail.com',
    note: 'We reply as soon as possible.',
    href: 'mailto:bushrahcollection27@gmail.com',
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: '09159161703',
    note: 'Chat with us on WhatsApp.',
    href: 'https://wa.me/2349159161703',
  },
  {
    Icon: InstagramIcon,
    label: 'Instagram',
    value: '@bushrahcollection',
    note: 'Placeholder — replace with your handle',
    href: 'https://instagram.com',
  },
  {
    Icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat, 9am – 6pm',
    note: 'Placeholder — replace with your hours',
    href: null,
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'TikTok', href: 'https://tiktok.com', Icon: TiktokIcon },
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'WhatsApp', href: 'https://wa.me/2349159161703', Icon: WhatsappIcon },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd Love to Hear From You"
        description="Beauty begins beneath. Ask us about underwear, nightwear, gift boxes, or your order."
      />

      {/* Form + info */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-4">
            {contactCards.map((card) => {
              const inner = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blush/50 text-primary transition-colors group-hover:bg-gold">
                    <card.Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                      {card.label}
                    </p>
                    <p className="mt-1 font-serif text-lg text-foreground">
                      {card.value}
                    </p>
                    <p className="text-xs text-muted-foreground/70 italic">
                      {card.note}
                    </p>
                  </div>
                </>
              )
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-md"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={card.label}
                  className="group flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5"
                >
                  {inner}
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-blush/25">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, Answered"
            description="A few things our customers often ask before shopping with us."
          />
          <Faq />
        </div>
      </section>

      {/* Stay connected */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-24">
          <Reveal className="flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
              <span aria-hidden className="h-px w-6 bg-gold/60" />
              Let&apos;s Stay Connected
            </span>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Follow the Bushrah Collection Journey
            </h2>
            <p className="max-w-xl leading-relaxed text-primary-foreground/75">
              Join us for new arrivals, thoughtful edits, and quiet moments of
              elegance.
            </p>
            <div className="mt-2 flex items-center gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-12 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-gold hover:bg-gold hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
