import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { Product } from "models";
import { Typography } from "@material-ui/core";
import configs from "configs";

interface Props {
  className?: string;
  data: Product;
}

const PorductCard = ({ data: product, ...rest }: Props) => {
  const classes = useStyles({ hasDiscount: product.hasDiscount });
  const className = cx(classes.root, rest.className);

  return (
    <div {...rest} className={className}>
      <img
        className={classes.image}
        src={`${configs.imagesUrl}/products/${product.data.thumbnail}`}
      />
      <Typography variant="h3">{product.data.name}</Typography>
      <Typography className={classes.price}>£{product.data.price}</Typography>
      {product.hasDiscount && (
        <Typography variant="h3" color="primary">
          £{product.data.discounted_price}
        </Typography>
      )}
    </div>
  );
};

export default PorductCard;
