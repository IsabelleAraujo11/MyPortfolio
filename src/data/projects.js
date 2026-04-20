
import instagramImg from '../assets/instagram.png';
import stImg from '../assets/st.png';
import cvImg from '../assets/cv.png';
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
    name: 'SmartCV',
    description:
      'Aplicação web para criar currículos profissionais otimizados para ATS (Applicant Tracking Systems). O usuário preenche um formulário por seções e vê uma pré-visualização em tempo real; pode gerar PDF e rodar uma análise de qualidade com pontuação (0 a 100) e sugestões.',
    techs: ['REACT', 'VITE', 'JavaScript', 'CSS',],
    image: cvImg,
    github: 'https://github.com/IsabelleAraujo11/SmartCV',
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
