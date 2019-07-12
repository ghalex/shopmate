import * as React from "react";
import { useTheme } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Hidden, Icon, IconButton, Badge, Link, Dialog } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link as LinkTo, Logo, SearchField, ShoppingCart } from "components";
import { AppBarProps } from "@material-ui/core/AppBar";
import useStyles from "./styles";

// Burger
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";

export type NavigationVariant = "primary" | "white" | "black";

interface Props extends AppBarProps {
  className?: string;
  variant: NavigationVariant;
  nbOfCartItems: number;
  hideSearch?: boolean;
  searchValue?: string;
  onCartClick?: () => void;
  onSearch?: (value: string) => void;
}

const NavigationComponent = ({
  variant,
  nbOfCartItems = 0,
  hideSearch = false,
  searchValue = "",
  onCartClick,
  onSearch,
  ...others
}: Props) => {
  const theme: Theme = useTheme();
  const primary = theme.palette.primary.main;
  const variants = {
    primary: { main: primary, over: "white", accent: "white" },
    white: { main: "white", over: "black", accent: primary },
    black: { main: "#2e2e2e", over: "white", accent: "white" }
  };
  const classes = useStyles({ variant: variants[variant] || variants.primary });
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar className={classes.root} elevation={0} {...others} data-cy="navigation">
      <Toolbar>
        <div className={classes.brand}>
          <LinkTo to="/">
            <Logo />
          </LinkTo>
        </div>
        <Hidden smUp={true} implementation="css">
          <Burger className={classes.burger} isOpen={open} onClick={() => setOpen(!open)} />
        </Hidden>
        <div className={classes.menu}>
          <Link variant="h3">Women</Link>
          <Link variant="h3">Man</Link>
          <Link variant="h3">Kids</Link>
          <Hidden mdUp={hideSearch} smDown={true} implementation="css">
            <SearchField
              variant={variant === "white" ? "black" : "white"}
              value={searchValue}
              onChange={value => (onSearch ? onSearch(value) : false)}
            />
          </Hidden>
          <IconButton color="inherit" onClick={onCartClick}>
            <Badge
              badgeContent={nbOfCartItems}
              classes={{ badge: classes.badge }}
              data-cy="cart-badge">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

NavigationComponent.defaultProps = {
  variant: "primary"
};

export default NavigationComponent;
