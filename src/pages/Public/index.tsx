import * as React from "react";
import { SimpleTemplate } from "templates";
import { RouteComponentProps, Link } from "@reach/router";
import { Button, Typography, Box } from "@material-ui/core";
import { Logo, Navigation } from "components";
import auth from "ducks/auth";

type PageProps = RouteComponentProps & {};

const PublicPage = (props: PageProps) => {
  const login = () => auth.login({ email: "ghalex@gmail.com", password: "123456" });

  return (
    <SimpleTemplate>
      <Navigation />
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
        Click to Login
      </Button>
    </SimpleTemplate>
  );
};

export default PublicPage;
