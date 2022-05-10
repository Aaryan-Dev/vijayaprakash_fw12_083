import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from "./action";

const initState = {
  username: "",
  token: "",
  loading: false,
  error: false,
  isAuthenticated: false,
};

export const loginReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...store,
        loading: false,
        isAuthenticated: true,
        username: payload.username,
        token: payload.token,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...store,
        username: "",
        token: "",
        isAuthenticated: false,
        error: true,
        loading: false,
      };
    default:
      return store;
  }
};
