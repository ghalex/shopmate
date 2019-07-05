import * as React from "react";
import cx from "classnames";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import { Link, LinkProps } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textDecoration: "none"
  }
}));

const Component = (props: LinkProps) => {
  const classes = useStyles();
  const className = cx(classes.root, props.className);
  return (
    <Link {...props} className={className}>
      {props.children}
    </Link>
  );
};

export default Component;
