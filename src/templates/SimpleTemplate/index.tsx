import * as React from "react";
import { ShoppingCart, Navigation } from "containers";
import useStyles from "./styles";
import { Dialog } from "@material-ui/core";

interface TemplateProps {
  children: JSX.Element | JSX.Element[] | string;
  variant?: "primary" | "white" | "black";
}

const SimpleTemplate = ({ children, variant = "primary", ...props }: TemplateProps) => {
  const classes = useStyles();
  const [openCart, setOpenCart] = React.useState(false);

  return (
    <div {...props} className={classes.root}>
      <header className={classes.header}>
        <Navigation variant={variant} position="relative" onCartClick={() => setOpenCart(true)} />
        <Dialog open={openCart} onClose={() => setOpenCart(false)} fullWidth={true} maxWidth="md">
          <ShoppingCart onClose={() => setOpenCart(false)} />
        </Dialog>
      </header>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default SimpleTemplate;
