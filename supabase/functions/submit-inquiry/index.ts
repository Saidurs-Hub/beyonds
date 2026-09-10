import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/airtable";
const AIRTABLE_BASE_ID = "appjjKitLzE9FeO3b";
const AIRTABLE_TABLE = "Inquiries";

const INQUIRY_TYPES = [
  "Investment",
  "Partnership",
  "Accelerator Support",
  "General Get in Touch",
  "General Inquiry",
  "Quote Request",
  "Technical Support",
  "Demo Request",
  "Partnership Inquiry",
  "Feedback",
];

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const organization = String(body?.organization ?? "").trim();
    const inquiryType = String(body?.inquiryType ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (
      !name || name.length > 100 ||
      !email || email.length > 255 || !isEmail(email) ||
      organization.length > 150 ||
      !INQUIRY_TYPES.includes(inquiryType) ||
      !message || message.length > 4000
    ) {
      return new Response(JSON.stringify({ error: "Invalid submission" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Always persist a copy in the backend so nothing is lost.
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { error: dbError } = await supabase.from("contact_inquiries").insert({
      name,
      email,
      organization: organization || null,
      inquiry_type: inquiryType,
      message,
    });
    if (dbError) {
      console.error("DB insert failed:", dbError.message);
    }

    const lovableKey = Deno.env.get("LOVABLE_API_KEY");
    const airtableKey = Deno.env.get("AIRTABLE_API_KEY");

    if (!lovableKey || !airtableKey) {
      console.warn("Airtable connector not configured; stored locally only.");
      return new Response(JSON.stringify({ ok: true, airtable: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch(
      `${GATEWAY_URL}/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": airtableKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email,
                Organization: organization || undefined,
                "Inquiry Type": inquiryType,
                Message: message,
              },
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Airtable request failed [${response.status}]: ${errorBody}`);
      return new Response(
        JSON.stringify({ error: "Airtable request failed", status: response.status, details: errorBody }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ ok: true, airtable: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("submit-inquiry error:", e instanceof Error ? e.message : String(e));
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
