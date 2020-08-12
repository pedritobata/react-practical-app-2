
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQDx8qexWeTiu2-DD23gAiwuYwatPSBLEqALP-POmegaSza5TY2DaSnIMOXK3W807hKHY_Vh9_Vw8TumpRPzqia63Lg1Fqxak40CTZ1yqYmYzx_K-WIYGGP6j3iPDv0vcj3K7fAnBr6gRtgbbA5933Og8yUsQuEgwinq-lhiKwy-7xFwGMDd"
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
        default:
            return state;
    }
}

export default reducer;