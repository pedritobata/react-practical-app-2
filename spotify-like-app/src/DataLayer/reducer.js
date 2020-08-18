
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: ""//"BQBLoCaUIXIWP38agKCTjkhXqS12Sd0eZILfi6Xu4EY2yxbv8S…gNzMxwz7Uid_-p3dZ3NPOufT4QBjXldHYhgTHnjYeljAI4uS5"
}

const reducer = (state, action) => {
    console.log('action:', action);

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            };
        default:
            return state;
    }
}

export default reducer;