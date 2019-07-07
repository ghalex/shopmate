import * as React from "react";
import cx from "classnames";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  className?: string;
  sizes: string[];
  onChange?: (size: string) => void;
}

const Component = ({ sizes, onChange, ...rest }: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);
  const [selected, setSelected] = React.useState(0);

  const handleChange = (idx: number) => {
    if (onChange) {
      onChange(sizes[idx]);
    }
    setSelected(idx);
  };

  return (
    <div {...rest} className={className}>
      {sizes.map((size, idx) => {
        return (
          <Button
            key={idx}
            size="small"
            color={idx === selected ? "primary" : "default"}
            variant="contained"
            onClick={() => handleChange(idx)}>
            {size}
          </Button>
        );
      })}
    </div>
  );
};

export default Component;
