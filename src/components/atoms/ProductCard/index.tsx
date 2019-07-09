import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { Product } from "models";
import { Typography, Button } from "@material-ui/core";
import configs from "configs";
import { Link } from "components";

interface Props {
  className?: string;
  data: Product;
}

const PorductCard = ({ data: product, ...rest }: Props) => {
  const classes = useStyles({ hasDiscount: product.hasDiscount });
  const className = cx(classes.root, rest.className);

  return (
    <div {...rest} className={className} data-cy="product">
      <div>
        <img className={classes.image} src={`${configs.imagesUrl}/products/${product.thumbnail}`} />
        <Typography data-cy="product-name" align="center" variant="h3">
          {product.name}
        </Typography>
        <Typography className={classes.price}>£{product.price}</Typography>
        {product.hasDiscount && (
          <Typography variant="h3" color="primary">
            £{product.discountedPrice}
          </Typography>
        )}
      </div>
      <div className={classes.overlay}>
        <Typography variant="h2" align="center">
          {product.name}
        </Typography>
        <div>
          <Typography variant="h2" color="textSecondary" className={classes.price} align="center">
            £{product.price}
          </Typography>
          {product.hasDiscount && (
            <Typography variant="h2" color="primary" align="center">
              £{product.discountedPrice}
            </Typography>
          )}
        </div>
        <Link to={`/products/${product.id}`}>
          <Button variant="contained" color="primary" data-cy="product-view">
            Quick view
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PorductCard;
