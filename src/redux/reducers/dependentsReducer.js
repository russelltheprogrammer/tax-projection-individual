const initialState = 1;

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGEDEPENDENTS":
            return state = action.payload;
        default:
            return state;
    };
}

export default reducer;