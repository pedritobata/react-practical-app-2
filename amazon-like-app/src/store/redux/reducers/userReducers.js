import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
  USER_AUTH_RESET,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_RESET,
  USER_LOGIN_LISTENER_REQUEST,
  USER_LOGIN_LISTENER_SUCCESS,
  USER_LOGIN_LISTENER_FAIL,
} from "../constants/userConstants";


export const signUpReducer = (state = {loading: true}, action) => {
  switch(action.type){
    case USER_SIGNUP_REQUEST:
      return {
        loading: true
      };
    case USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        success: true
      };
    case USER_SIGNUP_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case USER_SIGNUP_RESET:
      return {
        // loading: true,
        error: null,
        success: false
      }
    default:
      return state;
  }
};

export const userAuthReducer = (state = {loading: true}, action) => {
  switch(action.type){
    case USER_AUTH_REQUEST:
      return {
        loading: true
      };
    case USER_AUTH_SUCCESS:
      return {
        loading: false,
        success: true
      };
    case USER_AUTH_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    case USER_AUTH_RESET:
      return {
        // loading: true,
        error: null,
        success: false
      };
    default:
      return state;
  }
};

export const userLoginListenerReducer = (state = { user : {}, unsubscribe: () => {}}, action) => {
  switch(action.type){
    case USER_LOGIN_LISTENER_REQUEST:
      return {
        loading: true
      };
    case USER_LOGIN_LISTENER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        unsubscribe: action.unsubscribe
      };
    case USER_LOGIN_LISTENER_FAIL:
      return {
        loading: false,
        error: action.payload,
        unsubscribe: action.unsubscribe
      };
    default:
      return state;
  }
};
