import StatCard from "@/components/cards/StatCard";

export default function TrustBar() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">

        <StatCard
          number="500+"
          label="Lives Transformed"
        />

        <StatCard
          number="1000+"
          label="Consultations"
        />

        <StatCard
          number="10+"
          label="Years of Experience"
        />

        <StatCard
          number="100%"
          label="Evidence-Based Approach"
        />

      </div>
    </section>
  );
}