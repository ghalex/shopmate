import * as React from "react";
import { ProductDetails, SnackbarContent } from "components";
import { useStoreMap, useStore } from "effector-react";
import ducks from "ducks";
import { Snackbar } from "@material-ui/core";

const ProductDetailsContainer = ({ id }: { id: number }) => {
  const [showSnackbar, setShowSnackbar] = React.useState(false);
  const busy = useStore(ducks.cart.$busy);
  const cartId = useStore(ducks.cart.$id);
  const cartItems = useStore(ducks.cart.$all);
  const product = useStoreMap({
    store: ducks.product.$all,
    keys: [id],
    fn: (products, [productId]) => {
      return products.find(p => p.id === productId) || null;
    }
  });

  React.useEffect(() => {
    ducks.product.fetchProductDetails(id);
  }, [id]);

  const handleClose = () => {
    setShowSnackbar(false);
  };

  const handleAdd = (value: any) => {
    setShowSnackbar(false);
    const item = cartItems.find(
      i => i.productId === value.productId && i.attributes === value.attributes.join(", ")
    );
    if (cartId && !item) {
      ducks.cart
        .add({
          cartId,
          productId: value.productId,
          attributes: value.attributes.join(", "),
          quantity: value.quantity
        })
        .then(() => {
          setShowSnackbar(true);
        });
    } else {
      if (item) {
        const quantity = item.quantity + value.quantity;
        ducks.cart.update({ itemId: item.id, quantity }).then(() => {
          setShowSnackbar(true);
        });
      }
    }
  };

  return (
    <>
      <ProductDetails onAdd={handleAdd} product={product} busy={busy} />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}>
        <SnackbarContent variant="success" message="Product added to cart." onClose={handleClose} />
      </Snackbar>
    </>
  );
};

export default ProductDetailsContainer;
