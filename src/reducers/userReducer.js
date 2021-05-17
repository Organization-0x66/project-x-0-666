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

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { msg: 'register action doing' }
		case USER_REGISTER_SUCCESS:
			return { msg: ' register success too' }
		case USER_REGISTER_ERROR:
			return {}
		default:
			return state
	}
}

export const userSigninReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_SIGNIN_REQUEST:
			return { msg: 'sign in action doing' };
		case USER_SIGNIN_SUCCESS:
			console.log('hola');
			return { msg: 'success carajo' };
		case USER_SIGNIN_ERROR:
			return { msg: 'error' };
		default:
			return state;
	}
}

export const userSignoutReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_SIGNOUT_REQUEST:
			console.log('signout action doing');
			return {
				msg: 'signout action doing',
				...state,
			}
		case USER_SIGNOUT_SUCCESS:
			return {}
		case USER_SIGNOUT_ERROR:
			return {}
		default:
			return state
	}
}

