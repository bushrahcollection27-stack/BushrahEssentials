'use client'

import { useState } from 'react'
import { CheckCircle2, CreditCard, LockKeyhole } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function PaymentSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Reveal className="mt-16 grid overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-sm lg:grid-cols-[1fr_0.9fr]">
      <div className="bg-primary p-8 text-primary-foreground sm:p-10">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          <LockKeyhole className="size-4" /> Secure checkout
        </span>
        <h2 className="mt-5 font-serif text-4xl leading-tight">A thoughtful purchase, beautifully prepared.</h2>
        <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/75">
          Select your preferred payment method when your order is ready. Your pieces will be prepared with care.
        </p>
        <p className="mt-8 inline-flex rounded-full border border-primary-foreground/20 px-4 py-2 text-xs text-primary-foreground/75">
          Demo checkout — no payment is collected on this website yet.
        </p>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
        }}
        className="p-8 sm:p-10"
      >
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-blush/50 text-primary"><CreditCard className="size-5" /></span>
          <div>
            <h3 className="font-serif text-2xl text-foreground">Payment preference</h3>
            <p className="text-sm text-muted-foreground">Choose an option for your order enquiry.</p>
          </div>
        </div>
        <div className="mt-7 grid gap-3">
          {['Card payment', 'Bank transfer', 'Pay on delivery'].map((method, index) => (
            <label key={method} className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold">
              <input defaultChecked={index === 0} name="payment-method" type="radio" className="accent-primary" />
              {method}
            </label>
          ))}
        </div>
        <button type="submit" className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
          Continue with this preference
        </button>
        {submitted && (
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-primary"><CheckCircle2 className="size-4" /> Saved for this demo. Contact us to place your order.</p>
        )}
      </form>
    </Reveal>
  )
}
