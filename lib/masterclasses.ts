export type MasterclassConfig = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  description: string;
  audience: string[];
  outcomes: string[];
  disclaimer: string;
};

export const masterclasses: Record<string, MasterclassConfig> = {
  "weight-loss": {
  slug: "weight-loss",
  name: "1-to-1 Weight Management Masterclass",
  shortName: "Weight Management",
  eyebrow: "PERSONALISED WEIGHT MANAGEMENT MASTERCLASS",

  headline:
    "Understand what may be holding your weight-management journey back.",

  subheadline:
    "A focused 1-to-1 nutrition session to understand your eating patterns, lifestyle, goals and the practical factors that may influence your progress.",

  description:
    "Move beyond repeated dieting and one-size-fits-all plans. In this personalised session, we look at your current nutrition and lifestyle patterns and discuss practical, sustainable strategies suited to your individual needs.",

  audience: [
    "People looking for a more structured approach to weight management",
    "People who have tried different diets without finding a sustainable routine",
    "People wanting personalised nutrition and lifestyle guidance",
  ],

  outcomes: [
    "Understand the key nutrition and lifestyle factors relevant to your goals",
    "Identify practical areas that may need attention",
    "Discuss a personalised and sustainable nutrition strategy",
  ],

  disclaimer:
    "This educational masterclass provides personalised nutrition guidance but does not guarantee a specific amount of weight change and does not replace medical diagnosis or treatment.",
},
  "gut-health": {
    slug: "gut-health",
    name: "1-to-1 Gut Health Repair Masterclass",
    shortName: "Gut Health",
    eyebrow: "PERSONALISED NUTRITION MASTERCLASS",
    headline: "Understand your gut health and build a practical nutrition strategy.",
    subheadline: "A 1-to-1 session focused on digestion, food habits, lifestyle and the factors that may influence gut wellbeing.",
    description: "Move beyond random food restrictions and learn how to approach gut health with a structured, personalised framework.",
    audience: ["People dealing with recurring digestive discomfort", "People with irregular eating or lifestyle habits", "People wanting a structured gut-health approach"],
    outcomes: ["Map your current digestive and dietary patterns", "Identify practical nutrition priorities", "Discuss personalised next steps"],
    disclaimer: "This masterclass is educational and does not diagnose digestive disorders or replace medical evaluation or treatment.",
  },
  "ibs": {
    slug: "ibs",
    name: "1-to-1 IBS Nutrition Masterclass",
    shortName: "IBS Nutrition",
    eyebrow: "PERSONALISED NUTRITION MASTERCLASS",
    headline: "Learn how nutrition and lifestyle can be approached more thoughtfully with IBS.",
    subheadline: "A personalised educational session to review eating patterns, symptoms, lifestyle and appropriate nutrition strategies.",
    description: "Understand a structured way to discuss food, routines and symptom patterns without relying on blanket food restrictions.",
    audience: ["People living with IBS", "People wanting to understand food and symptom patterns", "People seeking personalised nutrition guidance"],
    outcomes: ["Review food and symptom patterns", "Identify useful lifestyle considerations", "Discuss an individualised nutrition approach"],
    disclaimer: "IBS requires appropriate medical assessment. This masterclass provides nutrition education and does not constitute diagnosis or medical treatment.",
  },
  "diabetes-management": {
    slug: "diabetes-management",
    name: "1-to-1 Diabetes Management Masterclass",
    shortName: "Diabetes Management",
    eyebrow: "PERSONALISED NUTRITION MASTERCLASS",
    headline: "Build a clearer nutrition strategy for everyday diabetes management.",
    subheadline: "A 1-to-1 educational session covering eating patterns, meal structure, lifestyle and personalised nutrition priorities.",
    description: "Understand practical nutrition principles that can support better day-to-day management alongside your medical care.",
    audience: ["Adults managing diabetes", "People wanting help with meal planning", "People looking to improve nutrition and lifestyle habits"],
    outcomes: ["Review current eating patterns", "Discuss practical meal-structure strategies", "Create a personalised nutrition direction"],
    disclaimer: "Diabetes management should be coordinated with your qualified healthcare team. Do not change prescribed medication based on this masterclass.",
  },
  "liver-health": {
    slug: "liver-health",
    name: "1-to-1 Liver Health Nutrition Masterclass",
    shortName: "Liver Health",
    eyebrow: "PERSONALISED NUTRITION MASTERCLASS",
    headline: "Understand the nutrition and lifestyle factors that matter for liver health.",
    subheadline: "A focused 1-to-1 session to review food habits, lifestyle and practical nutrition priorities.",
    description: "Learn how nutrition can be approached as part of a broader liver-health strategy, alongside appropriate medical care.",
    audience: ["People concerned about liver health", "People looking to improve dietary patterns", "People seeking personalised nutrition guidance"],
    outcomes: ["Review dietary and lifestyle factors", "Identify practical nutrition priorities", "Discuss appropriate next steps"],
    disclaimer: "This masterclass does not diagnose or treat liver disease and should complement, not replace, medical evaluation and treatment.",
  },
  "copd": {
    slug: "copd",
    name: "1-to-1 Nutrition & COPD Masterclass",
    shortName: "Nutrition & COPD",
    eyebrow: "PERSONALISED NUTRITION MASTERCLASS",
    headline: "Explore practical nutrition strategies that can support wellbeing alongside COPD care.",
    subheadline: "A 1-to-1 educational session focused on nutrition, meal patterns, energy needs and lifestyle considerations.",
    description: "Review your current nutrition habits and discuss practical strategies that can fit alongside your prescribed COPD management.",
    audience: ["People living with COPD", "Caregivers supporting nutrition and meal routines", "People wanting personalised nutrition education"],
    outcomes: ["Review current dietary patterns", "Discuss practical nutrition considerations", "Identify questions and next steps for your care team"],
    disclaimer: "COPD requires medical management. This masterclass is educational nutrition guidance and is not a substitute for respiratory or medical care.",
  },
  "overall-wellness": {
    slug: "overall-wellness",
    name: "1-to-1 Overall Wellness Masterclass",
    shortName: "Overall Wellness",
    eyebrow: "PERSONALISED NUTRITION MASTERCLASS",
    headline: "Create a practical nutrition and lifestyle strategy for better everyday wellness.",
    subheadline: "A personalised 1-to-1 session to review food habits, routines, goals and the foundations of sustainable wellbeing.",
    description: "Bring your health and lifestyle priorities into one structured conversation and identify practical next steps.",
    audience: ["People wanting a healthier daily routine", "People seeking personalised nutrition guidance", "People wanting to improve sustainable lifestyle habits"],
    outcomes: ["Review your current lifestyle and food habits", "Prioritise practical changes", "Discuss a sustainable personalised strategy"],
    disclaimer: "This masterclass provides general nutrition and wellness education and does not replace diagnosis or treatment by a qualified healthcare professional.",
  },
};

export function getMasterclass(slug: string) {
  return masterclasses[slug];
}
