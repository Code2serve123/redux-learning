import { createStore } from "redux";
import { productReducer } from "./reducer/productReducer";

const store = createStore(
  // Linking to redux
  // the productReducer is linked to the store
  productReducer,
  // As, a result of this "productReducer" will have access to "state" and "action" .
);

export default store;

// "store.js" banaake provide kara denge. Uske baad andar ke internals ka kuch concept dekhna padega. Those things take time.
// According to Manas Bhai, ek cheez se hum azaad ho chuke hai ki : "provide" baad mein nahi karaana hai, directly hum use kar saktein hai.

// store.js mein kya hoga ? reducer
// reducer kya manage kar raha hoga ?
// reducer ke liye reducer wala folder banaunga, aur reducer waalein folder mein, main saare reducers rakh doonga .

// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
