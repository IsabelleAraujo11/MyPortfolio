import minhaFoto from '../assets/eu.png'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export default function Hero() {
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pattern-lines"
    >
      {/* Decorative bg circle */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full
                      bg-forest-400/10 dark:bg-forest-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full
                      bg-gold-300/15 dark:bg-gold-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <p className="section-subtitle animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Desenvolvedora Web
            </p>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl text-forest-800 dark:text-cream-100 leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Isabelle
              <br />
              <span className="text-forest-600 dark:text-gold-300 italic">Louzada</span>
            </h1>

            <p
              className="font-body text-base md:text-lg text-forest-600/80 dark:text-cream-200/70 leading-relaxed max-w-md mb-8 animate-fade-up"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              Desenvolvedora web com 3 anos de estudo. Estudante de Ciência da Computação na UCB,
              buscando criar experiências digitais modernas e acessíveis.
            </p>

            <div
              className="flex flex-wrap gap-3 mb-10 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <a
                href="https://www.linkedin.com/in/isabellelouzada"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/IsabelleAraujo11"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="mailto:isabellelouzada@gmail.com"
                className="btn-outline"
              >
                <Mail size={16} />
                Email
              </a>
            </div>

            <button
              onClick={() => scroll('sobre')}
              className="flex items-center gap-2 text-sm font-mono text-forest-500 dark:text-cream-200/50 hover:text-forest-700 dark:hover:text-cream-200 transition-colors animate-fade-up group"
              style={{ animationDelay: '0.65s', opacity: 0 }}
            >
              <ArrowDown size={14} className="animate-bounce" />
              scroll para explorar
            </button>
          </div>

          {/* Avatar */}
          <div
            className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <div className="relative">
              {/* Frame decoration */}
              <div className="absolute -inset-3 border border-gold-400/40 dark:border-gold-300/30" />
              <div className="absolute -inset-6 border border-forest-400/20 dark:border-forest-500/20" />

              {/* Avatar placeholder — replace src with real photo */}
             <div className="w-64 h-64 md:w-80 md:h-80 bg-forest-100 dark:bg-forest-800 overflow-hidden relative">
            <img src={minhaFoto} alt="Isabelle Louzada" className="w-full h-full object-cover" />
            </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-forest-600 dark:bg-gold-400 px-4 py-2">
                <span className="font-mono text-xs text-cream-50 dark:text-forest-900 font-medium">
                  6° sem · UCB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
