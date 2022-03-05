import { combineReducers } from "redux";
import quarterReducer from "./quarterReducer";

const reducersMaster = combineReducers({
    quarter: quarterReducer
});

export default reducersMaster;