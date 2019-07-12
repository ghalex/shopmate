import * as React from "react";
import { TextField, InputAdornment, Icon } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  className?: string;
  variant: "white" | "black";
  value: string;
  onChange?: (value: string) => void;
}

const Component = (props: Props) => {
  const classes = useStyles({ variant: props.variant });

  return (
    <div className={classes.root}>
      <TextField
        className={classes.field}
        placeholder="search anything"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start" color="inherit">
              <Icon color="inherit">search</Icon>
            </InputAdornment>
          )
        }}
        value={props.value}
        onChange={e => (props.onChange ? props.onChange(e.target.value) : null)}
      />
    </div>
  );
};

export default Component;
