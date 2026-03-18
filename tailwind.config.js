/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
  cream: {
    50: '#fdf8f8',   // 🎨 fundo geral da página (light mode)
    100: '#faeef0',  // 🎨 fundo de seções alternadas
    200: '#f2d9de',  // 🎨 bordas dos cards e separadores
  },
  forest: {
    // ⬇️ esses são os tons principais — mauve/ameixa
    400: '#c08090',  // ícones, detalhes suaves
    500: '#a8637a',  // cor de acento geral
    600: '#8c4d63',  // botões primários, links ativos
    700: '#6e3a4e',  // títulos e textos importantes
    800: '#4d2535',  // texto principal (light mode)
    900: '#2e1520',  // fundo do dark mode
  },
  gold: {
    300: '#f0c4d0',  // 🌸 destaque rosê claro (labels, badges)
    400: '#e0899f',  // 🌸 destaque médio (linhas ativas no menu)
    500: '#c4607a',  // 🌸 destaque forte (section-subtitle)
  }
},
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
}
