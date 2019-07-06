import * as React from "react";
import { SimpleTemplate } from "templates";
import { ProductDetails } from "components";
import { useStoreMap } from "effector-react";
import ducks from "ducks";

const ProductPage = ({
  match: {
    params: { id }
  }
}: any) => {
  const colors = ["White", "Indigo", "Green", "Blue"];
  const product = useStoreMap({
    store: ducks.product.$all,
    keys: [id],
    fn: (products, [productId]) => {
      return products.find(p => p.id === parseInt(productId, 10)) || null;
    }
  });

  React.useEffect(() => {
    ducks.product.fetchProductDetails(id);
  }, [id]);

  return (
    <SimpleTemplate variant="black">
      <ProductDetails product={product} />
    </SimpleTemplate>
  );
};

export default ProductPage;
