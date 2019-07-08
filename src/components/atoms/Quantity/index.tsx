import * as React from "react";
import cx from "classnames";
import { Button, Fab, Icon, Typography } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  className?: string;
  initialValue?: number;
  onChange?: (value: number) => void;
}

const Component = ({ initialValue = 1, onChange, ...rest }: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);
  const [value, setValue] = React.useState(initialValue);

  const add = () => {
    setValue(value + 1);
    if (onChange) {
      onChange(value + 1);
    }
  };
  const remove = () => {
    if (value > 1) {
      setValue(value - 1);
      if (onChange) {
        onChange(value - 1);
      }
    }
  };
  return (
    <div {...rest} className={className}>
      <Fab size="small" aria-label="Add" className={classes.btn} onClick={remove}>
        <Icon>remove</Icon>
      </Fab>
      <div className={classes.value}>
        <Typography variant="h3">{value}</Typography>
      </div>
      <Fab size="small" aria-label="Add" className={classes.btn} onClick={add}>
        <Icon>add</Icon>
      </Fab>
    </div>
  );
};

export default Component;
