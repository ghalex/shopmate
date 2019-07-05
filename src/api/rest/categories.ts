import api from "./api";
import { Category } from "models";

export const fetchCategories = (): Promise<Category[]> => {
  return api
    .url("categories")
    .get()
    .json(res => {
      return res.rows.map((data: any) => new Category(data));
    });
};
