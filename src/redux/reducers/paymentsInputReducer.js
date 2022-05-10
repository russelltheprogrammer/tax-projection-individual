import { paymentsInputInitialState } from "../../constants";

const initialState = paymentsInputInitialState;

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGEPAYMENTSINPUT":
            return state = action.payload;
        default:
            return state;
    };
}

export default reducer;