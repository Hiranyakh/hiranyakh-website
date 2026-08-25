"use client";

import Image from "next/image";
import Link from "next/link";

type EbookCardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
};

export default function EbookCard({
  title,
  subtitle,
  description,
  image,
  features,
}: EbookCardProps) {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Book */}

      <div className="flex justify-center">

        <Image
          src={image}
          alt={title}
          width={420}
          height={560}
          className="transition duration-500 hover:scale-105"
        />

      </div>

      {/* Content */}

      <div>

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          BESTSELLING HEALTH GUIDE
        </span>

        <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
          {title}
        </h2>

        <p className="mt-4 text-xl text-[#0F4C81]">
          {subtitle}
        </p>

        <p className="mt-8 leading-8 text-gray-600">
          {description}
        </p>

        <div className="mt-8 space-y-3">

          {features.map((feature) => (

            <div
              key={feature}
              className="flex items-center gap-3"
            >

              <span className="text-green-600">✔</span>

              {feature}

            </div>

          ))}

        </div>

        <div className="mt-10 flex gap-4">

          <Link href="/ebook" className="inline-flex items-center justify-center rounded-full bg-[#0F4C81] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0B3A63]">Buy Now — ₹99</Link>

          <a href={"#"} className="inline-flex items-center justify-center rounded-full border-2 border-[#0F4C81] px-6 py-3 font-semibold text-[#0F4C81] transition hover:bg-[#0F4C81] hover:text-white">Read Sample</a>

        </div>

      </div>

    </div>
  );
}