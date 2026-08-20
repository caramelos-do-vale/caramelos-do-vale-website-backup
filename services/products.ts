import { ListProductsParams, ProductsResponse } from "@/type/Product";
import { api } from "./api";

export async function getProducts(
  params?: ListProductsParams,
): Promise<ProductsResponse> {
  const searchParams = new URLSearchParams();

  if (params?.active !== undefined) {
    searchParams.set("active", String(params.active));
  }

  if (params?.typeId?.length) {
    searchParams.set("typeId", params.typeId.join(","));
  }

  if (params?.search) {
    searchParams.set("search", params.search);
  }

  if (params?.sort) {
    searchParams.set("sort", params.sort);
  }

  if (params?.limit !== undefined) {
    searchParams.set("limit", String(params.limit));
  }

  if (params?.page !== undefined) {
    searchParams.set("page", String(params.page));
  }

  const query = searchParams.toString();

  return api<ProductsResponse>(`/products${query ? `?${query}` : ""}`);
}
