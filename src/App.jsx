import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) return saved === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  useEffect(() => {
    if (showSplash) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const revealTargets = Array.from(document.querySelectorAll('[data-reveal]'))
    revealTargets.forEach((el) => {
      el.classList.add('reveal')
      const delay = Number(el.getAttribute('data-reveal-delay') || 0)
      if (!Number.isNaN(delay) && delay > 0) {
        el.style.transitionDelay = `${delay}ms`
      }
    })

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('reveal--in')
          obs.unobserve(entry.target)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    revealTargets.forEach((el) => revealObserver.observe(el))

    const skillFills = Array.from(document.querySelectorAll('[data-skillbar-fill]'))
    skillFills.forEach((el) => {
      el.style.width = '0%'
    })

    const skillObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const levelAttr = entry.target.getAttribute('data-level')
          const level = levelAttr ? Number(levelAttr) : null
          if (level !== null && !Number.isNaN(level)) {
            entry.target.style.width = `${Math.max(0, Math.min(100, level))}%`
          }
          obs.unobserve(entry.target)
        })
      },
      { threshold: 0.35, rootMargin: '0px 0px -15% 0px' },
    )

    skillFills.forEach((el) => skillObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      skillObserver.disconnect()
      revealTargets.forEach((el) => {
        el.style.transitionDelay = ''
      })
    }
  }, [showSplash])

  const toggleDark = () => setDarkMode((d) => !d)

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-forest-900 transition-colors duration-300">
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Header darkMode={darkMode} toggleDark={toggleDark} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
