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

  /* -------------------------
      NEW OPTIONAL SECTIONS
  --------------------------*/

  idealFor?: {
    badge: string;
    title: string;
    subtitle: string;
    people: string[];
  };

  infoSection?: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
    }[];
  };

  symptoms?: {
    badge: string;
    title: string;
    subtitle: string;
    items: string[];
  };

  foodGuide?: {
    badge: string;
    title: string;
    subtitle: string;
    eat: string[];
    avoid: string[];
  };

  transformation?: {
    title: string;
    subtitle: string;

    beforeImage: string;
    afterImage: string;

    beforeWeight: string;
    afterWeight: string;

    story: string;

    highlights: string[];
  };
}