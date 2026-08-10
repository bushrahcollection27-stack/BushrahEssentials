import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Bushrah Essentials home"
      className={cn('group flex items-center gap-3', className)}
    >
      <Image
        src="/images/bushrah-logo.png"
        alt="Bushrah Essentials"
        width={96}
        height={80}
        className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-wide text-foreground">
          Bushrah
        </span>
        <span className="text-[0.6rem] font-medium tracking-[0.35em] text-muted-foreground uppercase">
          Essentials
        </span>
      </span>
    </Link>
  )
}
