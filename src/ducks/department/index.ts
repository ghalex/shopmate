import { createDomain } from "effector";
import { Department } from "models";
import api from "api";

const domain = createDomain("product");

// effects
const fetchDepartments = domain.effect<void, Department[], any>("fetch categories").use(() => {
  return api.departments.fetchDepartments();
});

// stores
const $all = domain.store<Department[]>([]);
const $busy = domain.store(false);

// prettier-ignore
$all
  .on(fetchDepartments, () => [])
  .on(fetchDepartments.done, (state, { result: all }) => all)

$busy
  .on(fetchDepartments, () => true)
  .on(fetchDepartments.done, () => false)
  .on(fetchDepartments.fail, () => false);

// exports
export default {
  $all,
  $busy,
  fetchDepartments
};
