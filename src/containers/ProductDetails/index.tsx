import * as React from "react";
import { ProductDetails, SnackbarContent } from "components";
import { useStoreMap, useStore } from "effector-react";
import ducks from "ducks";
import { Snackbar } from "@material-ui/core";

const ProductDetailsContainer = ({ id }: { id: number }) => {
  const [open, setOpen] = React.useState(false);
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
    setOpen(false);
  };

  const handleAdd = (value: any) => {
    console.log(value);
    setOpen(false);
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
          setOpen(true);
        });
    } else {
      if (item) {
        const quantity = item.quantity + value.quantity;
        ducks.cart.update({ itemId: item.id, quantity });
      }
    }
  };

  return (
    <>
      <ProductDetails onAdd={handleAdd} product={product} />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}>
        <SnackbarContent variant="success" message="Product added to cart." onClose={handleClose} />
      </Snackbar>
    </>
  );
};

export default ProductDetailsContainer;
