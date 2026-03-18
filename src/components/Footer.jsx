import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-800 dark:bg-forest-900 text-cream-200/60 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm flex items-center gap-1.5">
          © {year} · Desenvolvido com
          <Heart size={13} className="text-gold-400 fill-gold-400" />
          por{' '}
          <span className="text-cream-100 font-medium">Isabelle Louzada</span>
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/IsabelleAraujo11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-cream-100 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/isabellelouzada"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cream-100 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:isabellelouzada@gmail.com"
            aria-label="Email"
            className="hover:text-cream-100 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
