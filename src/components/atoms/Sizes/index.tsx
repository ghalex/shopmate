import * as React from "react";
import cx from "classnames";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  className?: string;
  sizes: string[];
}

const Component = ({ sizes, ...rest }: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);
  const [selected, setSelected] = React.useState(2);

  return (
    <div {...rest} className={className}>
      {sizes.map((size, idx) => {
        return (
          <Button
            key={idx}
            size="small"
            color={idx === selected ? "primary" : "default"}
            variant="contained"
            onClick={() => setSelected(idx)}>
            {size}
          </Button>
        );
      })}
    </div>
  );
};

export default Component;
