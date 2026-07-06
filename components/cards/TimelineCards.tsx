import { ArrowDown } from "lucide-react";

type TimelineCardProps = {
  year?: string;
  title: string;
  description: string;
  last?: boolean;
};

export default function TimelineCard({
  year,
  title,
  description,
  last = false,
}: TimelineCardProps) {
  return (
    <div className="flex flex-col items-center text-center">

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0F4C81] text-xl font-bold text-white shadow-lg">
        {year || "•"}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 max-w-xs text-gray-600">
        {description}
      </p>

      {!last && (
        <ArrowDown
          className="mt-8 text-[#10B981]"
          size={28}
        />
      )}

    </div>
  );
}