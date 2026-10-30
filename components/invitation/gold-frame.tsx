import { CornerOrnament } from './corner-ornament'

export function GoldFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-3 border border-gold/70" />
      <div className="absolute inset-[18px] border border-gold/30" />
      <CornerOrnament corner="top-left" />
      <CornerOrnament corner="top-right" />
      <CornerOrnament corner="bottom-left" />
      <CornerOrnament corner="bottom-right" />
    </div>
  )
}
