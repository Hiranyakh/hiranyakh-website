import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !secret) return NextResponse.json({ error: "Razorpay is not configured yet." }, { status: 503 });

  const body = await request.json();
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: "Incomplete payment response." }, { status: 400 });
  }

  const expected = crypto.createHmac("sha256", secret).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest("hex");
  const received = Buffer.from(String(razorpay_signature));
  const expectedBuffer = Buffer.from(expected);
  const valid = received.length === expectedBuffer.length && crypto.timingSafeEqual(received, expectedBuffer);
  if (!valid) return NextResponse.json({ error: "Payment verification failed." }, { status: 400 });

  const auth = Buffer.from(`${keyId}:${secret}`).toString("base64");
  const headers = { Authorization: `Basic ${auth}` };
  const [orderResponse, paymentResponse] = await Promise.all([
    fetch(`https://api.razorpay.com/v1/orders/${encodeURIComponent(razorpay_order_id)}`, { headers, cache: "no-store" }),
    fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(razorpay_payment_id)}`, { headers, cache: "no-store" }),
  ]);

  if (!orderResponse.ok || !paymentResponse.ok) {
    return NextResponse.json({ error: "Unable to confirm the payment with Razorpay." }, { status: 502 });
  }

  const [order, payment] = await Promise.all([orderResponse.json(), paymentResponse.json()]);
  const validProduct = order.notes?.product === "gut_health_ebook";
  const validAmount = order.amount === 9900 || order.amount === 49900;
  const validCurrency = order.currency === "INR";
  const paid = payment.status === "captured" || payment.status === "authorized";
  const matchingOrder = payment.order_id === razorpay_order_id;

  if (!validProduct || !validAmount || !validCurrency || !paid || !matchingOrder) {
    return NextResponse.json({ error: "Payment could not be confirmed for this eBook order." }, { status: 400 });
  }

  // Final fulfilment/order recording will be connected once the eBook PDF and delivery store are supplied.
  return NextResponse.json({ verified: true, amount: order.amount });
}
