interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="rounded-full bg-[#10B981]/10 px-4 py-2 text-sm font-semibold text-[#10B981]">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}