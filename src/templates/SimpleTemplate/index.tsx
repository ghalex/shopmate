import * as React from "react";
import { Theme } from "theme";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1
  }
}));

interface TemplateProps {
  children: JSX.Element | JSX.Element[] | string;
}

const SimpleTemplate = ({ children, ...props }: TemplateProps) => {
  const classes = useStyles();
  return (
    <div {...props} className={classes.root}>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default SimpleTemplate;
