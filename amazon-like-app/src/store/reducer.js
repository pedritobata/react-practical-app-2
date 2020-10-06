export const initialState = {
    basket: [],
    user: null
}

export const basketTotal = basket => basket.reduce((amount, item) => amount + item.price, 0);


export const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [ ...state.basket ,action.item]
            }
        case "REMOVE_FROM_BASKET":

            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
}