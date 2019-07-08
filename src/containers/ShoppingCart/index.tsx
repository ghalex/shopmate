import * as React from "react";
import { ShoppingCart } from "components";
import { Omit } from "utility-types";
import { useStore } from "effector-react";
import ducks from "ducks";

type Props = {} & Omit<Parameters<typeof ShoppingCart>[0], "items">;

const ShoppingCartContainer = (props: Props) => {
  const items = useStore(ducks.cart.$all);

  return (
    <ShoppingCart
      items={items}
      onQuantityChange={(itemId, quantity) => ducks.cart.update({ itemId, quantity })}
      onRemoveItem={id => ducks.cart.remove(id)}
      {...props}
    />
  );
};

export default ShoppingCartContainer;
