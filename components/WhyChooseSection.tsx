"use client";

import {
  Brain,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: <Brain size={36} />,
    title: "Evidence-Based Nutrition",
    description:
      "Every recommendation is backed by clinical science and practical experience.",
  },
  {
    icon: <Heart size={36} />,
    title: "Personalised Care",
    description:
      "Every nutrition plan is customised to your lifestyle, medical history and goals.",
  },
  {
    icon: <TrendingUp size={36} />,
    title: "Sustainable Results",
    description:
      "No crash diets. We build healthy habits that last for life.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Continuous Support",
    description:
      "Regular follow-ups, motivation and guidance throughout your transformation.",
  },
  {
    icon: <Target size={36} />,
    title: "Goal-Focused Programs",
    description:
      "Every consultation is designed with measurable milestones and real outcomes.",
  },
  {
    icon: <Sparkles size={36} />,
    title: "Complete Transformation",
    description:
      "Helping you improve health, confidence, mindset and long-term wellbeing.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-slate-50 py-24" id="why">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <SectionTitle
            badge="WHY CHOOSE HIRANYAKH"
            title="More Than"
            highlight="A Diet Plan."
            description="My approach combines clinical nutrition, personalized guidance, sustainable habits, and continuous support to help you achieve lasting results."
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}