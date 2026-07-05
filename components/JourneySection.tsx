"use client";

import { HeartPulse, BriefcaseBusiness, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import JourneyCard from "@/components/JourneyCard";

export default function JourneySection() {
  return (
    <section className="bg-white py-24" id="journey">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="mb-16 text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              CHOOSE YOUR JOURNEY
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-gray-900 lg:text-5xl">
              One Vision.
              <span className="text-[#0F4C81]"> Three Powerful Paths.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Whether your goal is better health, financial growth, or personal
              transformation, choose the journey that best fits your aspirations.
            </p>

          </div>

        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">

          <FadeIn delay={0.1}>

            <JourneyCard
              icon={<HeartPulse size={40} />}
              title="Health & Nutrition"
              description="Evidence-based nutrition plans designed to help you live a healthier life."
              items={[
                "Weight Loss",
                "Diabetes Management",
                "Gut Health",
                "Lifestyle Diseases",
              ]}
              buttonText="Explore Health"
            />

          </FadeIn>

          <FadeIn delay={0.2}>

            <JourneyCard
              icon={<BriefcaseBusiness size={40} />}
              title="Business & Leadership"
              description="Build leadership skills and create sustainable financial growth."
              items={[
                "Business Mentorship",
                "Leadership",
                "Financial Growth",
                "Passive Income",
              ]}
              buttonText="Explore Business"
            />

          </FadeIn>

          <FadeIn delay={0.3}>

            <JourneyCard
              icon={<Sparkles size={40} />}
              title="Growth & Transformation"
              description="Transform your mindset, lifestyle, and personal development."
              items={[
                "Lifestyle Coaching",
                "Mindset",
                "Public Speaking",
                "Personal Growth",
              ]}
              buttonText="Start Your Journey"
            />

          </FadeIn>

        </div>

      </div>
    </section>
  );
}