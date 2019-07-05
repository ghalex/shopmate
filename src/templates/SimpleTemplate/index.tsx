import * as React from "react";
import { Navigation } from "components";
import useStyles from "./styles";

interface TemplateProps {
  children: JSX.Element | JSX.Element[] | string;
}

const SimpleTemplate = ({ children, ...props }: TemplateProps) => {
  const classes = useStyles();
  return (
    <div {...props} className={classes.root}>
      <header>
        <Navigation variant="primary" position="relative" />
      </header>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default SimpleTemplate;
