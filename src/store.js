import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {
	userRegisterReducer,
	userSigninReducer,
	userSignoutReducer,
} from './reducers/userReducer';

const initState = {
	/*
			testing data of user signin action
	*/
};

const reducer = combineReducers({
	userRegister: userRegisterReducer,
	userSignin: userSigninReducer,
	userSignout: userSignoutReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;