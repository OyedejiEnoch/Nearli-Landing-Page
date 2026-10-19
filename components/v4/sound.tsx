"use client"

import { createContext, useCallback, useContext, useEffect, useRef, useSyncExternalStore } from "react"

// Interface sound + touch, Pocket-style but our own: every sound is
// synthesised with Web Audio (no files to load), plays only after the
// visitor's first tap (browsers block earlier audio), and can be switched
// off from the toggle that is always on screen. Phones also get a tiny
// vibration on taps. ElevenLabs-made samples can replace any voice later.

export type Cue = "tick" | "pop" | "ding" | "found" | "whoosh"
type Ctx = { enabled: boolean; toggle: () => void; play: (cue: Cue, opts?: { haptic?: boolean }) => void }
const SoundCtx = createContext<Ctx>({ enabled: false, toggle: () => {}, play: () => {} })
const KEY = "ahiver_sound"

// The on/off choice lives in localStorage; on the server it reads as "on".
const listeners = new Set<() => void>()
const pref = {
  subscribe: (l: () => void) => {
    listeners.add(l)
    return () => listeners.delete(l)
  },
  get: () => {
    try {
      return localStorage.getItem(KEY) !== "off"
    } catch {
      return true
    }
  },
  set: (on: boolean) => {
    try {
      localStorage.setItem(KEY, on ? "on" : "off")
    } catch {}
    listeners.forEach((l) => l())
  },
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const enabled = useSyncExternalStore(pref.subscribe, pref.get, () => true)
  const ctxRef = useRef<AudioContext | null>(null)
  const unlocked = useRef(false)
  // play() stays the same function for the page's life (GSAP callbacks
  // capture it once), so it reads the switch from a ref.
  const on = useRef(true)
  useEffect(() => {
    on.current = enabled
  }, [enabled])

  useEffect(() => {
    const unlock = () => {
      if (unlocked.current) return
      unlocked.current = true
      try {
        ctxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
      } catch {}
    }
    window.addEventListener("pointerdown", unlock, { once: true })
    window.addEventListener("keydown", unlock, { once: true })
    return () => {
      window.removeEventListener("pointerdown", unlock)
      window.removeEventListener("keydown", unlock)
    }
  }, [])

  const toggle = useCallback(() => pref.set(!pref.get()), [])

  const play = useCallback(
    (cue: Cue, opts?: { haptic?: boolean }) => {
      if (opts?.haptic && typeof navigator !== "undefined" && "vibrate" in navigator && matchMedia("(pointer: coarse)").matches) {
        navigator.vibrate(6)
      }
      const ac = ctxRef.current
      if (!on.current || !ac) return
      if (ac.state === "suspended") ac.resume()
      const t = ac.currentTime
      const out = ac.createGain()
      out.gain.value = 0.18
      out.connect(ac.destination)
      const tone = (freq: number, at: number, dur: number, type: OscillatorType = "sine", peak = 1, glideTo?: number) => {
        const o = ac.createOscillator()
        const g = ac.createGain()
        o.type = type
        o.frequency.setValueAtTime(freq, t + at)
        if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t + at + dur)
        g.gain.setValueAtTime(0.0001, t + at)
        g.gain.exponentialRampToValueAtTime(peak, t + at + 0.008)
        g.gain.exponentialRampToValueAtTime(0.0001, t + at + dur)
        o.connect(g).connect(out)
        o.start(t + at)
        o.stop(t + at + dur + 0.02)
      }
      switch (cue) {
        case "tick":
          tone(1800, 0, 0.04, "triangle", 0.35)
          break
        case "pop":
          tone(520, 0, 0.12, "sine", 0.9, 980)
          break
        case "ding":
          tone(880, 0, 0.18, "sine", 0.6)
          tone(1320, 0.09, 0.26, "sine", 0.5)
          break
        case "found":
          tone(180, 0, 0.12, "sine", 0.9, 90)
          tone(1046, 0.08, 0.3, "sine", 0.45)
          tone(1568, 0.16, 0.42, "sine", 0.35)
          break
        case "whoosh": {
          const len = Math.floor(ac.sampleRate * 0.35)
          const buf = ac.createBuffer(1, len, ac.sampleRate)
          const d = buf.getChannelData(0)
          for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.sin((Math.PI * i) / len)
          const src = ac.createBufferSource()
          const f = ac.createBiquadFilter()
          f.type = "bandpass"
          f.frequency.setValueAtTime(600, t)
          f.frequency.exponentialRampToValueAtTime(2400, t + 0.35)
          const g = ac.createGain()
          g.gain.value = 0.25
          src.buffer = buf
          src.connect(f).connect(g).connect(out)
          src.start(t)
          break
        }
      }
    },
    [],
  )

  return <SoundCtx.Provider value={{ enabled, toggle, play }}>{children}</SoundCtx.Provider>
}

export const useSound = () => useContext(SoundCtx)

export function SoundToggle() {
  const { enabled, toggle, play } = useSound()
  return (
    <button
      type="button"
      onClick={() => {
        toggle()
        if (!enabled) setTimeout(() => play("tick"), 30)
      }}
      aria-pressed={enabled}
      aria-label="Interface sound"
      className="fixed right-[72px] top-[14px] z-[60] inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-white/18 px-3 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-auto sm:top-auto sm:bg-[#0B0B0C]/70 sm:px-4 lg:right-auto text-sm font-semibold text-white backdrop-blur-md transition-transform duration-150 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H3v6h3l5 4z" />
        {enabled ? (
          <>
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </>
        ) : (
          <path d="m16 9 5 6m0-6-5 6" />
        )}
      </svg>
      <span className="max-sm:sr-only">{enabled ? "Sound on" : "Sound off"}</span>
    </button>
  )
}
