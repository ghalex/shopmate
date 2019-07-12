import api from "./api";
import { Product, Attribute } from "models";
import { Filter } from "types";

export const fetchAll = ({
  departmentId = -1,
  categoryId = -1,
  page = 1,
  search = "",
  limit = 7
}: Filter) => {
  let url = "products";
  const query: any = { page, limit };

  if (departmentId > -1) {
    url = `products/inDepartment/${departmentId}`;
  }

  if (categoryId > -1) {
    url = `products/inCategory/${categoryId}`;
  }

  if (search && search.length > 1) {
    url = `products/search`;
    query.query_string = search;
  }

  return api
    .url(url)
    .query(query)
    .get()
    .json(res => {
      return {
        count: res.count,
        rows: res.rows.map((data: any) => new Product(data))
      };
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
