import { ArrowRight } from "lucide-react";

type JourneyCardProps = {
  year?: string;
  title: string;
  description: string;
};

export default function JourneyCard({
  year,
  title,
  description,
}: JourneyCardProps) {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {year && (
        <span className="text-sm font-semibold uppercase tracking-widest text-[#0F4C81]">
          {year}
        </span>
      )}

      <h3 className="mt-3 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <ArrowRight className="mt-8 text-[#0F4C81]" />
    </div>
  );
}