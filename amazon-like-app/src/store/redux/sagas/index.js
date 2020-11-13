import { takeEvery } from 'redux-saga/effects';
import { USER_AUTH ,USER_SIGNUP, USER_LOGIN_LISTENER} from '../constants/userConstants';
import { AUTH_EBAY, LOAD_EBAY_SUPER_CATEGORIES } from '../constants/ebayConstants';
import { signUpSaga ,userAuthSaga, userSigninListenerSaga} from './userSagas';
import { authEbaySaga, loadEbaySuperCategoriesSaga } from './ebaySagas';


export function* watchAuth(){
    yield takeEvery(USER_SIGNUP, signUpSaga);
    yield takeEvery(USER_AUTH, userAuthSaga);
    yield takeEvery(USER_LOGIN_LISTENER, userSigninListenerSaga);
}

export function* watchEbayAuth(){
    yield takeEvery(AUTH_EBAY, authEbaySaga);
}

export function* watchLoadEbaySuperCategories(){
    yield takeEvery(LOAD_EBAY_SUPER_CATEGORIES, loadEbaySuperCategoriesSaga);
}