import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { Product } from "models";
import configs from "configs";
import { Typography, Button, Box, CircularProgress } from "@material-ui/core";
import { Colors, Sizes, Quantity, Loading } from "components";

interface Props {
  className?: string;
  product: Product | null;
  busy?: boolean;
  onAdd: (value: any) => void;
}

const Component = ({ product, busy = false, onAdd, ...rest }: Props) => {
  const classes = useStyles({ hasDiscount: (product && product.hasDiscount) || false });
  const className = cx(classes.root, rest.className);
  const [selectedImage, selectImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState("White");
  const [size, setSize] = React.useState("S");

  if (!product || product.attributes.length === 0) {
    return (
      <div className={className}>
        <Box width="100%">
          <Loading />
        </Box>
      </div>
    );
  }

  const colors = product.attributes.filter(a => a.name === "Color").map(c => c.value);
  const sizes = product.attributes.filter(a => a.name === "Size").map(c => c.value);

  const images = [
    `${configs.imagesUrl}/products/${product.image}`,
    `${configs.imagesUrl}/products/${product.image2}`
  ];

  return (
    <div className={className} data-cy="product-details">
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
        <Typography variant="h2" data-cy="product-name">
          {product.name}
        </Typography>
        <Typography variant="h2" color="primary">
          £{product.price}
        </Typography>
        <div className={classes.detailsRow}>
          <Typography variant="h3" color="textSecondary">
            Color:
          </Typography>
          <Colors colors={colors} onChange={c => setColor(c)} />
        </div>
        <div className={classes.detailsRow}>
          <Typography variant="h3" color="textSecondary">
            Sizes:
          </Typography>
          <Sizes sizes={sizes} onChange={s => setSize(s)} />
        </div>
        <div className={classes.detailsRow}>
          <Typography variant="h3" color="textSecondary">
            Quantity:
          </Typography>
          <Quantity value={quantity} onChange={q => setQuantity(q)} />
        </div>
        <div className={classes.detailsRow}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: 180 }}
            onClick={() => {
              onAdd({ productId: product.id, attributes: [color, size], quantity });
            }}
            data-cy="product-add">
            {!busy && <span>Add to cart</span>}
            {busy && <CircularProgress color="secondary" size={24} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Component;
