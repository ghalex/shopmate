import * as React from "react";
import { TopBar } from "components";
import { useStore } from "effector-react";
import ducks from "ducks";

const TopBarContainer = (props: any) => {
  const total = useStore(ducks.cart.$total);
  const busy = useStore(ducks.customer.$busy);
  const user = useStore(ducks.customer.$current);
  const error = useStore(ducks.customer.$error);

  React.useEffect(() => {
    ducks.customer.fetch();
  }, []);

  return (
    <>
      {!busy && (
        <TopBar
          user={user}
          total={total}
          error={error}
          onLogin={ducks.customer.login}
          onSignup={ducks.customer.signup}
          onLogout={() => ducks.customer.logout()}
        />
      )}
    </>
  );
};

export default TopBarContainer;
