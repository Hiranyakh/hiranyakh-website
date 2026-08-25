"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const timeline = [
  {
    year: "Before 2012",
    title: "Engineering Career",
    description:
      "I began my professional journey as an Electronics & Telecommunication Engineer, developing analytical thinking and a problem-solving mindset.",
  },
  {
    year: "2012",
    title: "A Life-Changing Moment",
    description:
      "The birth of my son changed my perspective on health, family, and purpose.",
  },
  {
    year: "2014",
    title: "Searching for Answers",
    description:
      "As we looked for ways to support our son's well-being, we explored many approaches. Discovering evidence-based nutrition became a turning point for our family.",
  },
  {
    year: "2015 onwards",
    title: "A New Calling",
    description:
      "Inspired by our experience, I began studying Clinical Nutrition and earned professional qualifications to help others through science-based nutrition.",
  },
  {
    year: "Today",
    title: "Serving Families",
    description:
      "Today, I help individuals and families achieve sustainable health through personalised nutrition, education, and lifestyle transformation.",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              MY JOURNEY
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
              Milestones That
              <span className="text-[#0F4C81]"> Shaped My Mission</span>
            </h2>

          </div>
        </FadeIn>

        <div className="mx-auto mt-20 max-w-4xl">

          {timeline.map((item, index) => (

            <FadeIn key={item.year} delay={index * 0.1}>

              <div className="relative flex gap-8 pb-16">

                <div className="flex flex-col items-center">

                  <div className="h-5 w-5 rounded-full bg-[#10B981]" />

                  {index !== timeline.length - 1 && (
                    <div className="mt-2 h-full w-[2px] bg-blue-200" />
                  )}

                </div>

                <div>

                  <span className="font-bold text-[#10B981]">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-[#0F4C81]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </Container>
    </section>
  );
}