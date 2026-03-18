import presentListImg from '../assets/present.png';
import instagramImg from '../assets/instagram.png';
import newImg from '../assets/new.png';
import techImg from '../assets/tech.png';

export const projects = [
  {
    id: 1,
    name: 'Present List',
    description:
      'Este projeto é uma plataforma digital de lista de presentes personalizada para um casal, o objetivo é centralizar os desejos do casal em um ambiente elegante, onde os convidados podem escolher presentes de forma simples. O grande diferencial é a integração com o pix permitindo que os convidados colem a chave pix, garantindo praticidade para quem presenteia e liberdade para o casal utilizar o valor como preferir',
    techs: ['REACT', 'CSS', 'JAVASCRIPT'],
    image: presentListImg,
    github: 'https://github.com/IsabelleAraujo11/PresentList',
    demo: null,
  },
  {
    id: 2,
    name: 'NewLeaster',
    description:
      'Trata-se de uma página de newsletter funcional que permite ao usuário alternar a interface entre os modos claro e escuro. O sistema foca na interatividade, oferecendo um formulário de inscrição centralizado e um rodapé que atualiza o ano automaticamente, garantindo uma experiência de uso moderna e sempre atual.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    image: newImg,
    github: 'https://github.com/IsabelleAraujo11/NewLeaster',
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
