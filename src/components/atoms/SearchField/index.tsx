import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import { TextField, InputAdornment, Icon } from "@material-ui/core";

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 260,
    borderRadius: 18,
    padding: "3px 12px",
    margin: "0 8px",
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  },
  field: {
    width: "100%",
    "& .MuiInputAdornment-root": {
      color: "white"
    },
    "& input": {
      color: "white",
      fontWeight: "bold"
    }
  }
}));

const Component = (props: Props) => {
  const classes = useStyles();

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
      />
    </div>
  );
};

export default Component;
