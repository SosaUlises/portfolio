/**
 * Motion Design System — shared helpers.
 *
 * Elements opt into scroll reveal through data attributes, which keeps
 * sections as Server Components. A single client-side observer
 * (`components/motion-reveal.tsx`) toggles `data-revealed` and the visual
 * behaviour lives in `app/globals.css` (tokens, variants and reduced motion).
 *
 * Usage:
 *   <div {...reveal()} />                          // fade + short rise
 *   <div {...reveal({ delay: 2 })} />              // 2 × stagger token
 *   <div {...reveal({ variant: "media", delay: 0, delayLg: 1 })} />
 */

export type RevealVariant = "up" | "fade" | "media" | "rule" | "line"
export type RevealDelay = 0 | 1 | 2 | 3 | 4 | 5

export interface RevealOptions {
  variant?: RevealVariant
  /** Relative order among siblings entering the viewport together. */
  delay?: RevealDelay
  /** Optional override from 1024px up (e.g. alternating layouts). */
  delayLg?: RevealDelay
}

export interface RevealAttributes {
  "data-reveal": string
  "data-reveal-delay"?: string
  "data-reveal-delay-lg"?: string
}

export function reveal({ variant = "up", delay = 0, delayLg }: RevealOptions = {}): RevealAttributes {
  const attrs: RevealAttributes = { "data-reveal": variant }
  if (delay > 0) attrs["data-reveal-delay"] = String(delay)
  if (delayLg !== undefined) attrs["data-reveal-delay-lg"] = String(delayLg)
  return attrs
}
