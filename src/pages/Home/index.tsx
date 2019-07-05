import * as React from "react";
import { SimpleTemplate } from "templates";
import { ProductsGrid, Filters } from "components";
import { useStore } from "effector-react";
import ducks from "ducks";

const HomePage = (props: any) => {
  const products = useStore(ducks.product.$all);
  const departments = useStore(ducks.department.$all);
  const categories = useStore(ducks.category.$all);
  const filter = useStore(ducks.product.$filter);

  React.useEffect(() => {
    if (products.length === 0) {
      ducks.product.fetchProducts(filter);
    }

    if (departments.length === 0) {
      ducks.department.fetchDepartments();
    }

    if (categories.length === 0) {
      ducks.category.fetchCategories();
    }
  }, []);

  return (
    <SimpleTemplate>
      <ProductsGrid
        products={products}
        filters={
          <Filters
            filter={filter}
            departments={departments}
            categories={categories}
            onChangeFilter={newFilter => ducks.product.changeFilter(newFilter)}
          />
        }
      />
    </SimpleTemplate>
  );
};

export default HomePage;
