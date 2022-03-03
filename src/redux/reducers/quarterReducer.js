const reducer = (state = 1, action) => {
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
            state = 1;
    };
}

export default reducer;