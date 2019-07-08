import * as React from "react";
import { SimpleTemplate } from "templates";
import { ProductDetails } from "containers";

const ProductPage = ({
  match: {
    params: { id }
  }
}: any) => {
  const productId = parseInt(id, 10);
  return (
    <SimpleTemplate variant="black">
      <ProductDetails id={productId} />
    </SimpleTemplate>
  );
};

export default ProductPage;
