'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

export function OpenInvitationButton({ href = '/invitation' }: { href?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className="group relative"
    >
      <span
        aria-hidden="true"
        className="absolute -inset-[1cqw] rounded-[0.6cqw] border border-gold/30 transition-colors duration-500 group-hover:border-gold/70"
      />
      <Link
        href={href}
        className="relative flex items-center gap-[1.6cqw] overflow-hidden rounded-[0.4cqw] border border-gold bg-maroon-deep/40 px-[4cqw] py-[2cqw] font-serif text-[2.5cqw] font-semibold uppercase whitespace-nowrap tracking-[0.22em] text-gold-soft transition-[color,box-shadow] duration-500 hover:text-maroon-deep hover:shadow-[0_0_24px_-4px_rgb(227_201_143/0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-soft"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-center scale-x-0 bg-linear-to-r from-gold via-gold-soft to-gold transition-transform duration-500 ease-out group-hover:scale-x-100 group-active:scale-x-100"
        />
        <Diamond />
        <span className="relative">Open Invitation</span>
        <Diamond />
      </Link>
    </motion.div>
  )
}

function Diamond() {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      className="relative size-[1.6cqw] fill-gold transition-[fill,transform] duration-500 group-hover:rotate-90 group-hover:fill-maroon-deep"
    >
      <path d="M5 0 L10 5 L5 10 L0 5 Z" />
    </svg>
  )
}
