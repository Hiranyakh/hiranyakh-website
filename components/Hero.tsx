import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col-reverse lg:flex-row items-center">

        <div className="lg:w-1/2">

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Helping People
            <span className="text-blue-700"> Transform Their Health</span>,
            <span className="text-green-600"> Build Wealth</span> &
            <span className="text-blue-700"> Achieve Financial Freedom</span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9">
            Clinical Nutritionist • Wellness Coach • Business Mentor • Speaker
          </p>

          <p className="mt-6 text-lg text-gray-500">
            Empowering individuals through evidence-based nutrition,
            lifestyle transformation, and proven business systems that
            create lasting health and financial independence.
          </p>

          <div className="mt-10 flex gap-5 flex-wrap">

            <button className="bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition">
              Book Consultation
            </button>

            <button className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl hover:bg-blue-700 hover:text-white transition">
              Explore Opportunities
            </button>

          </div>

        </div>

        <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">

          <Image
  src="/images/hiranyakh-v2.png"
  alt="Hiranyakh Chatterjee"
  width={700}
  height={840}
  priority
  className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
/>

        </div>

      </div>
    </section>
  );
}