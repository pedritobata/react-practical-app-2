import { takeEvery } from 'redux-saga/effects';
import { USER_AUTH ,USER_SIGNUP, USER_LOGIN_LISTENER} from '../constants/userConstants';
import { AUTH_EBAY, AUTH_EBAY_CONSENT } from '../constants/ebayConstants';
import { signUpSaga ,userAuthSaga, userSigninListenerSaga} from './userSagas';
import { authEbaySaga } from './ebaySagas';


export function* watchAuth(){
    yield takeEvery(USER_SIGNUP, signUpSaga);
    yield takeEvery(USER_AUTH, userAuthSaga);
    yield takeEvery(USER_LOGIN_LISTENER, userSigninListenerSaga);
}

export function* watchEbayAuth(){
    yield takeEvery(AUTH_EBAY, authEbaySaga);
}