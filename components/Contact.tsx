"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:connect@hiranyakhchatterjee.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section className="bg-[#F7FAFC] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            GET IN TOUCH
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#081F36] sm:text-6xl">
            Let&apos;s talk about your
            <span className="block text-[#0F4C81]">health goals.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Have a question about nutrition, our programs, or a consultation?
            Send a message and we&apos;ll get back to you.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white p-3 shadow-sm"><Mail className="text-[#0F4C81]" size={22} /></div>
              <div><p className="font-semibold text-slate-900">Email</p><a className="text-slate-600 hover:text-[#0F4C81]" href="mailto:connect@hiranyakhchatterjee.com">connect@hiranyakhchatterjee.com</a></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white p-3 shadow-sm"><Phone className="text-[#0F4C81]" size={22} /></div>
              <div><p className="font-semibold text-slate-900">Phone</p><a className="text-slate-600 hover:text-[#0F4C81]" href="tel:+919903119806">+91 99031 19806</a></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white p-3 shadow-sm"><MapPin className="text-[#0F4C81]" size={22} /></div>
              <div><p className="font-semibold text-slate-900">Location</p><p className="text-slate-600">Kolkata, India</p></div>
            </div>
          </div>

          <Link href="/book-consultation" className="mt-10 inline-flex rounded-full bg-[#0F4C81] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0B3A63]">
            Book a Consultation — ₹1,000
          </Link>
        </div>

        <div className="rounded-[2rem] bg-white p-7 shadow-[0_25px_80px_rgba(15,76,129,.10)] sm:p-10">
          <h2 className="text-3xl font-bold text-[#081F36]">Send a message</h2>
          <p className="mt-3 text-slate-600">For a personalised consultation, please use the booking link instead.</p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-emerald-50 p-6 text-emerald-800">
              <p className="font-semibold">Your email client should now be open with the enquiry prepared.</p>
              <p className="mt-2 text-sm">If it did not open, please email connect@hiranyakhchatterjee.com directly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-700">Name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#0F4C81]" /></label>
                <label className="text-sm font-semibold text-slate-700">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#0F4C81]" /></label>
              </div>
              <label className="block text-sm font-semibold text-slate-700">Phone<input name="phone" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#0F4C81]" /></label>
              <label className="block text-sm font-semibold text-slate-700">Message<textarea required name="message" rows={6} className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#0F4C81]" /></label>
              <button type="submit" className="w-full rounded-full bg-[#0F4C81] px-7 py-4 font-semibold text-white transition hover:bg-[#0B3A63]">Send Message</button>
              <p className="text-center text-xs text-slate-400">We use your details only to respond to your enquiry.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
