import { combineReducers, createStore } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import CreateCustomer  from "./features/cutomers/customerSlice";



const rootReducer = combineReducers({
  account: AccountReducer,
  customer: CreateCustomer,
});

const store = createStore(rootReducer);


export default store;