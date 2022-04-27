import { combineReducers } from "redux";
import quarterReducer from "./quarterReducer";
import filingStatusReducer from "./filingStatusReducer";
import standardReducer from "./standardReducer";
import dependentsReducer from "./dependentsReducer";
import residencyReducer from "./residencyReducer";
import numbersInputReducer from "./numbersInputReducer";


const rootReducer = combineReducers({
    quarter: quarterReducer,
    filingStatus: filingStatusReducer,
    standard: standardReducer,
    dependents: dependentsReducer,
    residency: residencyReducer,
    numbersInputValues: numbersInputReducer
});

export default rootReducer;