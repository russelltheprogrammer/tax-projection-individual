import { combineReducers } from "redux";
import quarterReducer from "./quarterReducer";

const rootReducer = combineReducers({
    quarter: quarterReducer
});

export default rootReducer;