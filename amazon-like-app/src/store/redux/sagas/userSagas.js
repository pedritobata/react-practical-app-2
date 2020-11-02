import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_LISTENER_REQUEST,
  USER_LOGIN_LISTENER_SUCCESS,
  USER_LOGIN_LISTENER_FAIL
} from "../constants/userConstants";
import { put } from 'redux-saga/effects';
import { auth } from '../../../firebase';

export function* userAuthSaga(action) {
    yield put({type: USER_AUTH_REQUEST});
    try{
      yield auth.signInWithEmailAndPassword(action.email, action.pass);
      yield put({type: USER_AUTH_SUCCESS});
    }catch(error){
      yield put({type: USER_AUTH_FAIL, payload: error});
    }
    
}

export function* signUpSaga(action){
  yield put({type: USER_SIGNUP_REQUEST});
  try{
    yield auth.createUserWithEmailAndPassword(action.email,action.password)
    yield put({type: USER_SIGNUP_SUCCESS});
  }catch(error){
    yield put({type: USER_SIGNUP_FAIL, payload: error});
  }
  
}

export function* userSigninListenerSaga(action){
  yield put({type: USER_LOGIN_LISTENER_REQUEST});
  try{
    const unsubscribe = yield auth.onAuthStateChanged((user) => {
      if (user) {
        put({type: USER_LOGIN_LISTENER_SUCCESS, payload: user, unsubscribe});
      } else {
        put({type: USER_LOGIN_LISTENER_SUCCESS, payload: null, unsubscribe});
      }
    });
    
  }catch(error){
    yield put({type: USER_LOGIN_LISTENER_FAIL, payload: error});
  }
  
}
