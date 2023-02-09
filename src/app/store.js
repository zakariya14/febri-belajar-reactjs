import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./Features/Counter/reducer";

let rootReducer = combineReducers({
  counter: counterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
