import { createDomain } from "effector";
import { Department, CartItem } from "models";
import api from "api";
import { CartAddProps } from "types";

const domain = createDomain("cart");
const storedCartId = localStorage.getItem("shopmate-cart-id") || null;

// effects
const fetchAll = domain.effect<string, CartItem[], any>("fech all").use(cartId => {
  return api.cart.fetchAll({ cartId });
});

const generateId = domain.effect<void, string, any>("generate id").use(_ => {
  return api.cart.generateId();
});

const add = domain.effect<CartAddProps, CartItem, any>("add item to cart").use(props => {
  return api.cart.add(props);
});

// stores
const $id = domain.store<string | null>(storedCartId);
const $all = domain.store<CartItem[]>([]);

// reducers
$id.on(generateId.done, (_, { result: id }) => id);
$all
  .on(fetchAll.done, (state, { result: all }) => all)
  .on(add.done, (state, { result: item }) => {
    const ndx = state.findIndex(i => i.id === item.id);

    if (ndx > -1) {
      const newState = [...state];
      newState[ndx] = item;
      return newState;
    }

    return [...state, item];
  });

// exports
export default {
  $id,
  generateId,
  fetchAll
};
