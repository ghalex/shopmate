import * as React from "react";
import cx from "classnames";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import { SnackbarContent, Icon, IconButton, Typography } from "@material-ui/core";
import { amber, green } from "@material-ui/core/colors";

interface Props {
  className?: string;
  message: string;
  variant: "success" | "info" | "warning" | "error";
  onClose: () => void;
  [key: string]: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

const Component = ({ message, variant, onClose, ...rest }: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);
  const variantIcon = {
    success: "check_circle",
    warning: "warning",
    error: "error",
    info: "info"
  };

  return (
    <SnackbarContent
      className={cx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={cx(classes.icon, classes.iconVariant)}>{variantIcon[variant]}</Icon>
          <Typography>{message}</Typography>
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          <Icon className={classes.icon}>close</Icon>
        </IconButton>
      ]}
      {...rest}
    />
  );
};

export default Component;
