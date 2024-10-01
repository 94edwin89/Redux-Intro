import { applyMiddleware, combineReducers, createStore } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import CreateCustomer from "./features/cutomers/customerSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: AccountReducer,
  customer: CreateCustomer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
