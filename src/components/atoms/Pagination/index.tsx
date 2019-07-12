import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import Pagination, { PaginationProps } from "material-ui-flat-pagination";

type Props = {} & PaginationProps;

const Component = (props: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, props.className);

  return (
    <Pagination
      {...props}
      classes={classes}
      className={className}
      currentPageColor="primary"
      otherPageColor="inherit"
    />
  );
};

export default Component;
