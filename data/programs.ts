export interface Program {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export const programs: Program[] = [
  {
    id: 1,
    title: "Weight Loss Transformation",
    slug: "/services/weight-loss",
    description:
      "Lose weight sustainably through evidence-based nutrition, habit coaching and personalised meal planning.",
    icon: "⚖️",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: 2,
    title: "Diabetes Management",
    slug: "/services/diabetes",
    description:
      "Manage blood sugar naturally with personalised nutrition, lifestyle modification and ongoing guidance.",
    icon: "🩺",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Gut Health",
    slug: "/services/gut-health",
    description:
      "Restore digestive health, improve immunity and optimise your microbiome through clinical nutrition.",
    icon: "🥗",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: 4,
    title: "PCOS & Women's Health",
    slug: "/services/pcos",
    description:
      "Evidence-based nutritional support for hormonal balance, weight management and reproductive health.",
    icon: "🌸",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 5,
    title: "Fatty Liver Recovery",
    slug: "/services/fatty-liver",
    description:
      "Reverse fatty liver with science-backed nutrition, weight management and sustainable lifestyle changes.",
    icon: "💚",
    color: "from-lime-500 to-green-700",
  },
  {
    id: 6,
    title: "Child Nutrition",
    slug: "/services/child-nutrition",
    description:
      "Support healthy growth, immunity and lifelong eating habits through personalised child nutrition.",
    icon: "🧒",
    color: "from-violet-500 to-purple-600",
  },
];