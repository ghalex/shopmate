import * as React from "react";
import cx from "classnames";
import useStyles from "./styles";
import { Link, Typography } from "@material-ui/core";
import { LoginForm, SignupForm, DialogForm } from "components";
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
  onClearError: () => void;
}

const TopBarComponent = ({
  user = null,
  total = 0,
  error = null,
  onLogin,
  onSignup,
  onLogout,
  onClearError,
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
            Hi <Link onClick={onLogout}>{user.name}!, logout</Link>
          </Typography>
        )}
        <Typography variant="h4">
          Your bag: <b>£{Math.round(total * 100) / 100}</b>
        </Typography>
      </div>
      <DialogForm
        title="Sign In"
        error={error}
        open={dialog === 1}
        onClose={() => setDialog(0)}
        onEnter={onClearError}>
        <LoginForm
          onSubmit={data =>
            onLogin(data).then(res => {
              setDialog(0);
              return res;
            })
          }
        />
      </DialogForm>
      <DialogForm
        title="Sign Up"
        error={error}
        open={dialog === 2}
        onClose={() => setDialog(0)}
        onEnter={onClearError}>
        <SignupForm
          onSubmit={data =>
            onSignup(data).then(res => {
              setDialog(0);
              return res;
            })
          }
        />
      </DialogForm>
    </div>
  );
};

export default TopBarComponent;
