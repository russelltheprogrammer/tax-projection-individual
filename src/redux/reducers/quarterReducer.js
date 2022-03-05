const initialState = 1;

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "1":
            state = action.payload;
            break;
        case "2":
            state = action.payload;
            break;
        case "3":
            state = action.payload;
            break;
        case "4":
            state = action.payload;
            break;
        default:
            return state;
    };
}

export default reducer;