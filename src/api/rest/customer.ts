import api from "./api";
import { User } from "models";
import { SignupData, LoginData } from "types";

export const login = async (data: LoginData) => {
  return api
    .url(`customers/login`)
    .post(data)
    .json(res => {
      localStorage.setItem("shopmate-token", res.accessToken);
      return new User(res.customer);
    });
};

export const signup = async (data: SignupData) => {
  return api
    .url(`customers`)
    .post(data)
    .json(res => {
      localStorage.setItem("shopmate-token", res.accessToken);
      return new User(res.customer);
    });
};

export const logout = () => {
  localStorage.removeItem("shopmate-token");
  return null;
};

export const fetch = (): Promise<User | null> => {
  const token = localStorage.getItem("shopmate-token");
  if (!token) {
    return Promise.resolve(null);
  }

  return api
    .url("customer")
    .get()
    .json(res => {
      const user = new User(res);
      return user;
    });
};
