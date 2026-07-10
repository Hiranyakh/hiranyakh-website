export interface ProgramData {
  badge: string;
  title: string;
  subtitle: string;

  heroImage: string;

  overview: string;

  benefits: string[];

  method: string[];

  stats: {
    value: string;
    label: string;
  }[];

  faq: {
    question: string;
    answer: string;
  }[];

  ctaTitle: string;
  ctaDescription: string;
}