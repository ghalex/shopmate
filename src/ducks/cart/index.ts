import { createDomain } from "effector";
import { CartItem } from "models";
import { CartAddProps } from "types";
import { defaults, mergeWith } from "lodash";
import api from "api";

const domain = createDomain("cart");
const storedCartId = localStorage.getItem("shopmate-cart-id") || null;

// effects
const fetchAll = domain.effect<string, CartItem[], any>("fech all").use(cartId => {
  return api.cart.fetchAll({ cartId });
});

const generateId = domain.effect<void, string, any>("generate id").use(async _ => {
  const id = await api.cart.generateId();
  localStorage.setItem("shopmate-cart-id", id);
  return id;
});

const add = domain.effect<CartAddProps, CartItem[], any>("add item to cart").use(props => {
  if (props.quantity > 1) {
    return api.cart.add(props).then(res => {
      const item = res.find(
        i => i.productId === props.productId && i.attributes === props.attributes
      );

      if (item) {
        return api.cart
          .update({ itemId: item.id, quantity: item.quantity + props.quantity - 1 })
          .then(res2 => {
            return mergeWith(res, res2, (a, b) => {
              a.quantity = b.quantity;
              a.subtotal = b.subtotal;
              return a;
            });
          });
      } else {
        return res;
      }
    });
  }

  return api.cart.add(props);
});

const update = domain
  .effect<{ itemId: number; quantity: number }, CartItem[], any>("update item to cart")
  .use(args => {
    return api.cart.update(args);
  });

const remove = domain.effect<number, number, any>("remove item from cart").use(id => {
  return api.cart.remove({ itemId: id });
});

// stores
const $id = domain.store<string | null>(storedCartId, { name: "id" });
const $all = domain.store<CartItem[]>([], { name: "all" });

// reducers
$id.on(generateId.done, (_, { result: id }) => id);
$all
  .on(fetchAll.done, (state, { result: all }) => all)
  .on(add.done, (state, { result: all }) => all)
  .on(update.done, (state, { result: all }) => {
    const newState = [...state];

    for (let i = 0; i < newState.length; i++) {
      newState[i] = defaults(all[i], newState[i]);
    }

    return newState;
  })
  .on(remove.done, (state, { result: id }) => {
    return [...state].filter(i => i.id !== id);
  });

$id.watch(id => {
  if (id) {
    fetchAll(id);
  }
});

domain.onCreateStore(store => {
  if (store.shortName === "id" && store.getState() === null) {
    generateId();
  }
});

// exports
export default {
  $id,
  $all,
  generateId,
  fetchAll,
  add,
  remove,
  update
};
