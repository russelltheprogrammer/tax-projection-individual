import { configureStore } from "@reduxjs/toolkit";
import quarterReducer from "./quarter";

export default configureStore({
    reducer: {
        quarter: quarterReducer,
    },
});