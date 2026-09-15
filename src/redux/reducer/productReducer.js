// Jai Ma Shri Radhe

// this is the standard that is followed for :
const initialState = {
  products: [],
};

export const addToProduct = () => {
  // without dispatch, nothing will effectively happen.
  return {
    type: "ADD_TO_PRODUCT",
    payload: "",
  };
};
// ----------- Process to keep in mind as said by Manas bhai ----------
// Youtube 38:22 --> Reducer ko run karaane ka ek hi tarika hai ki upar mein jo tumne, actions { addToProduct mein } likhe hai with return, usko dispatch karo.

// Toh actions ke liye hum yaha nahi banayenge, toh actions ke liye alag se folder banaake waha bana denge.
// ------------------------------------------------

// Since, the "productReducer" is linked to the store, the productReducer is now not a normal function, but has become a reducer.

/*
  > Jabh tak productReducer ko link nahi kiya tha, tabh tak yeh ek normal function thaa.
  > store.js mein main productReducer ko store ke saath connect kar diya.
  > So, this "productReducer" is now not a "normal function", it has become a "reducer".
*/

/*
  > Manas bhai told :
  > We will do "named export" of "productReducer".
  > Keep in mind, we did not give any export default <filename.js> in this "productReducer" file at the end.
  > We are using named export here.
*/

/* Process to keep in mind :
  > That we pass "initialState" in the "state" arguement.
*/

export const productReducer = (state = initialState, action) => {
  /*
    > We have given, "default value" of "state" as an "empty array" ie. [] like : export const productReducer = (state = [], action) => { ... ...  }. The first parameter is the "state" and the second parameter is the "action". We can give any name like "myState" or "myReducer" etc, but dhyaan yeh rakhna ki pehla wala "state" hai, aur dusra wala "action" hai.

    > Manas bhai told : "productReducer" ke paas "state" aur "action" hai ka access hai, aur yaha pe sabh kaam hota hai. Here, using if statement or switch case statement, we can perform different actions based on the "type" of the "action".

    > see : hence, we used "action.type" to perform different actions based on the "type" of the "action".
  */

  /*
    > Manas bhai changed the parameter state to state = initialState.
    > Process : We just wrote above : That we pass "initialState" in the "state" arguement.
  */

  /*
    > We can either use if-else or switch-case. Manas bhai prefers if-else, I am using switch-case here.
    > action is a plain JS object, hence, we get a property called "type" inside it. We can use "action.type" to perform different actions based on the "type" of the "action".
    > Although, we have not made action, but we know that action is a plain JS object, hence, we get a property called "type" inside it.
    > Manas bhai told that we get "payload" from action, like "action.payload" .
  */

  switch (action.type) {
    // We write in "uppercase" letters about the "type" of the "action".
    case "ADD_TO_PRODUCT": {
      /*
        > As a result of this, a product will be added to product cart.
        > basically state mein add karna hai.
        > Remember : here, we need to perform return here.
      */
      console.log("add to product reducer");

      // Manas Bhai told, that we need to do return, nahi toh state disturbed ho jayega. Yaha pe woh merge wala concept nahi hai. In Zustand, there was merge thing, but we also needed to do return in zustand, if we did not do anything.

      // jo bhi state return karenge, woh initialState mein set hoga. In our case initialState is { products: [], }.
      return state;

      /* return of the state :
        > Here, whatever state we will "return" here, will get set in the "initialState".
        > Even, if we do not return anything in any case(s), please ensure to put a return statement inside the "default case".
      */
    }
    case "GET_PRODUCT":
      return action.payload;
    default: {
      return state;
      // The state that is returned here, will come in App.jsx, till the time, action ka type ke saath match nahi hota. In coding perspective, that will come when ?
      // App.jsx :-- console.log("state :", state);
    }
  }
};

// If we notice, we did not give any export default <filename.js> in the "productReducer" file.

// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
