import type { Metadata } from 'next'
import { CoupleIntroduction } from '@/components/invitation/couple-introduction'

export const metadata: Metadata = {
  title: 'The Bride & Groom — Dr. Pushpita & Engr. Argho',
  description: 'Meet the bride, Dr. Pushpita, and the groom, Engr. Argho. Two souls, one journey.',
}

export default function InvitationPage() {
  return (
    <main className="min-h-dvh bg-maroon-deep">
      <CoupleIntroduction />
    </main>
  )
}
