interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}