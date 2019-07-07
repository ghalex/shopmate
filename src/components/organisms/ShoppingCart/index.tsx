import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";

interface Props {
  className?: string;
}

const Component = (props: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, props.className);
  return <div className={className}>shopping cart</div>;
};

export default Component;
