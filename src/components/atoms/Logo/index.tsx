import * as React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Theme } from "theme";
import { Typography } from "@material-ui/core";

interface Props {
  color?: "primary" | "white" | "black";
}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: { color: string }) => ({
    letterSpacing: 4,
    padding: 20,
    color: props.color
  })
}));

const Component = ({ color = "black", ...others }: Props) => {
  const theme: Theme = useTheme();
  const colors = { primary: theme.palette.primary.main, white: "white", black: "black" };
  const classes = useStyles({ color: colors[color] });
  return (
    <Typography variant="h2" {...others} className={classes.root}>
      SHOPMATE
    </Typography>
  );
};

export default Component;
