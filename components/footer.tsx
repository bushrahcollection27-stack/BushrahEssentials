import Link from 'next/link'
import Image from 'next/image'
import {
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  WhatsappIcon,
} from '@/components/social-icons'

const columns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
      { label: 'Shop', href: '/shop' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Size Guidance', href: '/services' },
      { label: 'Discreet Packaging', href: '/services' },
      { label: 'Shipping & Returns', href: '/contact' },
      { label: 'FAQ', href: '/contact#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Our Values', href: '/about#values' },
      { label: 'Privacy Policy', href: '/contact' },
      { label: 'Terms & Conditions', href: '/contact' },
    ],
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'TikTok', href: 'https://tiktok.com', Icon: TiktokIcon },
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'WhatsApp', href: 'https://wa.me/00000000000', Icon: WhatsappIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/images/bushrah-logo.png"
                alt="Bushrah Collection"
                width={96}
                height={80}
                className="h-11 w-auto object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold tracking-wide">
                  Bushrah
                </span>
                <span className="text-[0.6rem] font-medium tracking-[0.35em] text-primary-foreground/70 uppercase">
                  Collection
                </span>
              </span>
            </div>
            <p className="mt-5 font-serif text-lg text-gold italic">
              Beauty begins beneath.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              Thoughtfully selected intimate essentials designed around comfort,
              quality, femininity, and dignity.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-gold hover:bg-gold hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label + link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Bushrah Collection. All rights
            reserved.
          </p>
          <p className="text-xs text-primary-foreground/60">
            Crafted with care for every woman.
          </p>
        </div>
      </div>
    </footer>
  )
}
