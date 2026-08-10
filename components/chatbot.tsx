'use client'

import { FormEvent, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

const answers = [
  { terms: ['underwear', 'size', 'bra', 'pant'], answer: 'We offer thoughtfully selected underwear essentials focused on comfort and a flattering fit. Message us on WhatsApp for current sizes and availability.' },
  { terms: ['night', 'sleep', 'lounge'], answer: 'Our nightwear and loungewear edit includes soft, refined pieces for quiet evenings and comfortable rest.' },
  { terms: ['gift', 'box', 'package'], answer: 'Our gift box packages are beautifully presented and can be prepared for a special occasion. Contact us to discuss the perfect set.' },
  { terms: ['pay', 'payment', 'card', 'transfer'], answer: 'The payment area is currently a demo. For a real order, contact us on WhatsApp and we will confirm the available payment method.' },
  { terms: ['contact', 'email', 'whatsapp', 'phone'], answer: 'You can reach Bushrah Collection on WhatsApp at 09159161703 or email bushrahcollection27@gmail.com.' },
]

function replyTo(message: string) {
  const question = message.toLowerCase()
  return answers.find(({ terms }) => terms.some((term) => question.includes(term)))?.answer ?? 'Thank you for your message. We can help with underwear, nightwear, gift boxes, sizing, payment questions, or how to contact us.'
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hello! I’m the Bushrah Collection assistant. How can I help you today?' }])

  function send(event: FormEvent) {
    event.preventDefault()
    const text = message.trim()
    if (!text) return
    setMessages((current) => [...current, { from: 'user', text }, { from: 'bot', text: replyTo(text) }])
    setMessage('')
  }

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {open && (
        <section className="mb-4 flex w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <header className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
            <div><p className="font-serif text-lg">Bushrah Assistant</p><p className="text-xs text-primary-foreground/70">Demo support • usually replies instantly</p></div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-1 hover:bg-primary-foreground/10"><X className="size-5" /></button>
          </header>
          <div className="max-h-80 min-h-52 space-y-3 overflow-y-auto bg-background p-4">
            {messages.map((item, index) => <p key={`${item.from}-${index}`} className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${item.from === 'bot' ? 'bg-blush/40 text-foreground' : 'ml-auto bg-primary text-primary-foreground'}`}>{item.text}</p>)}
          </div>
          <form onSubmit={send} className="flex gap-2 border-t border-border p-3">
            <input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask a question..." className="min-w-0 flex-1 rounded-full bg-muted px-4 py-2 text-sm outline-none ring-ring focus:ring-2" />
            <button aria-label="Send message" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"><Send className="size-4" /></button>
          </form>
        </section>
      )}
      <button onClick={() => setOpen((value) => !value)} aria-label="Open chat" className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"><MessageCircle className="size-6" /></button>
    </div>
  )
}
