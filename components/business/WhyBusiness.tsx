import {
  TrendingUp,
  Users,
  Clock3,
  Brain,
  HeartHandshake,
  Landmark,
} from "lucide-react";

import Container from "@/components/ui/Container";

const benefits = [
  {
    icon: TrendingUp,
    title: "Financial Growth",
    description:
      "Build an additional income stream through a structured and sustainable business model.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Develop communication, leadership and people management skills that benefit every area of life.",
  },
  {
    icon: Clock3,
    title: "Flexibility",
    description:
      "Grow your business alongside your career at a pace that suits your lifestyle.",
  },
  {
    icon: Brain,
    title: "Personal Growth",
    description:
      "Improve confidence, discipline, resilience and the mindset required for long-term success.",
  },
  {
    icon: HeartHandshake,
    title: "Community",
    description:
      "Become part of a positive, supportive network of entrepreneurs who grow together.",
  },
  {
    icon: Landmark,
    title: "Legacy",
    description:
      "Create something meaningful that positively impacts your family and future generations.",
  },
];

export default function WhyBusiness() {
  return (
    <section
      id="why-business"
      className="bg-white py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F4C81]">
            WHY BUSINESS
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Why Build a Business Alongside Your Career?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Building a business isn't only about creating another source of
            income. It's about developing leadership, expanding your network,
            creating meaningful impact and building long-term freedom while
            continuing your personal and professional growth.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81]/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#0F4C81] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}