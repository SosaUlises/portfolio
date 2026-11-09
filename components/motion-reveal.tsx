"use client"

import * as React from "react"

const REVEAL_SELECTOR = "[data-reveal]"

/** Portion of the viewport (from the top) considered "already in view" at mount. */
const INITIAL_VISIBLE_RATIO = 0.9

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

/**
 * MotionReveal — single shared observer for the Home scroll reveals.
 *
 * - Renders nothing; sections stay Server Components and opt in with
 *   `reveal()` data attributes (see `lib/motion.ts`).
 * - Progressive enhancement: the pre-reveal hidden state only exists once
 *   this component adds `.motion-ready` to <html>. Elements already in (or
 *   above) the viewport are marked as revealed *before* that, inside a layout
 *   effect, so nothing visible ever flickers or re-animates on reload.
 * - Each element animates once (unobserved after reveal).
 * - Anchor navigation (`#section`) resolves the target section quickly,
 *   without stagger, so content is never invisible when the user lands.
 * - Respects `prefers-reduced-motion`: does nothing, content stays static.
 */
export function MotionReveal() {
  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!("IntersectionObserver" in window)) return

    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    if (!elements.length) return

    const threshold = window.innerHeight * INITIAL_VISIBLE_RATIO
    const pending: HTMLElement[] = []

    for (const el of elements) {
      if (el.dataset.revealed) continue
      if (el.getBoundingClientRect().top < threshold) {
        el.dataset.revealed = "instant"
      } else {
        pending.push(el)
      }
    }

    root.classList.add("motion-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          if (!el.dataset.revealed) el.dataset.revealed = "true"
          observer.unobserve(el)
        }
      },
      // Trigger as content enters the lower reading zone, not once fully visible.
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    )

    pending.forEach((el) => observer.observe(el))

    const revealSection = (id: string) => {
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      target.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
        if (el.dataset.revealed) return
        el.dataset.revealed = "fast"
        observer.unobserve(el)
      })
    }

    const hashId = (hash: string) => {
      try {
        return decodeURIComponent(hash.replace(/^#/, ""))
      } catch {
        return ""
      }
    }

    // Landing directly on /#section (or arriving from an internal page).
    if (window.location.hash) revealSection(hashId(window.location.hash))

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.("a[href*='#']")
      if (!(anchor instanceof HTMLAnchorElement)) return
      const url = new URL(anchor.href, window.location.href)
      if (url.pathname !== window.location.pathname || !url.hash) return
      revealSection(hashId(url.hash))
    }

    const onHashChange = () => revealSection(hashId(window.location.hash))

    document.addEventListener("click", onClick)
    window.addEventListener("hashchange", onHashChange)

    return () => {
      observer.disconnect()
      document.removeEventListener("click", onClick)
      window.removeEventListener("hashchange", onHashChange)
      root.classList.remove("motion-ready")
    }
  }, [])

  return null
}
