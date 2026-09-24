"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { MasterclassConfig } from "@/lib/masterclasses";

type Props = { masterclass: MasterclassConfig };

export default function MasterclassForm({ masterclass }: Props) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const form = new FormData(event.currentTarget);
    const payload = {
      full_name: String(form.get("full_name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      masterclass_slug: masterclass.slug,
      masterclass_name: masterclass.name,
      page_url: window.location.href,
      referrer: document.referrer,
      utm_source: new URLSearchParams(window.location.search).get("utm_source"),
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
      utm_content: new URLSearchParams(window.location.search).get("utm_content"),
      utm_term: new URLSearchParams(window.location.search).get("utm_term"),
      fbclid: new URLSearchParams(window.location.search).get("fbclid"),
    };

    try {
      const response = await fetch("/api/masterclass/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Registration failed");
      setSuccess(true);
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", { content_name: masterclass.name });
      }
      const calUrl = result.cal_url || process.env.NEXT_PUBLIC_CAL_MASTERCLASS_URL;
      if (calUrl) {
        const bookingUrl = new URL(calUrl);
        bookingUrl.searchParams.set("name", payload.full_name);
        bookingUrl.searchParams.set("email", payload.email);
        if (result.lead_id) bookingUrl.searchParams.set("user_id", result.lead_id);

        const trackingParams = [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_content",
          "utm_term",
        ] as const;
        for (const key of trackingParams) {
          const value = payload[key];
          if (value) bookingUrl.searchParams.set(key, value);
        }

        window.location.href = bookingUrl.toString();
      } else {
        setMessage("Registration received. Scheduling will be available shortly.");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  if (success && !message) {
    return <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center"><CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" /><h3 className="mt-4 text-2xl font-bold text-[#081F36]">Registration received</h3><p className="mt-2 text-slate-600">Taking you to scheduling...</p></div>;
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div><label htmlFor="full_name" className="mb-1.5 block text-sm font-semibold text-slate-700">Full name</label><input required id="full_name" name="full_name" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#0F4C81]" placeholder="Your full name" /></div>
      <div><label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">Email</label><input required type="email" id="email" name="email" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#0F4C81]" placeholder="you@example.com" /></div>
      <div><label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-700">Mobile Number</label><input required type="tel" id="phone" name="phone" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#0F4C81]" placeholder="+91 98765 43210" /></div>
      <button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F4C81] px-6 py-4 font-bold text-white transition hover:bg-[#0B3A63] disabled:cursor-not-allowed disabled:opacity-70">{loading ? <><Loader2 className="h-5 w-5 animate-spin" /> Processing...</> : <>Reserve My 1-to-1 Session <ArrowRight className="h-5 w-5" /></>}</button>
      {message && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{message}</p>}
      <p className="text-center text-xs leading-5 text-slate-400">By registering, you agree to be contacted regarding this masterclass and related consultation information.</p>
    </form>
  );
}
