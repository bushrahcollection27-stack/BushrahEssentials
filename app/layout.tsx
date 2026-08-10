import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Chatbot } from '@/components/chatbot'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bushrah Collection — Beauty Begins Beneath',
  description:
    'Beauty begins beneath. Bushrah Collection offers thoughtfully selected underwear, nightwear, and gift boxes designed around comfort, quality, femininity, and dignity.',
  generator: 'v0.app',
  keywords: [
    'Bushrah Collection',
    'women intimate wear',
    'modest lingerie',
    'premium underwear',
    'comfort essentials',
  ],
  openGraph: {
    title: 'Bushrah Collection — Beauty Begins Beneath',
    description:
      'Thoughtfully selected intimate essentials designed around comfort, quality, femininity, and dignity.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0240fd',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
