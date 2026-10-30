'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import { introduction, profiles } from '@/lib/couple'
import { ProfileCard } from './profile-card'

const ease = [0.22, 1, 0.36, 1] as const

export function CoupleIntroduction() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease }}
      className="velvet-bg relative min-h-dvh w-full overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-3 border border-gold/50 sm:inset-5" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-4 border border-gold/25 sm:inset-6" />

      <nav className="relative z-10 flex justify-start px-6 pt-8 sm:px-10">
        <BackLink />
      </nav>

      <header className="relative flex flex-col items-center gap-4 px-6 pt-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="w-full max-w-xl"
        >
          <motion.div
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/images/floral-garland.png"
              alt=""
              width={2064}
              height={512}
              priority
              sizes="(max-width: 640px) 90vw, 576px"
              className="h-auto w-full [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_75%)]"
            />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="text-xs font-semibold uppercase tracking-[0.45em] text-gold-soft"
        >
          {introduction.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="font-script text-5xl font-normal leading-tight text-balance text-cream drop-shadow-[0_2px_6px_rgb(0_0_0/0.45)] sm:text-6xl"
        >
          {introduction.title}
        </motion.h1>
        <Ornament />
      </header>

      <section
        aria-label="Bride and groom"
        className="relative mx-auto flex max-w-4xl flex-col items-center gap-16 px-8 py-14 md:flex-row md:items-start md:justify-center md:gap-12"
      >
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.id} profile={profile} index={index} />
        ))}
      </section>

      <footer className="relative flex flex-col items-center gap-6 px-6 pb-16 text-center">
        <Ornament />
        <BackLink />
      </footer>
    </motion.div>
  )
}

function BackLink() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-full border border-gold/60 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-soft transition-colors hover:bg-gold hover:text-maroon-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-soft"
    >
      <ArrowLeft aria-hidden="true" className="size-3.5" />
      Back to cover
    </Link>
  )
}

function Ornament() {
  return (
    <motion.svg
      viewBox="0 0 160 20"
      aria-hidden="true"
      initial={{ opacity: 0, scaleX: 0.6 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1.2, delay: 0.9, ease }}
      className="w-40 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
    >
      <path d="M2 10 H60 M100 10 H158" strokeLinecap="round" />
      <path d="M60 10 C66 3 74 3 80 10 C86 3 94 3 100 10" />
      <path d="M60 10 C66 17 74 17 80 10 C86 17 94 17 100 10" />
      <circle cx="80" cy="10" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="52" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="108" cy="10" r="1.2" fill="currentColor" stroke="none" />
    </motion.svg>
  )
}
