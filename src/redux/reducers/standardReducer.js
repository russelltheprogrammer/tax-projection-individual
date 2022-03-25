const initialState = "STANDARD";

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGESTANDARD":
            return state = action.payload;
        default:
            return state;
    };
}

export default reducer;