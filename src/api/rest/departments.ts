import api from "./api";
import { Department } from "models";

export const fetchDepartments = (): Promise<Department[]> => {
  return api
    .url("departments")
    .get()
    .json(res => {
      return res.map((data: any) => new Department(data));
    });
};
