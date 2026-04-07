import { GraduationCap, MapPin, Globe } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="py-28 bg-white dark:bg-forest-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <p className="section-subtitle" data-reveal>Quem sou eu</p>
            <h2 className="section-title mb-6" data-reveal data-reveal-delay={100}>Sobre mim</h2>

            <div
              className="space-y-4 text-forest-600/80 dark:text-cream-200/70 leading-relaxed font-body text-base"
              data-reveal
              data-reveal-delay={180}
            >
              <p>
                Sou <strong className="text-forest-700 dark:text-cream-100 font-semibold">Isabelle Louzada</strong>, desenvolvedora
                web com 21 anos, natural de Manaus, mas atualmente em Brasília. Tenho 3 anos de estudo e prática em
                desenvolvimento web, com foco em criar interfaces modernas, funcionais e acessíveis.
              </p>
              <p>
                Minha trajetória inclui experiências em startups e organizações públicas, onde
                atuei com migração de portais, desenvolvimento web, suporte técnico e
                garantia de qualidade de software. Tenho facilidade para aprender novas
                tecnologias e gosto de trabalhar em equipe.
              </p>
              <p>
                Atualmente estou no <strong className="text-forest-700 dark:text-cream-100 font-semibold">6° semestre de Ciência da Computação</strong> na
                UCB, buscando uma oportunidade de estágio, trainee ou vaga como analista junior
                para continuar crescendo profissionalmente.
              </p>
            </div>
          </div>

          {/* Right: info cards */}
          <div className="space-y-4">
            <InfoCard
              icon={<MapPin size={18} />}
              label="Localização"
              value="Águas Claras, Brasília – DF"
              delay={0}
            />
            <InfoCard
              icon={<GraduationCap size={18} />}
              label="Formação"
              value="Ciência da Computação · UCB · 6° Semestre (Jul 2023 – Jul 2027)"
              delay={90}
            />
            <InfoCard
              icon={<Globe size={18} />}
              label="Idiomas"
              value="Português (nativo) · Inglês B1 — leitura, escrita e conversação"
              delay={180}
            />

            <div className="card p-5 flex items-center gap-4 mt-2" data-reveal data-reveal-delay={260}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <p className="font-body text-sm text-forest-700 dark:text-cream-100">
                Disponível para oportunidades de <strong className="font-semibold">estágio, trainee e desenvolvedor ou analista júnior</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, label, value, delay = 0 }) {
  return (
    <div className="card p-5" data-reveal data-reveal-delay={delay}>
      <div className="flex gap-4 items-start">
        <div className="text-gold-500 dark:text-gold-300 mt-0.5 shrink-0">{icon}</div>
        <div>
          <p className="font-mono text-xs text-forest-500/60 dark:text-cream-200/40 uppercase tracking-widest mb-1">{label}</p>
          <p className="font-body text-sm text-forest-700 dark:text-cream-100">{value}</p>
        </div>
      </div>
    </div>
  )
}
