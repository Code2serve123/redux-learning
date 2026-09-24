import { useSelector } from "react-redux";

// "Counter.jsx" is inspired "Products.jsx"
const Counter = () => {
  /* Selectively take subscription of whatever state we need.
    > Hence, we need to selectively take subscription of whatever state we need. Here, we are taking subscription of the "count" state only. Hence, when there will be change in the "count" state, then this component will re-render, and all the other states will not get re-rendered.
  */

  const count = useSelector((state) => {
    // We are using the piece of state we need.
    return state.productReducer.count;

    /*
      > Link : https://chatgpt.com/g/g-p-6aa3f7126bd881919bcabc4a9dff1154/c/6ab25564-5a78-83e8-b141-0a548886fb77

      > Earlier, it was like the below : return state.count, since there is a return statement above, hence the below return statement will not get executed.
    */

    return state.count;
  });

  console.log("Counter rendered");

  return <div>Count : {count}</div>;
};
export default Counter;
