import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { Typography, Button, Icon, Box } from "@material-ui/core";
import { Quantity } from "components";
import { CartItem } from "models";
import configs from "configs";

interface Props {
  className?: string;
  cartItem: CartItem;
  onQuantityChange: (value: number) => void;
  onRemove: (id: number) => void;
}

const Component = ({ cartItem, onRemove, onQuantityChange, ...rest }: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);

  return (
    <div className={className}>
      <div className={classes.row}>
        <Box height={90} pr={2}>
          <img height="100%" src={`${configs.imagesUrl}/products/${cartItem.image}`} />
        </Box>
        <div className={classes.rowContent}>
          <div>
            <Typography variant="h3">{cartItem.name}</Typography>
            <Typography variant="body1">{cartItem.attributes}</Typography>
          </div>
          <Button className={classes.btnRemove} onClick={() => onRemove(cartItem.id)}>
            <Icon fontSize="small" color="primary">
              close
            </Icon>
            Remove
          </Button>
        </div>
        <Box width={150} display="flex" alignItems="center" justifyContent="center">
          <Quantity initialValue={cartItem.quantity} onChange={onQuantityChange} />
        </Box>
        <Box width={150} display="flex" alignItems="center" justifyContent="flex-end">
          <Typography variant="h2">£{cartItem.subtotal}</Typography>
        </Box>
      </div>
    </div>
  );
};

export default Component;
