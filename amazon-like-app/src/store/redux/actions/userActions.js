import { USER_AUTH , USER_SIGNUP, USER_LOGIN_LISTENER} from '../constants/userConstants';

export const userAuth = (email,password) => {
    return {
       type : USER_AUTH,
       email,
       password
    };
}

export const signUp = (email,password) => {
    return {
        type: USER_SIGNUP,
        email,
        password
    }
    
}

export const userSigninListener = () => {
    return {
        type: USER_LOGIN_LISTENER
    }
}