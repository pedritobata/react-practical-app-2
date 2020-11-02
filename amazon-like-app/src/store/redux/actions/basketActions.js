import { ADD_TO_BASKET, REMOVE_FROM_BASKET, EMPTY_BASKET } from '../constants/basketConstants';

export const emptyBasket = () => {
    return {
        type: EMPTY_BASKET
    }
}

export const addToBasket = (item) => {
    return {
        type: ADD_TO_BASKET,
        item: item
    }
}

export const removeFromBasket = (id) => {
    return {
        type: REMOVE_FROM_BASKET,
        id: id
    }
}