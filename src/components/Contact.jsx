import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react'

const contacts = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'isabellelouzada@gmail.com',
    href: 'mailto:isabellelouzada@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Telefone',
    value: '(61) 99200-1094',
    href: 'tel:+5561992001094',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/isabellelouzada',
    href: 'https://www.linkedin.com/in/isabellelouzada',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/IsabelleAraujo11',
    href: 'https://github.com/IsabelleAraujo11',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Localização',
    value: 'Águas Claras, Brasília – DF',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contato" className="py-28 bg-white dark:bg-forest-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-subtitle">Vamos conversar</p>
          <h2 className="section-title">Contato</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: message */}
          <div>
            <p className="font-body text-base text-forest-600/80 dark:text-cream-200/70 leading-relaxed mb-8 max-w-md">
              Estou aberta a novas oportunidades de estágio, trainee ou posições junior.
              Caso queira bater um papo, tirar uma dúvida ou propor alguma colaboração,
              fique à vontade para entrar em contato!
            </p>

            <a
              href="mailto:isabellelouzada@gmail.com"
              className="btn-primary"
            >
              <Mail size={16} />
              Enviar e-mail
            </a>
          </div>

          {/* Right: contact cards */}
          <div className="space-y-3">
            {contacts.map((c) => (
              <ContactCard key={c.label} contact={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ contact }) {
  const inner = (
    <div className="card p-4 flex items-center gap-4 group">
      <div className="text-gold-500 dark:text-gold-300 shrink-0">{contact.icon}</div>
      <div>
        <p className="font-mono text-xs text-forest-500/50 dark:text-cream-200/40 uppercase tracking-widest">
          {contact.label}
        </p>
        <p className={`font-body text-sm text-forest-700 dark:text-cream-100 ${contact.href ? 'group-hover:text-gold-500 dark:group-hover:text-gold-300 transition-colors' : ''}`}>
          {contact.value}
        </p>
      </div>
    </div>
  )

  return contact.href ? (
    <a href={contact.href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  )
}
