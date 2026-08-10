'use client'

import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '09159161703' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
] as const

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold focus:ring-2 focus:ring-gold/30'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.name}
            className={cn('flex flex-col gap-2', field.name === 'subject' && 'sm:col-span-2')}
          >
            <label
              htmlFor={field.name}
              className="text-sm font-medium text-foreground"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.name === 'name' || field.name === 'email'}
              className={inputClass}
            />
          </div>
        ))}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us a little more..."
            className={cn(inputClass, 'resize-none')}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        >
          Send Message
          <Send className="size-4" />
        </button>
        {submitted ? (
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="flex size-6 items-center justify-center rounded-full bg-gold/20 text-gold">
              <Check className="size-3.5" />
            </span>
            Thank you — we&apos;ll be in touch soon.
          </p>
        ) : null}
      </div>
    </form>
  )
}
