import * as React from "react";
import { ProductsGrid, Filters } from "components";
import { useStore } from "effector-react";
import ducks from "ducks";
import { ProductsFilter } from "containers";

const ProductsGridContainer = (props: any) => {
  const products = useStore(ducks.product.$all);
  const filter = useStore(ducks.product.$filter);
  const busy = useStore(ducks.product.$busy);

  React.useEffect(() => {
    if (products.length === 0) {
      ducks.product.fetchProducts(filter);
    }
  }, []);

  return <ProductsGrid products={products} filters={<ProductsFilter />} showLoading={busy} />;
};

export default ProductsGridContainer;
