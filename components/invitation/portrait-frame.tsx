'use client'

import Image from 'next/image'
import { useState } from 'react'

const PLACEHOLDER = '/images/portrait-placeholder.png'

type PortraitFrameProps = {
  name: string
  photo: string | null
}

export function PortraitFrame({ name, photo }: PortraitFrameProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const showPhoto = Boolean(photo) && failedSrc !== photo

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative w-full max-w-[17rem]">
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="absolute -top-3 left-1/2 z-10 size-6 -translate-x-1/2 fill-gold drop-shadow-[0_0_6px_rgb(227_201_143/0.5)]"
        >
          <path d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" />
        </svg>

        <div className="rounded-t-full border border-gold/80 p-1.5 shadow-[0_24px_50px_-20px_rgb(0_0_0/0.8)]">
          <div className="rounded-t-full border-2 border-gold p-1">
            <div className="rounded-t-full border border-gold/50 p-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full bg-maroon-deep">
                {showPhoto && photo ? (
                  <Image
                    key={photo}
                    src={photo}
                    alt={`Portrait of ${name}`}
                    fill
                    sizes="(max-width: 768px) 80vw, 272px"
                    onError={() => setFailedSrc(photo)}
                    className="object-cover animate-in fade-in duration-700"
                  />
                ) : (
                  <Image
                    src={PLACEHOLDER}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 80vw, 272px"
                    className="object-cover"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-t-full shadow-[inset_0_0_30px_rgb(30_6_12/0.6)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
