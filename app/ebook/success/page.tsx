"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

export default function EbookSuccessPage() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const orderId = params.get("order_id");
    const paymentId = params.get("payment_id");
    const signature = params.get("signature");

    if (!orderId || !paymentId || !signature) {
      setError(
        "Your payment was received, but the secure download information is missing."
      );
      return;
    }

    const url =
      `/api/ebook/download?order_id=${encodeURIComponent(orderId)}` +
      `&payment_id=${encodeURIComponent(paymentId)}` +
      `&signature=${encodeURIComponent(signature)}`;

    setDownloadUrl(url);
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex min-h-[65vh] items-center justify-center bg-[#F7FAFC] px-6 py-20">
        <div className="max-w-2xl rounded-[2rem] bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,76,129,.10)] sm:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
            ✓
          </div>

          <h1 className="mt-7 text-4xl font-extrabold text-[#081F36]">
            Payment Successful
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Thank you for purchasing the eBook. Your payment has been
            successfully verified.
          </p>

          {downloadUrl && (
            <a
              href={downloadUrl}
              className="mt-8 inline-flex rounded-full bg-[#0F4C81] px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Download Your eBook
            </a>
          )}

          {error && (
            <div className="mt-8 rounded-2xl bg-red-50 p-4 text-sm leading-6 text-red-700">
              {error}
            </div>
          )}

          <p className="mt-5 text-sm text-slate-500">
            Your download is securely linked to your verified payment.
          </p>

          <a
            href="/"
            className="mt-6 inline-flex text-sm font-semibold text-[#0F4C81]"
          >
            Back to website
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}