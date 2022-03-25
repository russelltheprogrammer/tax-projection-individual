const initialState = "SINGLE";

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGEFILINGSTATUS":
            return state = action.payload;
        default:
            return state;
    };
}

export default reducer;