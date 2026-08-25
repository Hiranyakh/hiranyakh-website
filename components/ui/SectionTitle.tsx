type SectionTitleProps = {
  badge?: string;
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
    <div className="mx-auto mb-16 max-w-3xl text-center">

      {badge && (
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold tracking-wide text-[#0F4C81]">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="text-[#0F4C81]">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}

    </div>
  );
}