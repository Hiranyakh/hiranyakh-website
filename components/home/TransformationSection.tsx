import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const transformations = [
  {
    name: "Weight Loss Transformation",
    beforeWeight: "84.2 kg",
    afterWeight: "66.5 kg",
    result: "Lost 17.7 kg",
    duration: "5 Months",
    testimonial:
      "I never imagined healthy weight loss could be this sustainable. Today I feel lighter, energetic and far more confident.",
    beforeImage: "/images/transformations/before1.jpg",
    afterImage: "/images/transformations/after1.jpg",
  },
  {
    name: "Diabetes Management",
    beforeWeight: "HbA1c 9.1%",
    afterWeight: "HbA1c 6.2%",
    result: "Improved Blood Sugar",
    duration: "4 Months",
    testimonial:
      "My sugar levels are finally under control with practical nutrition and lifestyle changes.",
    beforeImage: "/images/transformations/before2.jpg",
    afterImage: "/images/transformations/after2.jpg",
  },
  {
    name: "PCOS Transformation",
    beforeWeight: "92 kg",
    afterWeight: "73 kg",
    result: "Regular Cycles",
    duration: "8 Months",
    testimonial:
      "I regained my confidence and my health. The programme completely changed my lifestyle.",
    beforeImage: "/images/transformations/before3.jpg",
    afterImage: "/images/transformations/after3.jpg",
  },
];

export default function TransformationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            REAL RESULTS
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Real People.
            <br />
            Real Transformations.
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Every transformation represents a personalised journey built on
            science, consistency and sustainable habits.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {transformations.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="grid grid-cols-2">

                <div className="relative">
                  <Image
                    src={item.beforeImage}
                    alt="Before"
                    width={400}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    BEFORE
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={item.afterImage}
                    alt="After"
                    width={400}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                    AFTER
                  </div>
                </div>

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <div className="mt-6 flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-500">Before</p>
                    <p className="font-bold">{item.beforeWeight}</p>
                  </div>

                  <ArrowRight className="text-sky-600" />

                  <div className="text-right">
                    <p className="text-sm text-slate-500">After</p>
                    <p className="font-bold text-emerald-600">
                      {item.afterWeight}
                    </p>
                  </div>

                </div>

                <div className="mt-6 rounded-2xl bg-emerald-50 p-4">

                  <p className="font-bold text-emerald-700">
                    {item.result}
                  </p>

                  <p className="text-sm text-slate-500">
                    Duration: {item.duration}
                  </p>

                </div>

                <p className="mt-6 italic leading-7 text-slate-600">
                  "{item.testimonial}"
                </p>

                <div className="mt-6 flex text-amber-400">
                  {[1,2,3,4,5].map((i)=>(
                    <Star key={i} fill="currentColor" size={18}/>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}