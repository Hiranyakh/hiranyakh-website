type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-full px-6 py-3 font-semibold transition duration-300";

  const styles =
    variant === "primary"
      ? "bg-[#0F4C81] text-white hover:bg-[#10B981]"
      : "border-2 border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white";

  return <button className={`${base} ${styles}`}>{children}</button>;
}