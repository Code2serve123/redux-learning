import { useSelector } from "react-redux";

// Let say we want to display all the product information here.
const Products = () => {
  /*
    > Here, we have taken subscription of the whole state, so if there is change in the 'count' state, which is there in the global store, poora ka poora component re-renders.

    > Manas bhai said that kisi mein change karo, re-render humesha trigger hoga.

    > Hence, we need to selectively take subscription of whatever state we need.
  */

  // Earlier it was const state, now it is const products
  const products = useSelector((state) => {
    // If we want that products mein change hone pe re-render trigger ho, then we need to take subscription of the "products" state only.

    // https://chatgpt.com/g/g-p-6aa3f7126bd881919bcabc4a9dff1154/c/6ab25564-5a78-83e8-b141-0a548886fb77

    /* Approach :- select the component, only, for which we want to do rendering, on clicking of button related to products.
      > We should make each component subscribe only to the piece of state it actually needs.
      > products mein change hone pe re-render trigger ho, then we need to take subscription of the "products" state only. As a result of this, the re-rendering of Count component will not happen.
      > That is why we use this approach.
    Jai Ma Shri Radhe
    */

    return state.productReducer.products;

    // It printed All the pieces of state.
    return state.productReducer;

    // return state.products;
  });

  console.log("Products rendered");

  return (
    <div className="border-2 rounded-2xl inline-block p-2 m-2">
      <div>Products :</div>

      {/* We can also use map() function to render the products */}
      {/* JSON.stringify()
        We are printing the whole array, hence we are using the JSON.stringify(), because direct array without JSON.stringify() print nahi kar saktein. Either use map() to render in screen in a correct order, or use JSON.stringify() to either render in screen or print in console. 
      */}
      {/* When multiple elements come inside the array, the whole array gets rendered at once. */}
      <div>{JSON.stringify(products)}</div>

      {/* since, we took subscription of products, hence, the "state" or "state.count" will not get rendered. */}
      {/* <div>state.count : {JSON.stringify(state.count)}</div> */}
    </div>
  );
};

export default Products;
