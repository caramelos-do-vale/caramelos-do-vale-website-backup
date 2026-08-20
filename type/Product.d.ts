export interface IProduct {
  id: string;
  typeId: string;
  name: string;
  description: string;
  price: number;
  imgLink: string;
  material: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface IProductType {
  id: string;
  name: string;
}

export interface ProductsMeta {
  page: number;
  limit: number;
  total: number;
  activeProductsCount: number;
  inactiveProductsCount: number;
}

export interface ProductsResponse {
  data: IProduct[];
  meta: ProductsMeta;
}

export interface ListProductsParams {
  active?: boolean;
  typeId?: string[];
  search?: string;
  sort?: string;
  limit?: number;
  page?: number;
}
