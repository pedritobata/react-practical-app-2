import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
} from "../constants/userConstants";
import { put } from 'redux-saga/effects';
import { userAuth } from '../actions/userActions';

function* userAuthSaga(action) {
    yield put({type: USER_AUTH_REQUEST});
}
