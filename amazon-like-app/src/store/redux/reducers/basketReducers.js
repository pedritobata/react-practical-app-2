import { EMPTY_BASKET, ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../constants/basketConstants';

export const basketTotal = basket => basket.reduce((amount, item) => amount + item.price, 0);


export const basketReducer = (state = {basket : []}, action) => {
    switch(action.type){
        case EMPTY_BASKET:
            return {
                ...state,
                basket: []
            }
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [ ...state.basket ,action.item]
            }
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
}