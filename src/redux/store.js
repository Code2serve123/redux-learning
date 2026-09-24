import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducer/cartReducer";
import { productReducer } from "./reducer/productReducer";

// For combining reducers, we can use the "combineReducers" function.
const rootReducer = combineReducers({
  /*  Its like a key-value pair :
    {
      productReducer : productReducer,
      cartReducer : cartReducer
    }
  */
  // its a short hand way of writing :
  // { productReducer: productReducer, cartReducer : cartReducer }
  productReducer,
  cartReducer,
});

// > Syntax of createStore : first parameter is the "rootReducer", second parameter is the middlewares which we attach.
const store = createStore(rootReducer);

/* Earlier approach : 
    > Linking to redux
    > The productReducer is linked to the store
    > productReducer,
    > As, a result of this "productReducer" will have access to "state" and "action".
  */

/* Approach for createStore() :---
    > We cannot follow the approch :
    > Here, we have added another reducer.
    > In createStore(), the second parameter is a middleware. Also, we cannot think that cartReducer can be added like this. The second parameter is a middleware.
  */
// We cannot give cartReducer as the second parameter, as it is not a middleware.
// cartReducer,

export default store;

// "store.js" banaake provide kara denge. Uske baad andar ke internals ka kuch concept dekhna padega. Those things take time.
// According to Manas Bhai, ek cheez se hum azaad ho chuke hai ki : "provide" baad mein nahi karaana hai, directly hum use kar saktein hai.

// store.js mein kya hoga ? reducer
// reducer kya manage kar raha hoga ?
// reducer ke liye reducer wala folder banaunga, aur reducer waalein folder mein, main saare reducers rakh doonga .

// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
