import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { pick } from "lodash";
import {
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  Icon,
  DialogContent
} from "@material-ui/core";

interface Props {
  className?: string;
  error?: string;
  open: boolean;
  title: string;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}

const Component = ({ open, error, children, title, onClose, ...rest }: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);

  return (
    <Dialog open={open} onClose={onClose} className={className} classes={pick(classes, "paper")}>
      <DialogTitle>
        <Typography variant="h2" align="center" component="div">
          {title}
        </Typography>
        {error && (
          <Typography align="center" className={classes.danger}>
            {error}
          </Typography>
        )}
        <IconButton aria-label="Close" onClick={onClose} className={classes.closeButton}>
          <Icon>close</Icon>
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Component;
