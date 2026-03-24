
import instagramImg from '../assets/instagram.png';
import stImg from '../assets/st.png';
import techImg from '../assets/tech.png';
import walletImg from '../assets/wallet.png';

export const projects = [
  {
    id: 1,
    name: 'My Wallet App',
    description:
      'Desenvolvi o My Wallet, um aplicativo de controle financeiro pessoal com foco em organização de gastos e acompanhamento mensal das despesas. O projeto foi criado para resolver um problema real do dia a dia, proporcionando uma experiência simples, intuitiva e eficiente para gerenciar finanças.',
    techs: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'API REST', 'JavaScript'],
    image: walletImg,
    github: 'https://github.com/IsabelleAraujo11/MyWalletApp',
    demo: null,
  },
  {
    id: 2,
    name: 'Stranger Things',
    description:
      'Desenvolvi uma landing page temática inspirada no universo de Stranger Things, com foco em animações interativas, design responsivo e uma experiência imersiva para o usuário. O projeto explora efeitos visuais modernos e boas práticas de desenvolvimento front-end.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    image: stImg,
    github: 'https://github.com/IsabelleAraujo11/StrangerThingsPage',
    demo: null,
  },
  {
    id: 3,
    name: 'Tech Solutions',
    description:
      'Este projeto é um site institucional da TechSolutions, que apresenta os serviços da empresa, planos de preços, busca de domínio e um formulário de contato. Possui um design moderno, organizado e responsivo, com o objetivo de divulgar a empresa e atrair clientes.',
    techs: ['HTML', 'CSS'],
    image: techImg,
    github: 'https://github.com/IsabelleAraujo11/TechSolutions',
    demo: null,
  },
  {
    id: 4,
    name: 'Instagram Login',
    description:
      'Este projeto é uma simulação da interface de autenticação do Instagram, desenvolvida para praticar fidelidade visual (UI) e responsividade. O foco foi recriar o layout minimalista da plataforma, garantindo que a página se adapte perfeitamente a dispositivos móveis e desktops, utilizando padrões modernos de estilização e atenção aos detalhes de design.',
    techs: ['HTML', 'CSS'],
    image: instagramImg,
    github: 'https://github.com/IsabelleAraujo11/InstagramLogin',
    demo: null,
  },
]
