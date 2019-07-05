import * as React from "react";
import cx from "classnames";
import { Product } from "models";
import useStyles from "./styles";
import { ProductCard, Filters } from "components";

interface Props {
  className?: string;
  products?: Product[];
  filters?: JSX.Element;
}

const ProductsGrid = ({ products = [], filters, ...rest }: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);

  return (
    <div {...rest} data-cy="products-grid" className={className}>
      {filters}
      {products.map(product => {
        return <ProductCard key={product.id} data={product} />;
      })}
    </div>
  );
};

export default ProductsGrid;
