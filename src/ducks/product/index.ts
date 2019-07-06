import { createDomain, combine } from "effector";
import { Product } from "models";
import { Filter } from "types";
import { defaults } from "lodash";
import api from "api";

const domain = createDomain("product");

// events & effects
const changeFilter = domain.event<Filter>("filter");

const fetchProducts = domain.effect<Filter, Product[], any>("fetch all products").use(filter => {
  return api.products.fetchAll(filter);
});

const fetchProductDetails = domain
  .effect<number, Product, any>("fetch products details")
  .use(id => {
    return api.products.fetch({ id });
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
  .on(fetchProductDetails.done, (state, { result: product }) => {
    return state.map(p => {
      if (p.id === product.id) {
        return new Product(defaults(product.rawData, p.rawData))
      }
      return p
    })
  })

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
  fetchProductDetails,
  changeFilter
};
