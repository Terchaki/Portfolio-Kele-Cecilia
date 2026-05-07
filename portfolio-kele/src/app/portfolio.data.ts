import { ContactItem, Highlight, JourneyItem, LearningItem } from './portfolio.models';

export const portfolioHighlights: Highlight[] = [
  {
    title: 'Prospecção com contexto',
    description:
      'Abordagem comercial orientada por pesquisa, personalização e identificação clara de dores do cliente.'
  },
  {
    title: 'Rotina comercial estruturada',
    description:
      'Organização de cadências, follow-ups e CRM para manter previsibilidade no topo do funil.'
  },
  {
    title: 'Handoff qualificado',
    description:
      'Conexão entre marketing, pré-vendas e vendas para entregar oportunidades mais maduras ao closer.'
  }
];

export const portfolioJourney: JourneyItem[] = [
  {
    title: 'Perfil profissional',
    context: 'SDR / BDR',
    description:
      'Atuação voltada para geração de demanda, qualificação de leads e construção de relacionamento desde o primeiro contato.'
  },
  {
    title: 'Experiências em destaque',
    context: 'Empresas, segmentos e ciclos de venda',
    description:
      'Seção pronta para inserir histórico profissional real, com foco em ICP, canais de prospecção e principais entregas.'
  },
  {
    title: 'Objetivo de carreira',
    context: 'Crescimento comercial',
    description:
      'Posicionamento orientado a performance, relacionamento e aprendizado contínuo dentro da jornada comercial.'
  }
];

export const portfolioLearning: LearningItem[] = [
  {
    title: 'Pré-vendas e qualificação',
    provider: 'Espaço para curso ou certificação',
    note: 'Adicione aqui instituição, carga horária e ano.'
  },
  {
    title: 'Outbound e social selling',
    provider: 'Espaço para curso ou certificação',
    note: 'Ideal para mostrar domínio de cadências e abordagem consultiva.'
  },
  {
    title: 'CRM e gestão de pipeline',
    provider: 'Espaço para curso ou certificação',
    note: 'Inclua ferramentas e metodologias já utilizadas.'
  },
  {
    title: 'Comunicação e negociação',
    provider: 'Espaço para curso ou certificação',
    note: 'Pode destacar treinamentos em rapport, objeções e discovery.'
  }
];

export const portfolioContacts: ContactItem[] = [
  {
    label: 'LinkedIn',
    value: 'br.linkedin.com/in/kele-cecilia',
    href: 'https://br.linkedin.com/in/kele-cecilia?trk=public_post_feed-actor-name'
  },
  {
    label: 'E-mail',
    value: 'adicione-o-email-profissional',
    href: 'mailto:adicione-o-email-profissional'
  },
  {
    label: 'Contato direto',
    value: 'adicione-whatsapp-ou-telefone',
    href: '#contato'
  }
];
