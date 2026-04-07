import { useEffect, useMemo, useState } from 'react'

export default function SplashScreen({ onFinish }) {
  const roleLabel = 'Desenvolvedora Web'
  const nameLabel = 'Isabelle Louzada'

  const reduceMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const fadeOutMs = reduceMotion ? 0 : 350
  const [exiting, setExiting] = useState(false)
  const [entered, setEntered] = useState(false)
  const [roleText, setRoleText] = useState('')
  const [nameText, setNameText] = useState('')

  useEffect(() => {
    const enterTimer = window.setTimeout(() => setEntered(true), 20)
    return () => window.clearTimeout(enterTimer)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setRoleText(roleLabel)
      setNameText(nameLabel)
      const finishTimer = window.setTimeout(() => onFinish?.(), 600)
      return () => window.clearTimeout(finishTimer)
    }

    let cancelled = false
    let nextTimer = null
    let finishTimer = null

    const schedule = (fn, delayMs) => {
      nextTimer = window.setTimeout(fn, delayMs)
    }

    const typeWithJitter = (fullText, setter, { minDelay, maxDelay }, done) => {
      let i = 0

      const step = () => {
        if (cancelled) return
        i += 1
        setter(fullText.slice(0, i))
        if (i >= fullText.length) {
          done?.()
          return
        }
        const delay = Math.floor(minDelay + Math.random() * (maxDelay - minDelay))
        schedule(step, delay)
      }

      schedule(step, 90)
    }

    typeWithJitter(
      roleLabel,
      setRoleText,
      { minDelay: 70, maxDelay: 105 },
      () => {
        schedule(() => {
          typeWithJitter(
            nameLabel,
            setNameText,
            { minDelay: 60, maxDelay: 95 },
            () => {
              setExiting(true)
              finishTimer = window.setTimeout(() => onFinish?.(), fadeOutMs)
            },
          )
        }, 260)
      },
    )

    return () => {
      cancelled = true
      if (nextTimer) window.clearTimeout(nextTimer)
      if (finishTimer) window.clearTimeout(finishTimer)
    }
  }, [nameLabel, reduceMotion, roleLabel])

  return (
    <div
      className={[
        'fixed inset-0 z-50 flex items-center justify-center',
        'bg-cream-50 dark:bg-forest-900 pattern-lines',
        'transition-opacity',
        reduceMotion ? 'duration-0' : 'duration-300',
        exiting ? 'opacity-0' : 'opacity-100',
      ].join(' ')}
      aria-label="Tela inicial"
      role="status"
      aria-live="polite"
    >
      <div
        className={[
          'text-center px-8 py-10 mx-6',
          'border border-cream-200/80 dark:border-forest-700/60',
          'bg-white/60 dark:bg-forest-800/35 backdrop-blur-sm shadow-sm',
          'transition-all',
          reduceMotion ? 'duration-0' : 'duration-500',
          entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        ].join(' ')}
      >
        <div className="font-mono text-sm sm:text-base tracking-[0.28em] text-gold-500 dark:text-gold-300">
          <span>{roleText}</span>
          {!reduceMotion && roleText.length < roleLabel.length ? (
            <span className="inline-block w-[1ch] animate-pulse opacity-70">|</span>
          ) : null}
        </div>
        <div className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-forest-700 dark:text-cream-100">
          <span>{nameText}</span>
          {!reduceMotion &&
          roleText.length >= roleLabel.length &&
          nameText.length < nameLabel.length ? (
            <span className="inline-block w-[1ch] animate-pulse opacity-70">|</span>
          ) : null}
        </div>
      </div>
    </div>
  )
}
