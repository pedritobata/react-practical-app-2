import { takeEvery } from 'redux-saga/effects';
import { USER_AUTH ,USER_SIGNUP, USER_LOGIN_LISTENER} from '../constants/userConstants';
import { signUpSaga ,userAuthSaga, userSigninListenerSaga} from './userSagas';


export function* watchAuth(){
    yield takeEvery(USER_SIGNUP, signUpSaga);
    yield takeEvery(USER_AUTH, userAuthSaga);
    yield takeEvery(USER_LOGIN_LISTENER, userSigninListenerSaga);
}