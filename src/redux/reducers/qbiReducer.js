const initialState = "NO";

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGEQBI":
            return state = action.payload;
        default:
            return state;

    }
}

export default reducer;