import { numbersInputInitialState } from "../../constants";

const initialState = numbersInputInitialState;

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGENUMBERSINPUT":
            return state = action.payload;
        default:
            return state;
    };
}

export default reducer;