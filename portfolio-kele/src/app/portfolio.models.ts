export type Theme = 'light' | 'spotlight';

export type Highlight = {
  title: string;
  description: string;
};

export type JourneyItem = {
  title: string;
  context: string;
  description: string;
};

export type LearningItem = {
  title: string;
  provider: string;
  note: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};
