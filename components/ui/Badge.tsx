type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-[#10B981]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#10B981]">
      {children}
    </span>
  );
}