const initialState = "NONE";

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGERESIDENCY":
            return state = action.payload;
        default:
            return state;

    }
}

export default reducer;