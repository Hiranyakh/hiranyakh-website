export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="flex min-h-screen flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-blue-900">
          Hiranyakh Chatterjee
        </h1>

        <p className="mt-6 text-2xl text-green-700">
          Transforming Health • Building Wealth • Inspiring Financial Freedom
        </p>

        <p className="mt-8 max-w-2xl text-lg text-gray-700">
          Welcome to my official website. I help people improve their health,
          build additional income, and achieve financial freedom through
          education, mentorship, and proven systems.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800">
            Book a Free Consultation
          </button>

          <button className="rounded-lg border border-blue-700 px-6 py-3 text-blue-700 hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}