import { type } from "@testing-library/user-event/dist/type";
import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance + action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });

// store.dispatch({
//   type: "acount/requestLoan",
//   payload: 1000,
//   purpose: "Buy a car",
// });

// store.dispatch({type:'acount/payLoan'})

function deposit(amount){
  return{ type: "account/deposit", payload:amount }
}

function withdraw(amount){
  return { type: "account/deposit", payload: amount}
}

function requestLoan(amount, payload){
  return {
      type: "acount/requestLoan",
      payload: amount,
      purpose: payLoad,
    }
}

function payLoad(){
  return {type:'acount/payLoan'}
}