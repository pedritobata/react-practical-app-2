import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { watchAuth , watchEbayAuth} from './sagas/index';
import { signUpReducer , userAuthReducer, userLoginListenerReducer} from './reducers/userReducers';
import {  basketReducer} from './reducers/basketReducers';

const rootReducer = combineReducers({
    signUp: signUpReducer,
    userAuth: userAuthReducer,
    userLoginListener: userLoginListenerReducer,
    basket: basketReducer,
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

//const initialState = {};

const store = createStore(rootReducer,/* initialState ,*/ composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchEbayAuth);

export default store;