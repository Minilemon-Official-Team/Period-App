"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

/**
 * Add new cycle or update existing cycle data
 */
export async function addOrUpdateCycleAction(currentState, formData) {
  const supabase = await createClient();
  const errors = {};

  const user = await supabase.auth.getUser();

  if (!user.data.user) {
    errors.auth = "User not authenticated.";
  }
  const userId = user.data.user.id;

  const date = formData.get("date");
  const flow_intensity = formData.get("flow_intensity");
  const mood = formData.get("mood");
  const symptoms = formData.getAll("symptoms");
  const activities = formData.getAll("activities");
  const notes = formData.get("notes");

  try {
    await addOrUpdateCycle(userId, date, flow_intensity, mood, symptoms, activities, notes);
  } catch (error) {
    errors.database = error.message;
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return redirect("/cycles");
}