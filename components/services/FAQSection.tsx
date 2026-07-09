"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much weight can I realistically lose?",
    answer:
      "Healthy and sustainable weight loss varies from person to person. The focus is on improving body composition, health markers, and long-term habits rather than chasing rapid results.",
  },
  {
    question: "Will I have to stop eating rice or my favourite foods?",
    answer:
      "No. Your meal plan is designed around your culture, preferences and lifestyle. Sustainable nutrition is about balance, not unnecessary restriction.",
  },
  {
    question: "Will I receive a personalised diet plan?",
    answer:
      "Yes. Every nutrition plan is tailored to your medical history, body composition, blood reports, food preferences and daily routine.",
  },
  {
    question: "Are supplements compulsory?",
    answer:
      "No. Supplements are recommended only when clinically appropriate and based on nutritional needs.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Consultations are available both online and in person, allowing clients from anywhere to receive professional guidance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Answers Before You Begin
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Here are some of the most common questions people ask before starting their transformation journey.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-slate-200 px-6 py-5 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}