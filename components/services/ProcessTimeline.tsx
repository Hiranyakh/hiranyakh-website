"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import {
  ClipboardCheck,
  Activity,
  FlaskConical,
  Apple,
  HeartHandshake,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Comprehensive Assessment",
    description:
      "Medical history, lifestyle, eating habits, goals and current health challenges.",
  },
  {
    icon: Activity,
    title: "Body Composition Analysis",
    description:
      "Understand body fat, muscle mass, visceral fat and metabolic health.",
  },
  {
    icon: FlaskConical,
    title: "Blood Report Interpretation",
    description:
      "Identify nutritional deficiencies, metabolic disorders and risk factors.",
  },
  {
    icon: Apple,
    title: "Personalised Nutrition Plan",
    description:
      "A practical meal plan designed around your lifestyle—not a restrictive diet.",
  },
  {
    icon: HeartHandshake,
    title: "Habit & Lifestyle Coaching",
    description:
      "Sleep, stress management, exercise, hydration and sustainable behaviour change.",
  },
  {
    icon: Trophy,
    title: "Long-Term Transformation",
    description:
      "Maintain results with continuous monitoring, education and accountability.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              THE HIRANYAKH METHOD™
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              A Scientific Roadmap to Sustainable Health
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Lasting transformation doesn't happen by chance. It happens through
              a structured, evidence-based process tailored to your individual needs.
            </p>

          </div>
        </FadeIn>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeIn key={step.title} delay={index * 0.1}>
                <div className="relative rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#0F4C81] text-white font-bold">
                    {index + 1}
                  </div>

                  <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>

                </div>
              </FadeIn>
            );
          })}

        </div>

      </Container>
    </section>
  );
}