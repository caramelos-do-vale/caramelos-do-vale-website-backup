import { createClient } from "@/lib/supabase/server";
import { IPet } from "@/type/Pet";
import { IPetImage } from "@/type/PetImage";

export async function getPetsForAdoption(): Promise<IPet[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("pets_info")
    .select("*")
    .eq("adopted", false);

  if (error) {
    throw new Error("Failed to fetch pets");
  }

  return data;
}

export async function getPetsforSponsorship(): Promise<IPet[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("pets_info")
    .select("*")
    .eq("need_sponsorship", true);

  if (error) {
    throw new Error("Failed to fetch pets");
  }

  return data;
}

export async function getPetById(id: number): Promise<IPet> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("pets_info")
    .select("*")
    .eq("pet_id", id)
    .single();
  if (error) {
    throw new Error("Failed to fetch pet");
  }
  return data;
}

export async function getPetImages(petId: number): Promise<IPetImage[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("images_links")
    .select("*")
    .eq("pet_id", petId)
    .order("profile_photo", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch pet");
  }
  return data;
}

export async function getPetsforAdoptionHomepage(): Promise<IPet[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("pets_info")
    .select("*")
    .eq("adopted", false)
    .limit(5);

  if (error) {
    throw new Error("Failed to fetch pets");
  }

  return data;
}

export async function getPetsforSponsorshipHomepage(): Promise<IPet[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("pets_info")
    .select("*")
    .eq("need_sponsorship", true)
    .limit(5);

  if (error) {
    throw new Error("Failed to fetch pets");
  }

  return data;
}
