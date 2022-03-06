const initialState = 1;

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGEQUARTER":
            state = action.payload;
            break;
        default:
            return state;
    };
}

export default reducer;