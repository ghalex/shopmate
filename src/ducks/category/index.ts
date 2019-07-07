import { createDomain } from "effector";
import { Category } from "models";
import api from "api";

const domain = createDomain("product");

// effects
const fetchCategories = domain.effect<void, Category[], any>("fetch categories").use(() => {
  return api.categories.fetchCategories();
});

// stores
const $all = domain.store<Category[]>([]);
const $busy = domain.store(false);

// prettier-ignore
$all
  .on(fetchCategories, () => [])
  .on(fetchCategories.done, (state, { result: all }) => all)

$busy
  .on(fetchCategories, () => true)
  .on(fetchCategories.done, () => false)
  .on(fetchCategories.fail, () => false);

// exports
export default {
  $all,
  $busy,
  fetchCategories
};
