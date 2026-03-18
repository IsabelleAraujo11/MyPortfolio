# Portfólio — Isabelle Louzada

Portfólio pessoal de Isabelle Louzada, desenvolvedora frontend. Apresenta experiências profissionais, habilidades técnicas e projetos em uma página única com navegação suave, dark mode e design responsivo.

---

## Tecnologias

- **React 18** — construção dos componentes e interface
- **Vite 5** — servidor de desenvolvimento rápido e build otimizado
- **Tailwind CSS 3** — estilização com classes utilitárias
- **Lucide React** — biblioteca de ícones

---

## Estrutura das pastas

```
src/
├── components/      # cada seção do site é um componente separado
├── assets/
│   └── images/      # foto de perfil
├── data/
│   └── projects.js  # lista de projetos exibidos no site
├── App.jsx          # componente raiz, controla o dark mode
└── index.css        # estilos globais e textura de fundo
```

---

## Como personalizar

| O que mudar | Onde mexer |
|---|---|
| Cores do site | `tailwind.config.js` |
| Foto de perfil | `src/assets/images/eu.png` |
| Projetos | `src/data/projects.js` |
| Experiências profissionais | `src/components/Experience.jsx` |
| Informações de contato | `src/components/Contact.jsx` |
| Textura do fundo | `.pattern-lines` em `src/index.css` |

---

Desenvolvido por **Isabelle Louzada** 🌸