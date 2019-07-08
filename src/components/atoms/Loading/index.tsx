import * as React from "react";
import cx from "classnames";
import { CircularProgress, Typography } from "@material-ui/core";
import useStyles from "./styles";

interface LoadingProps {
  className?: string;
}

const Loading = (props: LoadingProps) => {
  const classes = useStyles();
  const className = cx("loading", classes.root, props.className);

  return (
    <div className={className}>
      <CircularProgress color="primary" size={62} className={classes.progress} />
      <Typography className={classes.logo} variant="h2" color="primary">
        S
      </Typography>
      <Typography variant="h3" className={classes.title} color="inherit">
        Loading...
      </Typography>
    </div>
  );
};

export default Loading;
