import { createDomain } from "effector";
import { User } from "models";
import { LoginData, SignupData } from "types";
import api from "api";

const domain = createDomain("customer");

// effects
const login = domain.effect<LoginData, User, any>("login").use(data => {
  return api.customer.login(data);
});

const signup = domain.effect<SignupData, User, any>("signup").use(data => {
  return api.customer.signup(data);
});

const logout = domain.effect<void, null, any>("logout").use(() => {
  return api.customer.logout();
});

const fetch = domain.effect<void, User | null, any>("fetch").use(() => {
  return api.customer.fetch();
});

const clearError = domain.event("clear error");

// stores
export const $current = domain.store<User | null>(null);
export const $busy = domain.store(false);
export const $error = domain.store<string | null>(null);

$current
  .on(login, () => null)
  .on(login.done, (state, { result: user }) => user)
  .on(signup, () => null)
  .on(signup.done, (state, { result: user }) => user)
  .on(fetch, () => null)
  .on(fetch.done, (state, { result: user }) => user)
  .on(logout, () => null);

$busy.on(fetch, () => true).on(fetch.done, () => false);

$error
  .on(login, () => null)
  .on(signup, () => null)
  .on(login.fail, (state, { error }) => {
    const json = JSON.parse(error.message).error;
    return json.message as string;
  })
  .on(signup.fail, (state, { error }) => {
    const json = JSON.parse(error.message).error;
    return json.message as string;
  })
  .reset(clearError);

// exports
export default {
  $current,
  $busy,
  $error,
  login,
  signup,
  logout,
  fetch,
  clearError
};
