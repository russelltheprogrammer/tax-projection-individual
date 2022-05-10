import { combineReducers } from "redux";
import quarterReducer from "./quarterReducer";
import filingStatusReducer from "./filingStatusReducer";
import standardReducer from "./standardReducer";
import dependentsReducer from "./dependentsReducer";
import residencyReducer from "./residencyReducer";
import numbersInputReducer from "./numbersInputReducer";
import paymentsInputReducer from "./paymentsInputReducer";


const rootReducer = combineReducers({
    quarter: quarterReducer,
    filingStatus: filingStatusReducer,
    standard: standardReducer,
    dependents: dependentsReducer,
    residency: residencyReducer,
    numbersInputValues: numbersInputReducer,
    paymentsInputValues: paymentsInputReducer
});

export default rootReducer;