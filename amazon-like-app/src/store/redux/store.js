import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { watchAuth , watchEbayAuth, watchLoadEbaySuperCategories, watchLoadEbayItemsCarousel} from './sagas/index';
import { signUpReducer , userAuthReducer, userLoginListenerReducer} from './reducers/userReducers';
import {  basketReducer} from './reducers/basketReducers';
import {  authEbayReducer, authEbayAccessReducer, loadEbaySuperCategoriesReducer, loadEbayItemsCarouselReducer} from './reducers/ebayReducers';

const rootReducer = combineReducers({
    signUp: signUpReducer,
    userAuth: userAuthReducer,
    userLoginListener: userLoginListenerReducer,
    basket: basketReducer,
    authEbay: authEbayReducer,
    authEbayAccess: authEbayAccessReducer,
    ebaySuperCategories: loadEbaySuperCategoriesReducer,
    loadEbayItemsCarousel: loadEbayItemsCarouselReducer,
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

const userAccessToken = localStorage.getItem("authToken") || "";
//console.log("userAccessToken",userAccessToken);

const initialState = {
    authEbayAccess: {
        authToken: userAccessToken

    }
};

const store = createStore(rootReducer, initialState , composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchEbayAuth);
sagaMiddleware.run(watchLoadEbaySuperCategories);
sagaMiddleware.run(watchLoadEbayItemsCarousel);

export default store;