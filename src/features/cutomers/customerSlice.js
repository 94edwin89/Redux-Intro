const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: "",
  };
  
  
  
  export default function CustomerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
      case "customer/createCustomer":
        return {
          ...state,
          fullName: action.payload.fullName,
          nationalID: action.payload.nationalID,
          createAt: action.payload.createAt,
        };
      case "customer/updateName":
        return {
          ...state,
          fullName: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  
  // store.dispatch({ type: "account/deposit", payload: 500 });
  // store.dispatch({ type: "account/withdraw", payload: 200 });
  
  // store.dispatch({
  //   type: "acount/requestLoan",
  //   payload: 1000,
  //   purpose: "Buy a car",
  // });
  
  // store.dispatch({type:'acount/payLoan'})
  
  
  
  export function CreateCustomer(fullName, nationalID) {
    return {
      type: "customer/createCustomer",
      payload: { fullName, nationalID, createdAt: new Date().toISOString() },
    };
  }
  
  export function updateName(fullName) {
    return { type: "customer/updateName", payload: fullName };
  }
  