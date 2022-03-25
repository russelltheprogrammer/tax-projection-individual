import { combineReducers } from "redux";
import quarterReducer from "./quarterReducer";
import filingStatusReducer from "./filingStatusReducer";
import standardReducer from "./standardReducer";
import dependentsReducer from "./dependentsReducer";
import residencyReducer from "./residencyReducer";
import qbiReducer from "./qbiReducer";

const rootReducer = combineReducers({
    quarter: quarterReducer,
    filingStatus: filingStatusReducer,
    standard: standardReducer,
    dependents: dependentsReducer,
    residency: residencyReducer,
    qbi: qbiReducer
});

export default rootReducer;