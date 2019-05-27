import * as React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Hidden, Link, Icon, IconButton, Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Logo, SearchField } from "components";

// Burger
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  brand: {
    width: "100%"
  },
  menu: {
    display: "flex",
    alignItems: "center",
    "& a": {
      color: "white",
      padding: 20,
      cursor: "pointer"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  burger: {
    fontSize: 9,
    margin: 8,
    "& .burger-lines, & .burger-lines:after, & .burger-lines:before": {
      height: 3
    }
  },
  badge: {
    color: theme.palette.primary.main,
    backgroundColor: "white"
  }
}));

const Component = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar className={classes.root} elevation={0}>
      <Toolbar>
        <div className={classes.brand}>
          <Logo color="white" />
        </div>
        <Hidden smUp={true} implementation="css">
          <Burger className={classes.burger} isOpen={open} onClick={() => setOpen(!open)} />
        </Hidden>
        <div className={classes.menu}>
          <Link variant="h3">Women</Link>
          <Link variant="h3">Man</Link>
          <Link variant="h3">Kids</Link>
          <Hidden smDown={true} implementation="css">
            <SearchField />
          </Hidden>
          <IconButton color="inherit">
            <Badge badgeContent={4} classes={{ badge: classes.badge }}>
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Component;
