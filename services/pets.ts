import { api } from "./api";
import { IPet, PetGender, PetSize, PetsResponse, PetStatus } from "@/type/Pet";

export interface ListPetsParams {
  behaviourId?: string[];
  status?: PetStatus[];
  size?: PetSize[];
  gender?: PetGender;
  search?: string;
  sort?: string;
  limit?: number;
  page?: number;
  needsSponsorship?: boolean;
}

export async function getPets(params?: ListPetsParams): Promise<PetsResponse> {
  const searchParams = new URLSearchParams();

  if (params?.behaviourId?.length) {
    searchParams.set("behaviourId", params.behaviourId.join(","));
  }

  if (params?.status?.length) {
    searchParams.set("status", params.status.join(","));
  }

  if (params?.size?.length) {
    searchParams.set("size", params.size.join(","));
  }

  if (params?.gender) {
    searchParams.set("gender", params.gender);
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

  if (params?.needsSponsorship !== undefined) {
    searchParams.set("needsSponsorship", String(params.needsSponsorship));
  }

  const query = searchParams.toString();

  return api<PetsResponse>(`/public/pets${query ? `?${query}` : ""}`);
}

export async function getPetById(id: string): Promise<IPet> {
  return api<IPet>(`/public/pets/${id}`);
}
