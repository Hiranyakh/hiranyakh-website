"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

import { missionStory } from "@/data/mission";

import {
  Laptop,
  Heart,
  Sprout,
  Target,
} from "lucide-react";

const icons = [
  Laptop,
  Heart,
  Sprout,
  Target,
];

export default function MissionSection() {
  return (
    <section id="mission" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <SectionTitle
            badge="WHY I CHOSE THIS MISSION"
            title="The Story Behind"
            highlight="Hiranyakh's Wellness"
            description="My journey into Clinical Nutrition didn't begin in a classroom—it began at home."
          />
        </FadeIn>

        <div className="mx-auto mt-20 max-w-5xl space-y-10">

          {missionStory.map((story, index) => {
            const Icon = icons[index];

            return (
              <FadeIn key={story.title} delay={index * 0.15}>

                <GlassCard className="p-8 lg:p-10">

                  <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-blue-50 p-3 text-[#0F4C81]">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#0F4C81]">
                      {story.title}
                    </h3>

                  </div>

                  <p className="mt-6 text-lg leading-9 text-gray-700">
                    {story.content}
                  </p>

                </GlassCard>

              </FadeIn>
            );
          })}

        </div>

      </div>
    </section>
  );
}