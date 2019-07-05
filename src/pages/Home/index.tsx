import * as React from "react";
import { SimpleTemplate } from "templates";
import { ProductsGrid } from "components";
import { useStore } from "effector-react";
import ducks from "ducks";

const HomePage = (props: any) => {
  const products = useStore(ducks.product.$all);

  React.useEffect(() => {
    ducks.product.fetchProducts({});
  }, []);

  return (
    <SimpleTemplate>
      <ProductsGrid products={products} />
    </SimpleTemplate>
  );
};

export default HomePage;
