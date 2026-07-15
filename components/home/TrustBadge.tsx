import { CheckCircle2 } from "lucide-react";

type TrustBadgeProps = {
  text: string;
};

export default function TrustBadge({
  text,
}: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2
        className="text-[#10B981]"
        size={20}
      />

      <span className="text-slate-700 font-medium">
        {text}
      </span>

    </div>
  );
}