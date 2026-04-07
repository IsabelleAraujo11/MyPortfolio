const experiences = [
  {
    company: 'SAT Sistemas',
    role: 'Estagiária em QA (Quality Assurance)',
    period: 'Março 2026 – Atual',
    current: true,
    description:
      'Realização de testes nas telas do sistema com foco na identificação de erros e inconsistências. Registro e abertura de chamados para a equipe de desenvolvimento, acompanhamento das correções e execução de retestes das funcionalidades ajustadas, garantindo qualidade e correto funcionamento do sistema.',
    tags: ['QA', 'Testes Manuais', 'Bug Tracking', 'Retestes'],
  },
  {
    company: 'Frente Parlamentar de Portos e Aeroportos (FPPA)',
    role: 'Desenvolvedora Frontend – Freelancer',
    period: 'Agosto 2025 – Atual',
    current: true,
    description:
      'Desenvolvimento e manutenção de sites em WordPress, personalização de temas e plugins, correção de bugs e implementação de melhorias visando performance e usabilidade.',
    tags: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
  },
  {
    company: 'SAT Sistemas',
    role: 'Estagiária de Suporte',
    period: 'Janeiro 2026 – Março 2026',
    current: false,
    description:
      'Atendimento aos usuários do sistema de gestão e PDV para mercados e comércios, suporte remoto via aplicativo, registro e acompanhamento de chamados, além da identificação e resolução de problemas operacionais no sistema.',
    tags: ['Suporte Técnico', 'PDV', 'Gestão de Chamados'],
  },
  {
    company: 'SEA Tecnologia',
    role: 'Estagiária de Desenvolvimento Frontend',
    period: 'Outubro 2024 – Agosto 2025',
    current: false,
    description:
      'Atuação na migração de portais do WordPress para Liferay, desenvolvimento de funcionalidades front-end na plataforma e suporte à homologação com o cliente.',
    tags: ['Liferay', 'WordPress', 'HTML', 'CSS', 'JavaScript'],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-28 pattern-lines">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-subtitle" data-reveal>Trajetória</p>
          <h2 className="section-title" data-reveal data-reveal-delay={100}>Experiência Profissional</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-cream-200 dark:bg-forest-700/60 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ exp, index }) {
  const isLeft = index % 2 === 0

  return (
    <div className={`relative md:grid md:grid-cols-2 md:gap-8 items-start`}>
      {/* Dot */}
      <div className="absolute hidden md:block left-1/2 top-6 w-3 h-3 -translate-x-1/2 border-2 border-gold-400 dark:border-gold-300 bg-cream-50 dark:bg-forest-900" />

      {/* Content */}
      <div
        className={`card p-6 ${isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}
        data-reveal
        data-reveal-delay={index * 90}
      >
        <div className={`flex items-start gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
          <div>
            <div className={`flex items-center gap-2 mb-0.5 ${isLeft ? 'md:justify-end' : ''}`}>
              {exp.current && (
                <span className="inline-block px-2 py-0.5 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 font-mono text-[10px] text-green-700 dark:text-green-400">
                  Atual
                </span>
              )}
            </div>
            <h3 className="font-display text-lg text-forest-800 dark:text-cream-100 leading-snug">
              {exp.role}
            </h3>
            <p className="font-body text-sm font-semibold text-forest-600 dark:text-gold-300 mt-0.5">
              {exp.company}
            </p>
            <p className="font-mono text-xs text-forest-500/60 dark:text-cream-200/40 mt-0.5">
              {exp.period}
            </p>
          </div>
        </div>

        <p className="font-body text-sm text-forest-600/70 dark:text-cream-200/60 leading-relaxed mb-4">
          {exp.description}
        </p>

        <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 font-mono text-[11px] bg-forest-50 dark:bg-forest-700
                         border border-forest-200 dark:border-forest-600/50
                         text-forest-600 dark:text-cream-200/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Spacer for alternating layout */}
      {isLeft && <div className="hidden md:block md:col-start-2" />}
      {!isLeft && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
    </div>
  )
}
