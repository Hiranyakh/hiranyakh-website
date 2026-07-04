type StatCardProps = {
  number: string;
  label: string;
};

export default function StatCard({
  number,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-4xl font-extrabold text-[#0F4C81]">
        {number}
      </h3>

      <p className="mt-3 text-gray-600">
        {label}
      </p>
    </div>
  );
}