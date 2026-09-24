"use client";

import { useEffect } from "react";
import { CheckCircle2, CalendarCheck2, Mail, ArrowRight } from "lucide-react";

export default function MasterclassThankYouPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "CompleteRegistration", {
        content_name: "1-to-1 Holistic Nutrition Masterclass",
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F7FAFC] text-[#081F36]">
      <section className="flex min-h-screen items-center justify-center px-5 py-16 sm:px-8">
        <div className="w-full max-w-2xl rounded-[2rem] bg-white p-8 text-center shadow-[0_25px_80px_rgba(15,76,129,.13)] ring-1 ring-slate-100 sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 className="h-9 w-9 text-emerald-600" />
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.18em] text-emerald-700">
            BOOKING CONFIRMED
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Your Masterclass Is Confirmed!
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Your 1-to-1 Holistic Nutrition Masterclass has been successfully scheduled.
            We look forward to speaking with you.
          </p>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <CalendarCheck2 className="h-5 w-5 text-[#0F4C81]" />
              <h2 className="mt-3 font-bold">Save your appointment</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Keep the Cal.com confirmation and calendar event for your session.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <Mail className="h-5 w-5 text-[#0F4C81]" />
              <h2 className="mt-3 font-bold">Check your email</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Your booking confirmation and meeting details will be sent to your email.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-slate-500">
            If you need to reschedule or cancel, use the options in your Cal.com booking confirmation.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F4C81] px-6 py-3.5 font-bold text-white transition hover:bg-[#0B3A63]"
          >
            Return to Hiranyakh&apos;s Wellness
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
