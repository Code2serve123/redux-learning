/* Migration of "productAction.js"
  > I have migrated this part of code from productReducer.js to this file named as : "productAction.js"
  > We will use the details parameter here, to pass the "description" of the product in the payload.
  > data in details parameter comes from the "addToProduct" function call that happens via the useDispatch function call inside onClick handler function with the button that states "Click".
*/
export const addToProduct = (details) => {
  // without dispatch, nothing will effectively happen.
  return {
    type: "ADD_TO_PRODUCT",

    // We pass "description" via "payload".
    // Let say we give a description of "Laptop" in the "payload".
    // payload: "Laptop",

    // details is used as :- "parameter"
    payload: details,
  };
};

// Similar to this we will have a new function, named as increament :

// Here, Manas bhai said, that no need of details as parameter
export const increament = () => {
  // without dispatch, nothing will effectively happen.
  return {
    type: "INCREMENT",

    // > Here no need of payload.
    // payload: details,
  };
};

// In this way we can do : delete product, filter product etc.
// During project making phase, these things will get revised.

// Jai Ma Shri Radhe
