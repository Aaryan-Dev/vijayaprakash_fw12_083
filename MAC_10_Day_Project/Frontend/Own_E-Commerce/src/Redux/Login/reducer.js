import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, USER_ID } from "./action";

const initState = {
  username: "",
  token: "",
  userid: "",
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
        userid: payload.userid,
        isAuthenticated: true,
        username: payload.username,
        token: payload.token,
        error: false,
      };
    case USER_ID:
      // console.log("payload", payload);
      return { ...store, userid: payload.userid };
    case LOGIN_FAILURE:
      return {
        ...store,
        username: "",
        token: "",
        userid: "",
        isAuthenticated: false,
        error: true,
        loading: false,
      };
    default:
      return store;
  }
};
