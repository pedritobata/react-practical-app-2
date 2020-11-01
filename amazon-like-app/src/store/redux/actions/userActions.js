import { USER_AUTH , USER_SIGNUP} from '../constants/userConstants';

export const userAuth = (email,password) => {
    return {
       type : USER_AUTH,
       payload: {email,password}
    };
}

export const signUp = (email,password) => {
    return {
        type: USER_SIGNUP,
        payload: {email,password}
    }
    
}