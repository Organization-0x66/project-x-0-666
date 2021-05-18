import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_SIGNOUT_REQUEST,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_ERROR,
} from '../constanst/user'

export const signin = (data) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_SUCCESS, payload: {} });
  // dispatch({ type: USER_SIGNIN_SUCCESS, payload: {} });
  // dispatch({ type: USER_SIGNOUT_REQUEST, payload: {} });
}

// export const signout  = () => {

// }

export const register = () => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: {} });
}