import { AUTH_USER_SOCIAL, SIGN_OUT } from "../actionsTypes/index.js";
import { history } from "../history/history";

export function authUserSocial(userData) {
  console.log("action");
  return {
    type: AUTH_USER_SOCIAL,
    payload: userData
  };
}

export function signOut() {
  history.push("/");
  return {
    type: SIGN_OUT
  };
}
