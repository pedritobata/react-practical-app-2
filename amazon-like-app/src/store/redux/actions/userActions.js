import { USER_AUTH } from '../constants/userConstants';

export const userAuth = (email,password) => {
    return {
       type : USER_AUTH,
       payload: {email,password}
    };
}