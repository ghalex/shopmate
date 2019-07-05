import User from "models/User";

export type Nullable<T> = T | null;

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData extends LoginData {
  retypePassword: string;
}

export interface Filter {
  departmentId: number;
  categoryId: number;
  page?: number;
  limit?: number;
}
