import api from "./api";
import { Product } from "models";

export interface FetchProductsProps {
  page?: number;
  limit?: number;
}

export const fetchProducts = ({ page = 1, limit = 7 }: FetchProductsProps) => {
  return api
    .url("products")
    .query({ page, limit })
    .get()
    .json(res => {
      return res.rows.map((data: any) => new Product(data));
    });
};
