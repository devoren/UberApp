import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import common from "./common";
import navigator from "./navigator";
const rootReducer = combineReducers({
	navigator,
	common,
});

export type State = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(thunk));
