import * as React from "react";
import { SimpleTemplate } from "templates";
import { ProductsGrid } from "containers";

const HomePage = (props: any) => {
  return (
    <SimpleTemplate>
      <ProductsGrid />
    </SimpleTemplate>
  );
};

export default HomePage;
