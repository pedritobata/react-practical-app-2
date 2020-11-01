import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    
});
const middleware = [thunk];

//const initialState = {};

const store = createStore(rootReducer,/* initialState ,*/ composeWithDevTools(applyMiddleware(...middleware)));

export default store;