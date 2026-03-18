import { ExternalLink, Github, Tag } from 'lucide-react'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projetos" className="py-28 bg-white dark:bg-forest-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-subtitle">Portfólio</p>
          <h2 className="section-title">Projetos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/IsabelleAraujo11"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} />
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const colors = [
    'bg-forest-100 dark:bg-forest-700/50',
    'bg-cream-200 dark:bg-forest-700/30',
    'bg-gold-300/20 dark:bg-gold-400/10',
    'bg-forest-200/50 dark:bg-forest-600/30',
  ]

  return (
    <div className="card group flex flex-col overflow-hidden">
      {/* Image / placeholder */}
      <div className={`h-44 ${colors[index % colors.length]} flex items-center justify-center relative overflow-hidden`}>
        {project.image ? (
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        ) : (
          <span className="font-display text-5xl text-forest-400/30 dark:text-cream-200/10 select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
        <div className="absolute inset-0 bg-forest-800/0 group-hover:bg-forest-800/10 dark:group-hover:bg-forest-900/20 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-forest-800 dark:text-cream-100 mb-2 leading-snug">
          {project.name}
        </h3>
        <p className="font-body text-sm text-forest-600/70 dark:text-cream-200/60 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Techs */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techs.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-forest-50 dark:bg-forest-700
                         border border-forest-200 dark:border-forest-600/50
                         font-mono text-[11px] text-forest-600 dark:text-cream-200/70"
            >
              <Tag size={10} />
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-2"
            >
              <ExternalLink size={13} />
              Ver Projeto
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs px-4 py-2"
          >
            <Github size={13} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
