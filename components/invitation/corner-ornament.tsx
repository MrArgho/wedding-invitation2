import { cn } from '@/lib/utils'

type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const placement: Record<Corner, string> = {
  'top-left': 'top-3 left-3',
  'top-right': 'top-3 right-3 -scale-x-100',
  'bottom-left': 'bottom-3 left-3 -scale-y-100',
  'bottom-right': 'bottom-3 right-3 -scale-100',
}

export function CornerOrnament({ corner }: { corner: Corner }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={cn('pointer-events-none absolute size-20 text-gold sm:size-24', placement[corner])}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <path d="M6 70 L6 6 L70 6" strokeWidth="1.1" />
      <path d="M12 54 L12 12 L54 12" strokeWidth="0.6" />

      <path
        d="M12 12 C 30 14, 44 26, 46 44 C 47 54, 40 60, 33 57 C 26 54, 27 45, 34 44"
        strokeWidth="0.9"
      />
      <path d="M12 12 C 14 30, 26 44, 44 46" strokeWidth="0.6" opacity="0.7" />

      <path
        d="M54 12 C 64 12, 72 18, 74 26 C 70 22, 62 21, 58 24"
        strokeWidth="0.8"
      />
      <path
        d="M12 54 C 12 64, 18 72, 26 74 C 22 70, 21 62, 24 58"
        strokeWidth="0.8"
      />

      <path d="M22 22 C 28 20, 33 23, 34 28 C 29 29, 24 27, 22 22 Z" fill="currentColor" fillOpacity="0.35" strokeWidth="0.6" />

      <circle cx="6" cy="6" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="80" cy="6" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="90" cy="6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="6" cy="80" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="6" cy="90" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="60" cy="40" r="1" fill="currentColor" stroke="none" />
      <circle cx="40" cy="60" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
