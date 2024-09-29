import { combineReducers, createStore } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import CreateCustomer  from "./features/cutomers/customerSlice";



const rootReducer = combineReducers({
  acount: AccountReducer,
  customer: CreateCustomer,
});

const store = createStore(rootReducer);


export default store;