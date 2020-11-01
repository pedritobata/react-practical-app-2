import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL
} from "../constants/userConstants";
import { put } from 'redux-saga/effects';
import { userAuth, signUp } from '../actions/userActions';

function* userAuthSaga(action) {
    yield put({type: USER_AUTH_REQUEST});
}

function* signUpSaga(action){
  yield put({type: USER_SIGNUP_REQUEST});
  
}
