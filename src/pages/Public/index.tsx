import * as React from "react";
import { SimpleTemplate } from "templates";
import { Button, Typography, Box } from "@material-ui/core";
import { Logo, Navigation } from "components";

import auth from "ducks/auth";

const PublicPage = (props: any) => {
  const login = () => auth.login({ email: "ghalex@gmail.com", password: "123456" });

  return (
    <SimpleTemplate>
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
      <Box border={1} color="primary.main" p={2} m={2}>
        Button
      </Box>
      <Logo />
      <Button variant="contained" color="primary" onClick={login}>
        Subscribe
      </Button>
    </SimpleTemplate>
  );
};

export default PublicPage;
