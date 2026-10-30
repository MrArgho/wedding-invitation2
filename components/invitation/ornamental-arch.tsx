type Point = [number, number]

const WIDTH = 300
const HEIGHT = 460

function cubic(p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point {
  const u = 1 - t
  const x = u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0]
  const y = u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]
  return [x, y]
}

const r = (n: number) => Math.round(n * 100) / 100

/**
 * Builds a Mughal-style multifoil (scalloped) arch: straight jambs rising into an
 * ogee crown, with the crown traced as a chain of small circular lobes.
 */
function buildArchPath(inset: number, lobesPerSide: number, scalloped: boolean) {
  const left = inset
  const right = WIDTH - inset
  const bottom = HEIGHT
  const springY = 215 + inset * 0.4
  const apexY = 26 + inset * 1.15
  const mid = WIDTH / 2

  const curve = (t: number): Point =>
    cubic([left, springY], [left, springY - 105], [mid - 52, apexY + 62], [mid, apexY], t)

  const leftPoints: Point[] = Array.from({ length: lobesPerSide + 1 }, (_, i) =>
    curve(i / lobesPerSide),
  )
  const rightPoints: Point[] = [...leftPoints].reverse().map(([x, y]) => [WIDTH - x, y])
  const crown = [...leftPoints, ...rightPoints.slice(1)]

  let d = `M ${r(left)} ${bottom} L ${r(left)} ${r(springY)}`
  for (let i = 1; i < crown.length; i++) {
    const [x, y] = crown[i]
    if (scalloped) {
      const [px, py] = crown[i - 1]
      const radius = Math.hypot(x - px, y - py) * 0.58
      d += ` A ${r(radius)} ${r(radius)} 0 0 1 ${r(x)} ${r(y)}`
    } else {
      d += ` L ${r(x)} ${r(y)}`
    }
  }
  d += ` L ${r(right)} ${bottom}`
  return d
}

const outerPath = buildArchPath(6, 14, false)
const middlePath = buildArchPath(14, 14, false)
const scallopPath = buildArchPath(26, 9, true)

export function OrnamentalArch({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 -14 ${WIDTH} ${HEIGHT + 14}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="arch-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold-soft)" />
          <stop offset="55%" stopColor="var(--gold)" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="arch-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#8c2c3e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#8c2c3e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path d={`${scallopPath} Z`} fill="url(#arch-glow)" />

      <path d={outerPath} stroke="url(#arch-gold)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      <path
        d={middlePath}
        stroke="url(#arch-gold)"
        strokeWidth="0.6"
        strokeDasharray="1 3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path d={scallopPath} stroke="url(#arch-gold)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />

      {/* Crown finial */}
      <g stroke="var(--gold-soft)" strokeWidth="0.9" vectorEffect="non-scaling-stroke">
        <path d="M150 -10 C 156 -2, 158 6, 150 14 C 142 6, 144 -2, 150 -10 Z" fill="var(--gold)" fillOpacity="0.25" />
        <path d="M136 22 C 142 14, 146 14, 150 18 C 154 14, 158 14, 164 22" />
        <circle cx="150" cy="-13" r="1.6" fill="var(--gold-soft)" />
      </g>

      {/* Spring-point rosettes */}
      {[26, WIDTH - 26].map((cx) => (
        <g key={cx} stroke="var(--gold)" strokeWidth="0.8" vectorEffect="non-scaling-stroke">
          <circle cx={cx} cy="226" r="4.5" />
          <circle cx={cx} cy="226" r="1.4" fill="var(--gold)" />
        </g>
      ))}
    </svg>
  )
}
