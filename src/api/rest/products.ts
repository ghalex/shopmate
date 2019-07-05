import api from "./api";
import { Product } from "models";
import { Filter } from "types";

export const fetchProducts = ({
  departmentId = -1,
  categoryId = -1,
  page = 1,
  limit = 7
}: Filter) => {
  let url = "products";
  if (departmentId > -1) {
    url = `products/inDepartment/${departmentId}`;
  }

  if (categoryId > -1) {
    url = `products/inCategory/${categoryId}`;
  }

  return api
    .url(url)
    .query({ page, limit })
    .get()
    .json(res => {
      return res.rows.map((data: any) => new Product(data));
    });
};
