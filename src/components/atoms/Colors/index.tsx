import * as React from "react";
import cx from "classnames";

import useStyles from "./styles";

interface Props {
  className?: string;
  colors: string[];
}

const Component = ({ colors, ...rest }: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);
  const [selected, setSelected] = React.useState(0);

  return (
    <div {...rest} className={className}>
      {colors.map((color, idx) => {
        return (
          <div
            key={idx}
            onClick={() => setSelected(idx)}
            className={cx(classes.colorContainer, { [classes.selected]: idx === selected })}>
            <div className={classes.color} style={{ backgroundColor: color.toLowerCase() }} />
          </div>
        );
      })}
    </div>
  );
};

export default Component;
