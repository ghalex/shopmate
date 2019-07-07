import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { Typography, Button, Icon, Box } from "@material-ui/core";
import { Quantity } from "components";

interface Props {
  className?: string;
}

const Component = (props: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, props.className);
  return (
    <div className={className}>
      <div className={classes.row}>
        <Box height={90} pr={2}>
          <img height="100%" src="https://backendapi.turing.com/images/products/gallic-cock.gif" />
        </Box>
        <div className={classes.rowContent}>
          <div>
            <Typography variant="h3">Purple T-shire 2033</Typography>
            <Typography variant="body1">L, White</Typography>
          </div>
          <Button className={classes.btnRemove}>
            <Icon fontSize="small" color="primary">
              close
            </Icon>
            Remove
          </Button>
        </div>
        <Box width={150} display="flex" alignItems="center" justifyContent="center">
          <Quantity />
        </Box>
        <Box width={150} display="flex" alignItems="center" justifyContent="flex-end">
          <Typography variant="h2">£14.99</Typography>
        </Box>
      </div>
    </div>
  );
};

export default Component;
