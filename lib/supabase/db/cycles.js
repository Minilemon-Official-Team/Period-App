import { createClient } from "../server";
import { predictNextPeriod } from "@/lib/predictions";

export async function getCycles(userId) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("cycles").select("*").eq("user_id", userId).order("date", { ascending: true });

  if (error) throw error;

  return data;
}

export async function getCyclesByDate(userId, date) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cycles")
    .select("*")
    .eq("user_id", userId)
    .eq("date", date)
    .single();

  if (error) throw error;

  return data;
}

export async function getCyclesLast6Month(userId, date = new Date()) {
  const supabase = await createClient();
  const sixMonthsAgo = new Date(date).setMonth(date.getMonth() - 6);

  const { data, error } = await supabase
    .from("cycles")
    .select("*")
    .eq("user_id", userId)
    .gte("date", sixMonthsAgo.toISOString().split("T")[0])
    .lte("date", date.toISOString().split("T")[0])
    .order("date", { ascending: true });

  if (error) throw error;

  return data;
}

export async function addOrUpdateCycle(userId, date, flow_intensity, mood, symptoms, activities, notes) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cycles")
    .upsert([{ user_id: userId, date, flow_intensity, mood, symptoms, activities, notes }], { onConflict: "user_id,date" })
    .select();

  if (error) throw error;

  return data[0];
}

export async function deleteCycle(userId, id) {
  const supabase = await createClient();

  const { error } = await supabase.from("cycles").delete().eq("id", id).eq("user_id", userId);

  if (error) throw error;

  return true;
}

export async function predictUserCycle(userId) {
  const cycles = await getCyclesLast6Month(userId);

  if (cycles.length === 0) return null;

  return await predictNextPeriod(cycles);
}
