import * as React from "react";
import { Navigation } from "components";
import { useStore } from "effector-react";
import ducks from "ducks";

type Props = {} & Omit<Parameters<typeof Navigation>[0], "nbOfCartItems">;

const NavigationContainer = (props: Props) => {
  const items = useStore(ducks.cart.$all);
  const filter = useStore(ducks.product.$filter);

  const handleSearch = (value: string) => {
    ducks.product.changeFilter({ ...filter, page: 1, search: value });
  };

  return (
    <Navigation
      nbOfCartItems={items.length}
      searchValue={filter.search}
      onSearch={handleSearch}
      {...props}
    />
  );
};

export default NavigationContainer;
