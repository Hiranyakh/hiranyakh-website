import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

const REGULAR_PRICE = 499;
const LAUNCH_PRICE = 99;
const LAUNCH_LIMIT = 100;

async function getSuccessfulLaunchSales(keyId: string, keySecret: string) {
  const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
  const response = await fetch("https://api.razorpay.com/v1/orders?count=100", {
    headers: { Authorization: `Basic ${auth}` },
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Unable to check launch availability.");
  const data = await response.json();
  const orders = Array.isArray(data.items) ? data.items : [];

  return orders.filter(
    (order: { status?: string; notes?: Record<string, string> }) =>
      order.status === "paid" && order.notes?.product === "gut_health_ebook"
  ).length;
}

export async function POST() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return NextResponse.json({ error: "Razorpay is not configured yet." }, { status: 503 });
  }

  let sold: number;
  try {
    sold = await getSuccessfulLaunchSales(keyId, keySecret);
  } catch {
    return NextResponse.json({ error: "We could not confirm launch availability. Please try again." }, { status: 503 });
  }

  const launchPrice = sold < LAUNCH_LIMIT ? LAUNCH_PRICE : REGULAR_PRICE;
  const receipt = `ebook_${Date.now()}_${crypto.randomBytes(3).toString("hex")}`.slice(0, 40);
  const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

  const response = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: launchPrice * 100,
      currency: "INR",
      receipt,
      notes: {
        product: "gut_health_ebook",
        launch_price: String(launchPrice),
        launch_eligible: String(sold < LAUNCH_LIMIT),
      },
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    return NextResponse.json(
      { error: data?.error?.description ?? "Razorpay order creation failed." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    orderId: data.id,
    amount: data.amount,
    currency: data.currency,
    keyId,
    launchPrice,
    launchRemaining: Math.max(0, LAUNCH_LIMIT - sold),
  });
}
