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
    title: 'Customer Success: Como Conquistar e Manter Clientes',
    provider: 'Sebrae',
    note: 'Certificacao voltada para estrategias de fidelizacao, relacionamento e retencao de clientes ao longo da jornada.',
    issuedAt: 'Mai 2026',
    expiresAt: 'Mai 2036',
    credentialUrl:
      'https://www.linkedin.com/in/kele-cecilia/overlay/Certifications/2050186004/treasury/?profileId=ACoAACRDnGoB2f4y5KJRxtzuCfKheERUS0UwphM&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BcT2Q4LVgS5akG1UdwjNOjg%3D%3D',
  },
  {
    title: 'Customer Success',
    provider: 'Sebrae',
    note: 'Formacao com foco em experiencia do cliente, acompanhamento de resultados e consolidacao de relacionamento de longo prazo.',
    issuedAt: 'Mai 2026',
    expiresAt: 'Mai 2036',
    credentialUrl:
      'https://www.linkedin.com/in/kele-cecilia/overlay/Certifications/2047740690/treasury/?profileId=ACoAACRDnGoB2f4y5KJRxtzuCfKheERUS0UwphM',
  },
  {
    title: 'CRM e gestao de pipeline',
    provider: 'Capacitacao complementar',
    note: 'Inclua ferramentas e metodologias já utilizadas para manter organização e previsibilidade.',
  },
  {
    title: 'Comunicacao, negociacao e objecoes',
    provider: 'Capacitacao complementar',
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
