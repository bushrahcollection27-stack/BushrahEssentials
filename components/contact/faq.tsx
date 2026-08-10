'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How do I choose my size?',
    a: 'Each product includes helpful sizing guidance. If you are unsure, reach out to our team and we will happily help you find the right fit.',
  },
  {
    q: 'How discreet is the packaging?',
    a: 'Your privacy is a priority. Orders are prepared and shipped in plain, discreet packaging with no visible branding indicating the contents.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Delivery times vary by location. Estimated timeframes are shown at checkout, and you will receive updates once your order is on its way.',
  },
  {
    q: 'What is your exchange policy?',
    a: 'For hygiene reasons, intimate items have specific exchange conditions. Unopened items in their original condition may be eligible—contact us and we will guide you.',
  },
  {
    q: 'How can I contact customer support?',
    a: 'You can reach us by email, WhatsApp, or through the contact form on this page. Our team is happy to help with any question.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mx-auto mt-12 max-w-3xl divide-y divide-border/70 overflow-hidden rounded-3xl border border-border/70 bg-card">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div key={faq.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-blush/20"
            >
              <span className="font-serif text-lg text-foreground">{faq.q}</span>
              <span
                className={cn(
                  'flex size-8 shrink-0 items-center justify-center rounded-full bg-blush/50 text-primary transition-transform duration-300',
                  isOpen && 'rotate-45 bg-gold',
                )}
              >
                <Plus className="size-4" />
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
