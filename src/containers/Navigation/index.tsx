import * as React from "react";
import { Navigation } from "components";
import { useStore } from "effector-react";
import ducks from "ducks";

type Props = {} & Omit<Parameters<typeof Navigation>[0], "nbOfCartItems">;

const NavigationContainer = (props: Props) => {
  const items = useStore(ducks.cart.$all);

  return <Navigation nbOfCartItems={items.length} {...props} />;
};

export default NavigationContainer;
