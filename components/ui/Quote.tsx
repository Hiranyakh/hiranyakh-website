type QuoteProps = {
  children: React.ReactNode;
};

export default function Quote({
  children,
}: QuoteProps) {
  return (
    <div className="relative my-12 rounded-3xl bg-gradient-to-r from-[#0F4C81] to-[#10B981] p-10 text-white shadow-2xl">

      <div className="absolute left-6 top-3 text-7xl opacity-20">
        "
      </div>

      <p className="relative text-xl leading-9 font-medium lg:text-2xl">
        {children}
      </p>

    </div>
  );
}