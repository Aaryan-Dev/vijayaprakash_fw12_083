export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const USER_ID = "USER_ID";

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const userId = (payload) => ({
  type: USER_ID,
  payload,
});
