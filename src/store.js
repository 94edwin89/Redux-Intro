import AccountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/cutomers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer:{
    account:AccountReducer,
  customer: CustomerReducer
  }
})

export default store;
