'use client'

import Image from 'next/image'
import { motion, type Variants } from 'motion/react'
import { OpenInvitationButton } from './open-invitation-button'

type InvitationCoverProps = {
  bride?: string
  groom?: string
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.6 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export function InvitationCover({ bride = 'Pushpita Das', groom = 'Argho Deb Das' }: InvitationCoverProps) {
  return (
    <motion.section
      aria-labelledby="couple-names"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="@container relative aspect-[768/1376] w-[min(100vw,calc(100dvh*768/1376))] overflow-hidden sm:shadow-[0_30px_80px_-20px_rgb(0_0_0/0.75)]"
    >
      <Image
        src="/images/floral-border.png"
        alt=""
        fill
        priority
        sizes="(max-width: 640px) 100vw, 560px"
        className="object-cover"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-x-[25.5%] top-[22%] bottom-[23%] flex flex-col items-center justify-between text-center"
      >
        <motion.div variants={item} className="flex flex-col items-center gap-[1.6cqw]">
          <p className="font-serif text-[2.7cqw] font-semibold uppercase leading-snug tracking-[0.28em] text-gold-soft">
            Wedding
            <br />
            Invitation
          </p>
          <Flourish />
        </motion.div>

        <h1 id="couple-names" className="flex flex-col items-center font-normal">
          <motion.span
            variants={item}
            className="font-script text-[9cqw] leading-[1.05] text-balance text-cream drop-shadow-[0_2px_6px_rgb(0_0_0/0.45)]"
          >
            {bride}
          </motion.span>
          <motion.span
            variants={item}
            className="my-[3cqw] flex items-center gap-[2cqw] font-serif text-[2.6cqw] font-semibold uppercase tracking-[0.4em] text-gold"
          >
            <span aria-hidden="true" className="h-px w-[6cqw] bg-gold/70" />
            <span className="pl-[0.4em]">Weds</span>
            <span aria-hidden="true" className="h-px w-[6cqw] bg-gold/70" />
          </motion.span>
          <motion.span
            variants={item}
            className="font-script text-[9cqw] leading-[1.05] text-balance text-cream drop-shadow-[0_2px_6px_rgb(0_0_0/0.45)]"
          >
            {groom}
          </motion.span>
        </h1>

        <motion.div variants={item} className="flex flex-col items-center gap-[3cqw]">
          <Flourish flipped />
          <OpenInvitationButton />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

function Flourish({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 16"
      aria-hidden="true"
      className={`w-[22cqw] text-gold ${flipped ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
    >
      <path d="M2 8 H44 M76 8 H118" strokeLinecap="round" />
      <path d="M44 8 C50 2 56 2 60 8 C64 2 70 2 76 8" />
      <path d="M44 8 C50 14 56 14 60 8 C64 14 70 14 76 8" />
      <circle cx="60" cy="8" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="38" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="82" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
