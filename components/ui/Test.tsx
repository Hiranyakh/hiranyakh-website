import clsx from "clsx";

type TextProps = {
  children: React.ReactNode;
  center?: boolean;
};

export default function Text({
  children,
  center = false,
}: TextProps) {
  return (
    <p
      className={clsx(
        "text-lg leading-8 text-slate-600",
        center && "text-center"
      )}
    >
      {children}
    </p>
  );
}