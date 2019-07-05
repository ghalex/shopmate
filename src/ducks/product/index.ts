import { createDomain, combine } from "effector";
import { Product } from "models";
import { Filter } from "types";
import api from "api";

const domain = createDomain("product");

// events & effects
const changeFilter = domain.event<Filter>("filter");

const fetchProducts = domain.effect<Filter, Product[], any>("fetch products").use(filter => {
  return api.products.fetchProducts(filter);
});

// stores
const $all = domain.store<Product[]>([]);
const $filter = domain.store<Filter>({ departmentId: -1, categoryId: -1, page: 1, limit: 7 });
const $busy = domain.store(false);

$filter.on(changeFilter, (state, payload) => payload).watch(newFilter => fetchProducts(newFilter));

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
  $filter,
  fetchProducts,
  changeFilter
};
