type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/30
        bg-white/70
        backdrop-blur-xl
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}