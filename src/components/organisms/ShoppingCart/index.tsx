import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { CartItem } from "models";
import { ShoppingCartRow } from "components";
import { Button, Typography, Box } from "@material-ui/core";

interface ShoppingCartProps {
  className?: string;
  items: CartItem[];
  onQuantityChange: (item: number, value: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout?: () => void;
  onClose?: () => void;
}

const ShoppingCart = ({
  items = [],
  onClose,
  onRemoveItem,
  onQuantityChange,
  ...rest
}: ShoppingCartProps) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);
  return (
    <div className={className}>
      <header className={classes.header}>
        <Typography variant="h2">{items.length} items in your cart</Typography>
        <div className={classes.contentHeader}>
          <Box flex={1}>
            <Typography variant="h3" color="textSecondary">
              Item
            </Typography>
          </Box>
          <Box width="150px" textAlign="center">
            <Typography variant="h3" color="textSecondary">
              Quantity
            </Typography>
          </Box>
          <Box width="150px" textAlign="right">
            <Typography variant="h3" color="textSecondary">
              Price
            </Typography>
          </Box>
        </div>
      </header>
      <div className={classes.content}>
        {items.map((item, idx) => {
          return (
            <ShoppingCartRow
              cartItem={item}
              key={idx}
              onRemove={onRemoveItem}
              onQuantityChange={value => onQuantityChange(item.id, value)}
            />
          );
        })}
      </div>
      <div className={classes.footer}>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Back to Shop
        </Button>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
