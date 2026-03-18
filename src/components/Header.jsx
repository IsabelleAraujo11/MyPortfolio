import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export default function Header({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navItems.map((n) => n.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-cream-50/95 dark:bg-forest-900/95 backdrop-blur-sm border-b border-cream-200 dark:border-forest-700/50 py-3 shadow-sm'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home') }}
          className="font-display text-xl text-forest-700 dark:text-cream-100 hover:text-gold-500 dark:hover:text-gold-300 transition-colors"
        >
          IL<span className="text-gold-400">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href) }}
                className={`font-body text-sm font-medium transition-colors relative group
                  ${active === id
                    ? 'text-forest-600 dark:text-gold-300'
                    : 'text-forest-600/70 dark:text-cream-200/60 hover:text-forest-700 dark:hover:text-cream-100'
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300
                  ${active === id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            )
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Alternar modo escuro"
            className="p-2 rounded-none border border-forest-600/20 dark:border-cream-200/20
                       text-forest-600 dark:text-cream-200
                       hover:bg-forest-600/10 dark:hover:bg-cream-200/10 transition-colors"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-forest-700 dark:text-cream-200"
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-50 dark:bg-forest-900 border-t border-cream-200 dark:border-forest-700/50 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNav(item.href) }}
              className="font-body text-sm font-medium text-forest-700 dark:text-cream-200 hover:text-gold-500 dark:hover:text-gold-300 transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
