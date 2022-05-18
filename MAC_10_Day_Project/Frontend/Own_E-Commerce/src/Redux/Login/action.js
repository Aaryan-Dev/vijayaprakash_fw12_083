export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

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

export const login =
  ({ email, password }) =>
  (dispatch) => {
    // console.log(email, password);
    dispatch(loginLoading());
    fetch(`http://localhost:8081/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }), // => De-Structuring the userDetails by {username , password} SAME in "19th Line"
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("UserID", JSON.stringify(res._id));

        dispatch(
          loginSuccess({
            email: res.email,
            userid: res._id,
          }),
        );
      })
      .catch((err) => dispatch(loginFailure()));
  };

// function clearData() {
//   localStorage.clear();
// }
