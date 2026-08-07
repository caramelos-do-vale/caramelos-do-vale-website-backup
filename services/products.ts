import { createClient } from "@/lib/supabase/server";
import { IProduct } from "@/type/Product";

export async function getProducts(): Promise<IProduct[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error("Failed to fetch products");
  }

  return data;
}

export async function getProductsForHomepage(): Promise<IProduct[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("available", true)
    .limit(3);

  if (error) {
    throw new Error("Failed to fetch products");
  }

  return data;
}
