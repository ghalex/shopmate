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
      console.log("map product", productId, products);
      return products.find(p => p.id === parseInt(productId, 10)) || null;
    }
  });

  React.useEffect(() => {
    console.log("load product");
    ducks.product.fetchProductDetails(id);
  }, [id]);

  console.log(product);
  return (
    <SimpleTemplate variant="black">
      <ProductDetails product={product} />
    </SimpleTemplate>
  );
};

export default ProductPage;
