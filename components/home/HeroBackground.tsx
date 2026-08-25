export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-sky-50 to-emerald-50" />

      <div className="absolute left-0 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 -z-10 h-[360px] w-[360px] rounded-full bg-emerald-300/20 blur-[120px]" />
    </>
  );
}