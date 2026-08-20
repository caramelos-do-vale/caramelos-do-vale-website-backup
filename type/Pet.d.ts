export type PetGender = "MALE" | "FEMALE";

export type PetSize = "SMALL" | "MEDIUM" | "LARGE";

export type PetStatus = "AVAILABLE" | "ADOPTED";

export interface IPetBehaviour {
  id: string;
  name: string;
}

export interface IPetImage {
  id: string;
  url: string;
  position: number;
  isCover: boolean;
}

export interface IPetTutorship {
  id: string;
  whatsappGroupUrl: string;
  otherPet: {
    id: string;
    name: string;
    adoptionName: string;
  } | null;
}

export interface IPet {
  id: string;
  name: string;
  adoptionName: string;
  gender: PetGender;
  size: PetSize;
  status: PetStatus;
  birthDate: string;
  castrated: boolean;
  description: string;
  needsSponsorship: boolean;
  canRetire: boolean;
  createdAt: string;
  behaviours: IPetBehaviour[];
  tutorship: IPetTutorship | null;
  coverImage: IPetImage | null;
  gallery: IPetImage[];
}

export interface PetsMeta {
  page: number;
  limit: number;
  total: number;
}

export interface PetsResponse {
  data: IProduct[];
  meta: ProductsMeta;
}
