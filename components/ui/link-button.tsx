import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const linkButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5',
        gold: 'bg-gold text-primary shadow-sm hover:bg-gold/90 hover:shadow-md hover:-translate-y-0.5',
        outline:
          'border border-primary/25 bg-transparent text-foreground hover:border-primary/60 hover:bg-primary/5',
        ghostGold:
          'border border-gold/50 bg-transparent text-foreground hover:bg-gold/10 hover:border-gold',
        light:
          'bg-background/90 text-foreground shadow-sm backdrop-blur hover:bg-background',
      },
      size: {
        sm: 'h-9 px-4',
        md: 'h-11 px-6',
        lg: 'h-12 px-8 text-[0.95rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type LinkButtonProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof linkButtonVariants>

export function LinkButton({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(linkButtonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
