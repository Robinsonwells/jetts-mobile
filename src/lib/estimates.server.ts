import { supabaseAdmin } from "@/integrations/supabase/client.server";

export async function insertEstimateRequest(input: {
  name: string;
  phone: string;
  message: string;
}) {
  const { error } = await supabaseAdmin.from("estimate_requests").insert(input);
  if (error) {
    console.error("Failed to store estimate request:", error.message);
    throw new Error("Could not save your request. Please call instead.");
  }
  return { ok: true as const };
}
