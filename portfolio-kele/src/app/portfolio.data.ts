import { ContactItem, Highlight, JourneyItem, LearningItem } from './portfolio.models';

export const portfolioHighlights: Highlight[] = [
  {
    title: 'Atendimento com escuta ativa',
    description:
      'Postura acolhedora, comunicação clara e foco em entender a necessidade real antes de propor qualquer solução.',
  },
  {
    title: 'Prospecção com contexto',
    description:
      'Abordagem comercial orientada por pesquisa, personalização e leitura rápida de prioridade e timing.',
  },
  {
    title: 'Qualificação e handoff',
    description:
      'Organização de pipeline, follow-up e passagem de bastão com contexto para acelerar a próxima etapa do funil.',
  },
];

export const portfolioJourney: JourneyItem[] = [
  {
    title: 'SDR - Assistente Comercial | Coaliza Cobrancas',
    context: 'Mar 2026 - atual | Remoto',
    description:
      'Atuacao focada em prospeccao ativa e qualificacao de leads, com primeiro contato estrategico, identificacao de dores, uso de CRM, follow-ups e encaminhamento de oportunidades qualificadas para vendas.',
    isCurrent: true,
  },
  {
    title: 'SDR / Inside Sales | Villela Brasil Bank',
    context: 'Mar 2025 - Out 2025 | Remoto',
    description:
      'Execucao de cadencias outbound (cold call e cold email), qualificacao por ICP, agendamento para executivos de vendas, gestao de CRM e acompanhamento de KPIs como taxa de resposta e reunioes agendadas.',
  },
  {
    title: 'Atendimento e Vendas | Produtos Bancarios | Bem Aqui - Banco Mercantil',
    context: 'Jun 2021 - Jan 2025 | Caldas Novas - GO',
    description:
      'Responsavel por prospeccao ativa, atendimento consultivo, analise de perfil e propostas personalizadas. Forte atuacao em pos-venda, fidelizacao, suporte administrativo e metas comerciais em produtos bancarios e seguros.',
  },
];

export const portfolioLearning: LearningItem[] = [
  {
    title: 'Atendimento, relacionamento e experiência do cliente',
    provider: 'Espaço para curso ou certificação',
    note: 'Use este bloco para reforçar postura consultiva, empatia e resolução de demandas.',
  },
  {
    title: 'Pré-vendas, outbound e social selling',
    provider: 'Espaço para curso ou certificação',
    note: 'Ideal para mostrar domínio de cadências, personalização e geração de oportunidades.',
  },
  {
    title: 'CRM e gestão de pipeline',
    provider: 'Espaço para curso ou certificação',
    note: 'Inclua ferramentas e metodologias já utilizadas para manter organização e previsibilidade.',
  },
  {
    title: 'Comunicação, negociação e objeções',
    provider: 'Espaço para curso ou certificação',
    note: 'Pode destacar treinamentos em rapport, discovery, condução de conversas e fechamento.',
  },
];

export const portfolioContacts: ContactItem[] = [
  {
    label: 'LinkedIn',
    value: 'br.linkedin.com/in/kele-cecilia',
    href: 'https://www.linkedin.com/in/kele-cecilia/',
  },
  {
    label: 'E-mail',
    value: 'kelececilia@outlook.com',
    href: 'mailto:kelececilia@outlook.com',
  },
  {
    label: 'Whatsapp',
    value: '(64) 99209-4765',
    href: 'https://wa.me/5564992094765',
  },
];
