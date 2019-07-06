import api from "./api";
import { Product, Attribute } from "models";
import { Filter } from "types";

export const fetchAll = ({ departmentId = -1, categoryId = -1, page = 1, limit = 7 }: Filter) => {
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

export const fetchAttributes = async ({ productId }: { productId: number }) => {
  return api
    .url(`attributes/inProduct/${productId}`)
    .get()
    .json(res => {
      return res.map((data: any) => new Attribute(data));
    });
};

export const fetch = async ({ id }: { id: number }) => {
  const attributes = await fetchAttributes({ productId: id });
  return api
    .url(`products/${id}/details`)
    .get()
    .json(res => {
      return new Product({ ...res[0], attributes });
    });
};
