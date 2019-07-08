import api from "./api";
import { CartItem } from "models";
import { CartAddProps } from "types";

export const generateId = (): Promise<string> => {
  return api
    .url("shoppingcart/generateUniqueId")
    .get()
    .json(res => {
      return res.cart_id;
    });
};

export const add = ({ cartId, productId, attributes }: CartAddProps): Promise<CartItem[]> => {
  return api
    .url("shoppingcart/add")
    .post({ cart_id: cartId, product_id: productId, attributes })
    .json(res => {
      return res.map((i: any) => new CartItem(i));
    });
};

export const update = ({ itemId, quantity }: any): Promise<CartItem[]> => {
  return api
    .url("shoppingcart/update/" + itemId)
    .put({ quantity })
    .json(res => {
      return res.map((i: any) => new CartItem(i));
    });
};

export const remove = ({ itemId }: { itemId: number }): Promise<number> => {
  return api
    .url("shoppingcart/removeProduct/" + itemId)
    .delete()
    .res(_ => itemId);
};

export const fetchAll = ({ cartId }: { cartId: string }): Promise<CartItem[]> => {
  return api
    .url("shoppingcart/" + cartId)
    .get()
    .json(res => {
      return res.map((i: any) => new CartItem(i));
    });
};
