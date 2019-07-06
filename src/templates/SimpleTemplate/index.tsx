import * as React from "react";
import { Navigation } from "components";
import useStyles from "./styles";

interface TemplateProps {
  children: JSX.Element | JSX.Element[] | string;
  variant?: "primary" | "white" | "black";
}

const SimpleTemplate = ({ children, variant = "primary", ...props }: TemplateProps) => {
  const classes = useStyles();
  return (
    <div {...props} className={classes.root}>
      <header className={classes.header}>
        <Navigation variant={variant} position="relative" />
      </header>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default SimpleTemplate;
