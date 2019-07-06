import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { Product } from "models";
import configs from "configs";
import { Typography, Button } from "@material-ui/core";
import { Colors, Sizes, Quantity } from "components";

interface Props {
  className?: string;
  product: Product | null;
}

const Component = ({ product, ...rest }: Props) => {
  const classes = useStyles({ hasDiscount: (product && product.hasDiscount) || false });
  const className = cx(classes.root, rest.className);
  const [selectedImage, selectImage] = React.useState(0);

  if (!product) {
    return <div className={className}>Loading</div>;
  }

  const colors = product.attributes.filter(a => a.name === "Color").map(c => c.value);
  const sizes = product.attributes.filter(a => a.name === "Size").map(c => c.value);

  const images = [
    `${configs.imagesUrl}/products/${product.image}`,
    `${configs.imagesUrl}/products/${product.image2}`
  ];

  return (
    <div className={className}>
      <div className={classes.images}>
        {product.image && <img className={classes.imagesPreview} src={images[selectedImage]} />}
        <div className={classes.imagesList}>
          {product.image && (
            <img
              src={images[0]}
              className={cx({ [classes.imagesSelected]: selectedImage === 0 })}
              onClick={() => selectImage(0)}
            />
          )}
          {product.image2 && (
            <img
              src={images[1]}
              className={cx({ [classes.imagesSelected]: selectedImage === 1 })}
              onClick={() => selectImage(1)}
            />
          )}
        </div>
      </div>
      <div className={classes.details}>
        <Typography variant="h2">{product.name}</Typography>
        <Typography variant="h2" color="primary">
          £{product.price}
        </Typography>
        <div className={classes.detailsRow}>
          <Typography variant="h3" color="textSecondary">
            Color:
          </Typography>
          <Colors colors={colors} />
        </div>
        <div className={classes.detailsRow}>
          <Typography variant="h3" color="textSecondary">
            Sizes:
          </Typography>
          <Sizes sizes={sizes} />
        </div>
        <div className={classes.detailsRow}>
          <Typography variant="h3" color="textSecondary">
            Quantity:
          </Typography>
          <Quantity />
        </div>
        <div className={classes.detailsRow}>
          <Button variant="contained" color="primary">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Component;
