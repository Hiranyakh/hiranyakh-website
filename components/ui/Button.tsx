type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-[#0F4C81] text-white hover:bg-[#0B3A63] hover:-translate-y-1 hover:shadow-xl",

    secondary:
      "border-2 border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white hover:-translate-y-1",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}