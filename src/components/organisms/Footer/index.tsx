import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { Typography, IconButton } from "@material-ui/core";

interface Props {
  className?: string;
}

const Component = (props: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, props.className);
  return (
    <footer className={className}>
      <div className={classes.links}>
        <Typography variant="h3">Women</Typography>
        <Typography variant="h3">Men</Typography>
        <Typography variant="h3">Kids</Typography>
        <Typography variant="h3">Shoes</Typography>
      </div>
      <div>
        <IconButton className={classes.iconBtn}>
          <img src="https://img.icons8.com/material/96/000000/facebook-new.png" />
        </IconButton>
        <IconButton className={classes.iconBtn}>
          <img src="https://img.icons8.com/material/96/000000/instagram-new.png" />
        </IconButton>
        <IconButton className={classes.iconBtn}>
          <img src="https://img.icons8.com/material/96/000000/twitter-squared.png" />
        </IconButton>
      </div>
      <div>
        <Typography color="textSecondary">©2016 shopmate Ltd. All rights reserved.</Typography>
      </div>
    </footer>
  );
};

export default Component;
