import { AUTH_USER_SOCIAL, SIGN_OUT } from "../actionsTypes/index.js";

import { Map } from "immutable";

export default function(
  state = Map({ user: null, authenticated: false, error: "" }),
  action
) {
  console.log(action)
  switch (action.type) {
    case AUTH_USER_SOCIAL: {
      console.log("reducer auth", action)
      return state.merge({
        authenticated: true,
        user: Map(action.payload),
        error: ""
      });
    }

    case SIGN_OUT: {
      return state.merge({
        authenticated: false,
        user: null,
        error: ""
      });
    }

    // case AUTH_ERROR:
    // 	return state.set('error', action.payload);

    default:
      return state;
  }
}
