const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: '🌐', level: 100 },
      { name: 'CSS3', icon: '🎨', level: 95 },
      { name: 'JavaScript', icon: '⚡', level: 60 },
      { name: 'React', icon: '⚛️', level: 70 },
      { name: 'Bootstrap', icon: '🅱️', level: 85 },
      { name: 'Tailwind CSS', icon: '💨', level: 65 },
    ],
  },
  {
    category: 'Plataformas & CMS',
    items: [
      { name: 'WordPress', icon: '📝', level: 85 },
      { name: 'Liferay', icon: '🔷', level: 75 },
    ],
  },
  {
    category: 'Ferramentas',
    items: [
      { name: 'Git', icon: '🔀', level: 75 },
      { name: 'GitHub', icon: '🐙', level: 85 },
      { name: 'VS Code', icon: '💻', level: 90 },
      { name: 'Pacote Office', icon: '📊', level: 80 },
    ],
  },
  {
    category: 'QA & Suporte',
    items: [
      { name: 'Testes Manuais', icon: '🧪', level: 80 },
      { name: 'Bug Tracking', icon: '🐛', level: 80 },
      { name: 'Suporte Técnico', icon: '🛠️', level: 85 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="tecnologias" className="py-28 pattern-lines">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-subtitle">Competências</p>
          <h2 className="section-title">Tecnologias &amp; Habilidades</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="card p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold-500 dark:text-gold-300 mb-6">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ skill }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-base">{skill.icon}</span>
          <span className="font-body text-sm font-medium text-forest-700 dark:text-cream-100">
            {skill.name}
          </span>
        </div>
        <span className="font-mono text-xs text-forest-500/60 dark:text-cream-200/40">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-cream-200 dark:bg-forest-700 overflow-hidden">
        <div
          className="h-full bg-forest-500 dark:bg-gold-400 transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )
}
