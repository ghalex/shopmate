import { createDomain } from "effector";
import { Product } from "models";
import api from "api";

const domain = createDomain("product");

// effects
const fetchProducts = domain.effect<any, Product[], any>("fetch products").use(args => {
  return api.products.fetchProducts(args);
});

// stores
export const $all = domain.store<Product[]>([]);
export const $busy = domain.store(false);

// prettier-ignore
$all
  .on(fetchProducts, () => [])
  .on(fetchProducts.done, (state, { result: all }) => all)

$busy
  .on(fetchProducts, () => true)
  .on(fetchProducts.done, () => false)
  .on(fetchProducts.fail, () => false);

// exports
export default {
  $all,
  $busy,
  fetchProducts
};
