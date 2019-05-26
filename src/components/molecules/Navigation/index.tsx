import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Logo } from "components";

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {}
}));

const Component = (props: Props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} elevation={0}>
      <Toolbar>
        <Logo color="white" />
      </Toolbar>
    </AppBar>
  );
};

export default Component;
