type SectionTitleProps = {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
};

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-14 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
        {badge}
      </p>

      <h2 className="mt-4 text-4xl font-extrabold text-gray-900 lg:text-5xl">
        {title}

        {highlight && (
          <span className="text-[#0F4C81]"> {highlight}</span>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}