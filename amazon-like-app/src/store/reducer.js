export const initialState = {
    basket: [{
        id: Math.random(),
        title: "Samsung Galaxy A20S w/Triple Cameras (32GB, 3GB RAM) 6.5\" Display, Snapdragon 450, 4000mAh Battery, US & Global 4G LTE GSM Unlocked A207M/DS - International Model (Black, 32GB + 64GB SD Bundle)",
        image: "https://images-na.ssl-images-amazon.com/images/I/31DVClA7BaL._AC_.jpg",
        price: 189.00,
        rating: 5
    },],
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