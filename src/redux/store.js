import { createStore, applyMiddleware } from "redux";
import reducersMaster from "./reducers/reducersMaster";
import thunk from "redux-thunk";

export const store = createStore(
    reducersMaster,
    {},
    applyMiddleware(thunk)
);