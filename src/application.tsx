import * as React from "react";
import { hot } from "react-hot-loader/root";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { RoutePrivate, RoutePublic } from "components";
import { useStore } from "effector-react";
import * as pages from "./pages";
import auth from "ducks/auth";
import theme from "./theme";

const App = (props: {}) => {
  const user = useStore(auth.$user);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <RoutePublic path="/" exact={true} component={pages.Home} />
        <RoutePublic path="/products/:id" exact={true} component={pages.Product} />
        <RoutePublic path="/test" exact={true} component={pages.Test} />
      </Router>
    </ThemeProvider>
  );
};

export default hot(App);
