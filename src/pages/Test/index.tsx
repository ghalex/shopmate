import * as React from "react";
import { EmptyTemplate } from "templates";
import { Button, Typography, Box } from "@material-ui/core";
import { Logo, Navigation } from "components";

import auth from "ducks/auth";

const PublicPage = (props: any) => {
  const login = () => auth.login({ email: "ghalex@gmail.com", password: "123456" });

  return (
    <EmptyTemplate>
      <Navigation position="relative" />
      <Navigation variant="black" position="relative" />
      <Navigation variant="white" position="relative" />
      <Typography variant="h1">H1 Title here</Typography>
      <Typography variant="h2">Some subtitle using H2 font</Typography>
      <Typography variant="h3" color="textPrimary">
        The quick brown fox jumps over the lazy
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom={true}>
        The quick brown fox jumps over the lazy
      </Typography>
      <Logo />
      <Button variant="contained" color="primary" onClick={login}>
        Subscribe
      </Button>
    </EmptyTemplate>
  );
};

export default PublicPage;
