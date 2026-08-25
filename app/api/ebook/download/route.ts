import { NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const secret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !secret) {
    return NextResponse.json(
      { error: "Razorpay is not configured." },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("order_id");
  const paymentId = searchParams.get("payment_id");
  const signature = searchParams.get("signature");

  if (!orderId || !paymentId || !signature) {
    return NextResponse.json(
      { error: "Invalid download request." },
      { status: 400 }
    );
  }

  // Verify Razorpay signature
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  const validSignature =
    signature.length === expectedSignature.length &&
    crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );

  if (!validSignature) {
    return NextResponse.json(
      { error: "Payment verification failed." },
      { status: 403 }
    );
  }

  // Authenticate with Razorpay
  const auth = Buffer.from(`${keyId}:${secret}`).toString("base64");

  const headers = {
    Authorization: `Basic ${auth}`,
  };

  // Confirm the order and payment directly with Razorpay
  const [orderResponse, paymentResponse] = await Promise.all([
    fetch(
      `https://api.razorpay.com/v1/orders/${encodeURIComponent(orderId)}`,
      {
        headers,
        cache: "no-store",
      }
    ),
    fetch(
      `https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`,
      {
        headers,
        cache: "no-store",
      }
    ),
  ]);

  if (!orderResponse.ok || !paymentResponse.ok) {
    return NextResponse.json(
      { error: "Unable to confirm payment." },
      { status: 502 }
    );
  }

  const [order, payment] = await Promise.all([
    orderResponse.json(),
    paymentResponse.json(),
  ]);

  // Confirm this is our eBook
  if (order.notes?.product !== "gut_health_ebook") {
    return NextResponse.json(
      { error: "Invalid product." },
      { status: 403 }
    );
  }

  // Confirm legitimate price
  if (order.amount !== 9900 && order.amount !== 49900) {
    return NextResponse.json(
      { error: "Invalid order amount." },
      { status: 403 }
    );
  }

  if (order.currency !== "INR") {
    return NextResponse.json(
      { error: "Invalid currency." },
      { status: 403 }
    );
  }

  if (
    payment.status !== "captured" &&
    payment.status !== "authorized"
  ) {
    return NextResponse.json(
      { error: "Payment has not been captured." },
      { status: 403 }
    );
  }

  if (payment.order_id !== orderId) {
    return NextResponse.json(
      { error: "Payment does not match the order." },
      { status: 403 }
    );
  }

  // Read the private PDF
  const filePath = path.join(
    process.cwd(),
    "private",
    "gut-health-ebook.pdf"
  );

  let pdf: Buffer;

  try {
    pdf = await fs.readFile(filePath);
  } catch {
    return NextResponse.json(
      { error: "eBook file is not available." },
      { status: 500 }
    );
  }

  return new NextResponse(new Uint8Array(pdf), {
  status: 200,
  headers: {
    "Content-Type": "application/pdf",
    "Content-Disposition": 'attachment; filename="hiranyakh-gut-health-ebook.pdf"',
    "Content-Length": String(pdf.length),
    "Cache-Control": "private, no-store, max-age=0",
  },
});
}