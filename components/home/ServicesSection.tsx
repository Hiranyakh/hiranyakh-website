import {
  Activity,
  HeartPulse,
  Salad,
  Flower2,
  Bone,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Weight Loss & Body Recomposition",
    description:
      "Scientifically designed nutrition programs for sustainable fat loss, improved metabolism and body composition.",
  },
  {
    icon: HeartPulse,
    title: "Diabetes & Lifestyle Disease",
    description:
      "Personalised nutrition plans to improve blood sugar control, HbA1c and long-term metabolic health.",
  },
  {
    icon: Salad,
    title: "Gut Health & Digestive Wellness",
    description:
      "Support for IBS, constipation, acidity, bloating and restoring a healthy gut microbiome.",
  },
  {
    icon: Flower2,
    title: "PCOS & Hormonal Health",
    description:
      "Evidence-based nutrition to improve hormonal balance, insulin resistance and overall wellbeing.",
  },
  {
    icon: Bone,
    title: "Bone & Joint Health",
    description:
      "Nutrition strategies for stronger bones, reduced inflammation and healthy ageing.",
  },
  {
    icon: Users,
    title: "Family & Preventive Nutrition",
    description:
      "Nutrition counselling for children, adults and families to build lifelong healthy habits.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-6xl">
            How I Can Help You
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Personalised clinical nutrition programs designed to improve your
            health through science, sustainable habits and one-to-one guidance.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-[#0F4C81]">

                <service.icon className="h-8 w-8 text-[#0F4C81] group-hover:text-white" />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                {service.description}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-[#0F4C81] transition group-hover:gap-3">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}