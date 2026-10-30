import { cn } from '@/lib/utils'

export function GoldDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 14"
      className={cn('h-3.5 w-36 text-gold', className)}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
    >
      <path d="M4 7 H62" strokeWidth="0.7" />
      <path d="M98 7 H156" strokeWidth="0.7" />
      <path d="M80 1 L86 7 L80 13 L74 7 Z" strokeWidth="0.8" fill="currentColor" fillOpacity="0.3" />
      <circle cx="68" cy="7" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="92" cy="7" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}
