import { CheckCircle2 } from "lucide-react";

interface TrustBadgeProps {
  text: string;
}

export default function TrustBadge({
  text,
}: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        size={20}
        className="text-emerald-500"
      />

      <span className="text-base font-medium text-slate-700">
        {text}
      </span>
    </div>
  );
}