import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import ContentLoader from "react-content-loader";

interface Props {
  className?: string;
}

const Component = (props: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, props.className);
  return (
    <div className={className}>
      <ContentLoader
        height={320}
        width={300}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#d6d6d6">
        <rect x="30" y="30" rx="0" ry="0" width="240" height="180" />
        <rect x="30" y="220" rx="0" ry="0" width="240" height="20" />
        <rect x="60" y="250" rx="0" ry="0" width="180" height="20" />
      </ContentLoader>
    </div>
  );
};

export default Component;
