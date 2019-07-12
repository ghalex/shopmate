import * as React from "react";
import cx from "classnames";
import { Product } from "models";
import useStyles from "./styles";
import { ProductCard, Filters, SkeletonCard } from "components";

interface Props {
  className?: string;
  products?: Product[];
  filters?: JSX.Element;
  showLoading?: boolean;
}

const ProductsGrid = ({ products = [], filters, showLoading = false, ...rest }: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);
  const skeletons = [0, 1, 2, 3];

  return (
    <div {...rest} data-cy="products-grid" className={className}>
      {filters}
      {!showLoading
        ? products.map(product => {
            return <ProductCard key={product.id} data={product} />;
          })
        : skeletons.map((_, idx) => {
            return <SkeletonCard key={idx} />;
          })}
    </div>
  );
};

export default ProductsGrid;
