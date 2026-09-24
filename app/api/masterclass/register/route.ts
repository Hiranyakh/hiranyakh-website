import { NextResponse } from "next/server";

const required = ["full_name", "email", "phone", "masterclass_slug", "masterclass_name"] as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    for (const field of required) {
      if (!String(body?.[field] || "").trim()) return NextResponse.json({ error: `${field} is required` }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) return NextResponse.json({ error: "Masterclass registration is not configured yet. Add the Supabase environment variables." }, { status: 503 });

    const row = {
      full_name: String(body.full_name).trim(),
      email: String(body.email).trim().toLowerCase(),
      phone: String(body.phone).trim(),
      masterclass_slug: String(body.masterclass_slug).trim(),
      masterclass_name: String(body.masterclass_name).trim(),
      status: "registered",
      page_url: body.page_url ? String(body.page_url) : null,
      referrer: body.referrer ? String(body.referrer) : null,
      utm_source: body.utm_source ? String(body.utm_source) : null,
      utm_medium: body.utm_medium ? String(body.utm_medium) : null,
      utm_campaign: body.utm_campaign ? String(body.utm_campaign) : null,
      utm_content: body.utm_content ? String(body.utm_content) : null,
      utm_term: body.utm_term ? String(body.utm_term) : null,
      fbclid: body.fbclid ? String(body.fbclid) : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/masterclass_leads`, {
      method: "POST",
      headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, "Content-Type": "application/json", Prefer: "return=representation" },
      body: JSON.stringify(row),
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("Supabase registration error:", await response.text());
      return NextResponse.json({ error: "Unable to save your registration. Please try again." }, { status: 502 });
    }
    const created = await response.json();
    const lead = Array.isArray(created) ? created[0] : created;
    return NextResponse.json({
      ok: true,
      lead_id: lead?.id || null,
      cal_url: process.env.NEXT_PUBLIC_CAL_MASTERCLASS_URL || null,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
