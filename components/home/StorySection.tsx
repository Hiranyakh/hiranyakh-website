import Image from "next/image";
import { Award, HeartHandshake, Stethoscope, Target } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "17 kg",
    subtitle: "Personal Transformation",
  },
  {
    icon: Stethoscope,
    title: "Clinical",
    subtitle: "Evidence-Based Nutrition",
  },
  {
    icon: HeartHandshake,
    title: "1:1",
    subtitle: "Personalised Coaching",
  },
  {
    icon: Target,
    title: "Mission",
    subtitle: "Transform Lives",
  },
];

export default function StorySection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            MY STORY
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-6xl">
            More Than A Nutritionist.
          </h2>

          <p className="mt-4 text-xl text-slate-600">
            A Journey Built on Purpose.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="flex justify-center">

            <div className="relative overflow-hidden rounded-[40px]">

              <Image
                src="/images/story/hiranyakh-story.jpg"
                alt="Hiranyakh"
                width={650}
                height={800}
                className="rounded-[40px]"
              />

            </div>

          </div>

          {/* Content */}

          <div>

            <h3 className="text-3xl font-bold text-slate-900">
              I wasn't always a Clinical Nutritionist.
            </h3>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

              <p>
                I began my career as an Electronics & Telecommunication Engineer.
                Like many professionals, I followed a conventional path while
                searching for work that truly created an impact.
              </p>

              <p>
                Life presented challenges that changed my perspective and led me
                to discover the transformative power of nutrition. What started
                as a personal journey became a lifelong mission to understand the
                science of health and help others experience meaningful change.
              </p>

              <p>
                Today, I combine evidence-based nutrition with personalised
                coaching to help people lose weight, reverse lifestyle disorders,
                improve gut health, and build sustainable habits—not through
                shortcuts, but through science and consistency.
              </p>

            </div>

          </div>

        </div>

        {/* Achievement Cards */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2"
            >
              <item.icon className="mx-auto h-10 w-10 text-sky-600" />

              <h4 className="mt-5 text-2xl font-bold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-2 text-slate-600">
                {item.subtitle}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}