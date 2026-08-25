"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ebook } from "@/data/ebook";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export default function EbookPurchase() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [launchPrice, setLaunchPrice] = useState<number | null>(99);
  const [remaining, setRemaining] = useState<number | null>(100);

  async function buyNow() {
    setLoading(true);
    setError("");
    try {
      const script = await loadRazorpay();
      if (!script) throw new Error("Unable to load secure payment checkout.");

      const response = await fetch("/api/ebook/create-order", { method: "POST" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to create payment order.");

      setLaunchPrice(data.launchPrice);
      setRemaining(data.launchRemaining ?? null);
      const Razorpay = window.Razorpay;
      if (!Razorpay) throw new Error("Payment checkout is unavailable.");

	const checkout = new Razorpay({
  key: data.keyId,
  amount: data.amount,
  currency: data.currency,
  name: "Hiranyakh's Wellness",
  description: ebook.title,
  image: "/logos/logo.png",
  order_id: data.orderId,
  prefill: {
    name: "",
    email: "",
    contact: "",
  },
  theme: {
    color: "#0F4C81",
  },

  handler: async (payment: Record<string, string>) => {
    try {
      const verify = await fetch("/api/ebook/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      });

      const result = await verify.json();

      if (!verify.ok) {
        throw new Error(
          result.error || "Payment verification failed."
        );
      }

      const orderId =
        result.orderId || payment.razorpay_order_id;

      const paymentId =
        result.paymentId || payment.razorpay_payment_id;

      const signature =
        result.signature || payment.razorpay_signature;

      if (!orderId || !paymentId || !signature) {
        throw new Error(
          "Payment was verified, but secure download information is missing."
        );
      }

      window.location.href =
        `/ebook/success?order_id=${encodeURIComponent(orderId)}` +
        `&payment_id=${encodeURIComponent(paymentId)}` +
        `&signature=${encodeURIComponent(signature)}`;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Payment verification failed. Please contact us."
      );
    }
  },
});

checkout.open();     

    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#F7FAFC] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-emerald-100/60 blur-2xl" />
              <Image src={ebook.image} alt={ebook.title} width={480} height={640} priority className="relative rounded-2xl shadow-[0_30px_80px_rgba(8,31,54,.18)]" />
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">LAUNCH EDITION</span>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#081F36] sm:text-6xl">{ebook.title}</h1>
            <p className="mt-4 text-xl font-medium text-[#0F4C81]">{ebook.subtitle}</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{ebook.description}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ebook.features.map((feature) => <div key={feature} className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">✓ {feature}</div>)}
            </div>

            <div className="mt-10 rounded-[2rem] border border-amber-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-end gap-3">
                <div><p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">First 100 buyers</p><div className="mt-2 flex items-baseline gap-3"><span className="text-5xl font-extrabold text-[#0F4C81]">₹99</span><span className="text-xl text-slate-400 line-through">₹499</span></div></div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-500">Launch pricing is available while the first 100 successful purchases are completed. The regular price is ₹499 after the launch allocation is exhausted.</p>
              {remaining !== null && remaining > 0 && <p className="mt-3 text-sm font-semibold text-amber-700">{remaining} launch {remaining === 1 ? "spot" : "spots"} remaining.</p>}
              <button onClick={buyNow} disabled={loading} className="mt-6 w-full rounded-full bg-[#0F4C81] px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0B3A63] disabled:cursor-not-allowed disabled:opacity-60">{loading ? "Preparing secure checkout…" : `Buy the eBook — ₹${launchPrice ?? 499}`}</button>
              {error && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
              <p className="mt-4 text-center text-xs text-slate-400">Secure payment powered by Razorpay.</p>
            </div>

            <Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-[#0F4C81] hover:underline">Have a question about the eBook? Contact us →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function loadRazorpay() {
  return new Promise<boolean>((resolve) => {
    if (window.Razorpay) return resolve(true);
    const existing = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(true), { once: true });
      existing.addEventListener("error", () => resolve(false), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}
