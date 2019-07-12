import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import {
  Link,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Icon
} from "@material-ui/core";
import { LoginForm, SignupForm } from "components";
import { LoginData, SignupData } from "types";
import { User } from "models";

interface Props {
  className?: string;
  total: number;
  error?: string | null;
  user: User | null;
  onLogin: (data: LoginData) => Promise<any>;
  onSignup: (data: SignupData) => Promise<any>;
  onLogout: () => void;
}

const TopBarComponent = ({
  user = null,
  total = 0,
  error = null,
  onLogin,
  onSignup,
  onLogout,
  ...rest
}: Props) => {
  const classes = useStyles();
  const className = cx(classes.root, rest.className);
  const [dialog, setDialog] = React.useState(0);

  return (
    <div>
      <div {...rest} className={className}>
        {!user ? (
          <Typography variant="h4">
            Hi! <Link onClick={() => setDialog(1)}>Sign in</Link> or{" "}
            <Link onClick={() => setDialog(2)}>Register</Link>
          </Typography>
        ) : (
          <Typography variant="h4">
            Hi <Link onClick={onLogout}>{user.name}!</Link>
          </Typography>
        )}
        <Typography variant="h4">
          Your bag: <b>£{Math.round(total * 100) / 100}</b>
        </Typography>
      </div>
      <Dialog classes={{ paper: classes.dialog }} open={dialog === 1} onClose={() => setDialog(0)}>
        <DialogTitle>
          <Typography variant="h2" align="center" component="div">
            Sign In
          </Typography>
          {error && (
            <Typography align="center" className={classes.danger}>
              {error}
            </Typography>
          )}
          <IconButton
            aria-label="Close"
            onClick={() => setDialog(0)}
            className={classes.closeButton}>
            <Icon>close</Icon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <LoginForm
            onSubmit={data =>
              onLogin(data).then(res => {
                setDialog(0);
                return res;
              })
            }
          />
        </DialogContent>
      </Dialog>
      <Dialog classes={{ paper: classes.dialog }} open={dialog === 2} onClose={() => setDialog(0)}>
        <DialogTitle>
          <Typography variant="h2" align="center" component="div">
            Sign Up
          </Typography>
          {error && (
            <Typography align="center" className={classes.danger}>
              {error}
            </Typography>
          )}
          <IconButton
            aria-label="Close"
            onClick={() => setDialog(0)}
            className={classes.closeButton}>
            <Icon>close</Icon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <SignupForm
            onSubmit={data =>
              onSignup(data).then(res => {
                setDialog(0);
                return res;
              })
            }
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TopBarComponent;
