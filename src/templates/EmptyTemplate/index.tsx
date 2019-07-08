import * as React from "react";
import useStyles from "./styles";

interface TemplateProps {
  children: JSX.Element | JSX.Element[] | string;
  variant?: "primary" | "white" | "black";
}

const SimpleTemplate = ({ children, variant = "primary", ...props }: TemplateProps) => {
  const classes = useStyles();
  return (
    <div {...props} className={classes.root}>
      {children}
    </div>
  );
};

export default SimpleTemplate;
