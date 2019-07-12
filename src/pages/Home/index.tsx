import * as React from "react";
import { SimpleTemplate } from "templates";
import { ProductsGrid, Pagination } from "containers";

const HomePage = (props: any) => {
  return (
    <SimpleTemplate>
      <ProductsGrid />
      <Pagination />
    </SimpleTemplate>
  );
};

export default HomePage;
