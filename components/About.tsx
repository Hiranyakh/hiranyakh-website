import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="text-green-600 font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Helping People Build
            <span className="text-blue-700"> Better Health </span>
            &
            <span className="text-green-600"> Financial Freedom</span>
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">

            <Image
              src="/images/hiranyakh.png"
              alt="Hiranyakh"
              width={420}
              height={520}
              className="rounded-3xl shadow-xl"
            />

          </div>

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Hi, I'm Hiranyakh Chatterjee
            </h3>

            <p className="text-lg leading-8 text-gray-600 mb-6">
              I help individuals transform their health through
              evidence-based nutrition while also mentoring people to build
              sustainable wealth and long-term financial freedom.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="rounded-xl bg-blue-50 p-6">
                <h4 className="font-bold text-blue-700">
                  Clinical Nutrition
                </h4>
              </div>

              <div className="rounded-xl bg-green-50 p-6">
                <h4 className="font-bold text-green-700">
                  Wellness Coaching
                </h4>
              </div>

              <div className="rounded-xl bg-yellow-50 p-6">
                <h4 className="font-bold text-yellow-700">
                  Business Mentoring
                </h4>
              </div>

              <div className="rounded-xl bg-purple-50 p-6">
                <h4 className="font-bold text-purple-700">
                  Public Speaking
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}