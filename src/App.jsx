import { useDispatch } from "react-redux";
import "./App.css";
// > Earlier we were doing <import { addToProduct } from "./redux/reducer/productReducer";>,but now we have changed the name of file location.
// > import { addToProduct } from "./redux/reducer/productReducer";
// > Now, the import will happen from "./redux/action/productActions.js"
import { addToProduct, increament } from "./redux/action/productAction";

// We have made Products component in separate file under the src folder.
import Products from "./Products";

import Counter from "./Counter"

function App() {
  /*
    >We will not use the approach of using useState hook to store the state.
    >We are following an approach where a global file is used to store the state, ie. the approach of React-redux.
    > const [count, setCount] = useState(0);
    > React-redux mein state ko use karne ke liye : "useSelector" use karna hai.
    > use of useDispatch hook to make a function named as 'dispatch'.
  */

  const dispatch = useDispatch();

  /* Migrated the code part to Products.jsx file.
    > Please note, if we do not want to show any details of state, then no need to use useSelector hook.
    > useSelector() hook is called.
    > We have taken subscription of the whole state, hence we are getting the below warning and even an error from browser :
  */

  /* Warning in the browser :
    App.jsx:22 Selector unknown returned the root state when called. This can lead to unnecessary rerenders.
    
    Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes. 
    
    Error :
    {stack: 'Error\n    at http://localhost:5173/node_modules/.v…ite/deps/react-dom_client.js?v=35cd753f:14142:12)'}
  */
  // Migrated the code part to Products.jsx file.
  /* Migration :
      const state = useSelector(
      // We need to work on "subscription basis", jaisa ki Manas bhai ne "zustand" mein bataya tha.
      (state) => {
        
          > Without any interference, we can return the full state.
          > As a result of this, the value in const state will have the value of state as in <return state>.
        
      
      return state;
      },
      );
      // We have called the "useSelector" hook, above, using () =>{ return state } as arguement.
      
      // just to see what is the value of state.
      console.log("state :", state);
      // Migrated the above part of code to Products.jsx
      
      // React-redux mein action ke liye : "useDispatch" use karna hai.
    */

  const handleAddToProduct = () => {
    /* > Concept of creation of new inner function and calling it immediately using IIFE, because we want to call the function immediately, as it happens due to the click of button made inside the return statement of App.jsx file.
      > Create this function callback and immediately call it. Why/how immediately call it ? The use of IIFE makes the function call immediately. But, the creation of the function is happens due to the onClick handler with button having : onClick={handleAddToProduct}, as a result of that handleAddToProduct function will be called and that results in creation of IIFE and then calling the IIFE.
      
      > Link : https://chatgpt.com/g/g-p-6aa3f7126bd881919bcabc4a9dff1154-react-redux/c/6aaa6ae3-aecc-83e9-8560-162b4d84ae17
    */

    (() => {
      /* Use of dispathch function is must in React reducer for the addToProduct function to work effectively.
              > We need to use dispatch function, because we need to dispatch an "action" to the "reducer". But for the dispatch function to build, we need to make use of hook via : const dispatch = useDispatch();
              > useDispatch() is the hook which we will use.
      */

      dispatch(
        addToProduct({
          name: "Laptop",
          description: "Laptop Description",
        }),
      );
    })();
    // Calling of IIFE.
  };

  const handleIncrement = () => {
    (() => {
      dispatch(increament());

      // Manas bhai removed the details parameter from the "increament" function in "productAction.js"

      /* Observation :-
        > I did not pass any argument to the "increament" function, unlike we did for addToProduct function.
        > But, still it is working, I thought.
        > By seeing : state : {products: Array(0), count: 1}

        >> Q. What I observed ? If we click just on the button for doing increment in count, it works, but the moment, the click button : Click to increment is clicked/pressed, the count value becomes NaN.
        >> Ans : The moment I clicked on the above button : "Click", the count value became NaN.
        >> state : {products: Array(1), count: NaN}
      */
    })();
  };

  return (
    <div>
      <h1>Jai Ma Shri Radhe</h1>
      <h3 className="text-2xl font-bold bg-blue-200 inline-block p-2 text-blue-400 rounded-2xl">
        Hello Vite
      </h3>
      <br />
      <button
        className="border-2 p-2 rounded-xl border-sky-200 bg-sky-100 hover:bg-sky-300 hover:text-white text-2xl font-medium transition duration-100 ease-in-out mt-2"
        // We are doing "onClick"
        onClick={
          // Inside "onClick" we have done this:- "handleAddToProduct" function's reference is passed to "onClick" handler.

          handleAddToProduct

          // Below things I wrote before making handleAddToProduct function.
          // -----------------------------------------
          // > While learning, I wrote these below, lines, I migrated the only callback inside the onClick handler function, to the handleAddToProduct function.

          /* Manas bhai told :
            > We will pass on reference of "addToProduct" function.
            > That too from : "./redux/reducer/productReducer";
          */

          // > Without dispatch function, nothing will effectively happen, even if we click this button.

          // addToProduct

          // --------- Migration -----------
          // We are even removing the callback from here, and will migrate the callback to handleAddToProduct function.

          /* The following lines of codes are commented after adding the handleAddToProduct function.
            We are commenting this part :
            -------------------------------
            () => {
            Use of dispathch function is must in React reducer for the addToProduct function to work effectively.
              > We need to use dispatch function, because we need to dispatch an "action" to the "reducer". But for the dispatch function to build, we need to make use of hook via : const dispatch = useDispatch();
              > useDispatch() is the hook which we will use.

            -------- commented the above part -------

              dispatch(
                addToProduct({
                  name: "Laptop",
                  description: "Laptop Description",
                }),
              );
            }

            Or, we can make a callback function and call the "addToProduct" function from the callback function.
          */

          /* Callback function.
          ()=>{
            addToProduct();
          }
          */
          // -----------------------------------------
        }
      >
        Click
      </button>

      <br />

      <button
        className="border-2 p-2 rounded-xl border-sky-200 bg-sky-100 hover:bg-sky-300 hover:text-white text-2xl font-medium transition duration-300 ease-in-out mt-2"
        onClick={handleIncrement}
      >
        Click to increment
      </button>

      <br />

      <Products></Products>

      <Counter></Counter>
    </div>
  );
}

export default App;

// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
