// Jai Ma Shri Radhe

// This is the standard that is followed for :-
const initialState = {
  products: [],
  count: 0,
};

/*
  > I am migrating my this action part of code to "../actions/productActions.js"
  > ----------- We will keep a separate file for actions ----------
*/

/* > migrated to : "../actions/productActions.js" , hence commented the below part of code.
  export const addToProduct = () => {
    >> without dispatch, nothing will effectively happen.
    return {
      type: "ADD_TO_PRODUCT",
      payload: "",
    };
  };
*/
// > ------------ migration happened -----------------

// > ----------- Process to keep in mind as said by Manas bhai ----------
/* Process to keep in mind as said by Manas bhai regarding reducer's run procedure :-
  > Youtube 38:22 --> Reducer ko run karaane ka ek hi tarika hai ki upar mein jo tumne, actions { addToProduct mein } likhe hai with return, usko dispatch karo.

  > Toh actions ke liye hum yaha nahi banayenge, toh actions ke liye alag se folder banaake waha bana denge.
  ------------------------------------------------

  > Since, the "productReducer" is linked to the store, the productReducer is now not a normal function, but has become a reducer.
*/

/* Linking of productReducer to the store :-
  > Jabh tak productReducer ko link nahi kiya tha, tabh tak yeh ek normal function thaa.
  > store.js mein main productReducer ko store ke saath connect kar diya.
  > So, this "productReducer" is now not a "normal function", it has become a "reducer".
*/

/*
  ------------------------------------------------------------
  > Manas bhai told :-
  > We will do "named export" of "productReducer".
  > Keep in mind, we did not give any export default <filename.js> in this "productReducer" file at the end.
  > We are using named-export here.
  ------------------------------------------------------------
*/

/* Process to keep in mind :
  > That we pass "initialState" in the "state" arguement.
*/

// During the first call of the productReducer function, state will be an empty array, as we can see in the initialState being [] and the definition of function : productReducer.

// This state is not React state ? I guess
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
      console.log("add to product reducer");

      // Again we are changing the return statement, to use "spread operator" that too, two times, because the structure of initialState has got changed.

      return {
        ...state,
        products: [...state.products, action.payload],
      };

      // We are changing the code here.
      /*
        > "state.products" se humein puraane jitne saare products thein woh sabh mil jayenge.
      */

      /* Earlier structure of initialState :
        > Because the earlier structure of initialState was :
        export const initialState = {
          products: [],
        };
        > Hence, the return was like the below :
      */

      return {
        /*
          > concept of spread operator is used, and then "action.payload" is used to add on an object { because we are returning an object } with product as key, which is referencing to a new { new array : the reason being, this is the concept of spread operator } array everytime . Everytime a new array will come inside the object. "state" is holding the "object".
          > new product's name and description will come from action.payload.
        */

        products: [...state.products, action.payload],
      };

      // jo bhi state return karenge, woh initialState mein set hoga. In our case initialState is { products: [], }.
      // due to the above return statement, the below return statement has no meaning. Just kept to show : what was our earlier approach while learning.
      return state;

      // As a result we are getting in App.jsx : {products: Array(0)} ie. { products: [] } , means an empty array.

      /* return of the state :-
        > Here, whatever state we will "return" here, will get set in the "initialState".
        > Even, if we do not return anything in any case(s), please ensure to put a return statement inside the "default case".
      */
    }
    case "GET_PRODUCT": {
      return action.payload;

      /* Questions :
        > In case our case is "GET_PRODUCT", we will return the "action.payload". 
        > Q. Why don't we do : return state here ?
        > Ans : We have got the answer while moving ahead with "ADD_TO_PRODUCT" case.
        > We need to build the getProduct function in the "productAction.jsx" file.
        > To deal with return action.payload, we need to build the getProduct function in the way to utilize the "action.payload" in the "productAction.jsx" file.
      */
    }
    case "INCREMENT": {
      // For every switch case, we need to make an action.

      // After taking subscription model, we did the below thing :
      console.log("increment ", state.count + 1);

      return {
        ...state,
        count: state.count + 1,
      };
    }
    default: {
      return state;

      /* Questions :
        > In case our case is "default", we will return the "state".
        > Q. Why don't we do : return action.payload here or Why do we return the "state" here?
      */
      // The state that is returned here, and that will come in App.jsx, till the time, action ka type ke saath match nahi hota. In coding perspective, that will come when ?
      // App.jsx :-- console.log("state :", state);
    }
  }
};

// If we notice, we did not give any export default <filename.js> in the "productReducer" file.

// I have copied one of the case out from the switch block :-

// case "ADD_TO_PRODUCT": {
//       /*
//         > As a result of this, a product will be added to product cart.
//         > basically state mein add karna hai.
//         > Remember : here, we need to perform return here.
//       */
//       console.log("add to product reducer");
//       // We can also show the action.type here, because we are inside the productReducer function, which has parameters as state and "action".
//       console.log(
//         "1. 'action.type' :",
//         action.type,
//         "\n2. data type of 'action.type' :",
//         typeof action.type,
//       );
//       // We can also show the action.payload here.
//       console.log(
//         "1. 'action.payload' :",
//         action.payload,
//         "\n2. data type of 'action.payload' :",
//         typeof action.payload,
//       );

//       /* return of the state :
//         > Manas Bhai told, that we need to do return, nahi toh state disturbed ho jayega. Yaha pe woh merge wala concept nahi hai. In Zustand, there was merge thing, but we also needed to do return in zustand, if we did not do anything.

//         Q. But, tell me why we are returning the state in this switch case, when the case is : "ADD_TO_PRODUCT" ?
//       */
//       // jo bhi state return karenge, woh initialState mein set hoga. In our case initialState is { products: [], }.
//       return state;

//       /* return of the state :
//         > Here, whatever state we will "return" here, will get set in the "initialState".
//         > Even, if we do not return anything in any case(s), please ensure to put a return statement inside the "default case".
//       */
//     }

// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
