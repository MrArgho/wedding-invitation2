'use client'

import { motion } from 'motion/react'
import type { Profile } from '@/lib/couple'
import { PortraitFrame } from './portrait-frame'

export function ProfileCard({ profile, index }: { profile: Profile; index: number }) {
  const headingId = `${profile.id}-name`

  return (
    <motion.article
      aria-labelledby={headingId}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full max-w-sm flex-col items-center gap-6 text-center"
    >
      <PortraitFrame name={profile.name} photo={profile.photo} />

      <div className="flex flex-col items-center gap-3">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          <span aria-hidden="true" className="h-px w-6 bg-gold/60" />
          <span className="pl-[0.4em]">{profile.label}</span>
          <span aria-hidden="true" className="h-px w-6 bg-gold/60" />
        </p>
        <h2
          id={headingId}
          className="font-script text-5xl font-normal leading-tight text-cream drop-shadow-[0_2px_6px_rgb(0_0_0/0.45)]"
        >
          {profile.name}
        </h2>
        <p className="max-w-xs text-lg italic leading-relaxed text-pretty text-cream/80">{profile.description}</p>
      </div>
    </motion.article>
  )
}
