import * as React from "react";
import { Filters } from "components";
import { useStore } from "effector-react";
import ducks from "ducks";

const ProductsFilterContainer = (props: any) => {
  const departments = useStore(ducks.department.$all);
  const categories = useStore(ducks.category.$all);
  const filter = useStore(ducks.product.$filter);

  React.useEffect(() => {
    if (departments.length === 0) {
      ducks.department.fetchDepartments();
    }

    if (categories.length === 0) {
      ducks.category.fetchCategories();
    }
  }, []);

  return (
    <Filters
      filter={filter}
      departments={departments}
      categories={categories}
      onChangeFilter={newFilter => ducks.product.changeFilter(newFilter)}
    />
  );
};

export default ProductsFilterContainer;
