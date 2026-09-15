import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addToProduct } from "./redux/reducer/productReducer";

function App() {
  // const [count, setCount] = useState(0);

  // React-redux mein state ko use karne ke liye : "useSelector" use karna hai.

  // use of useDispatch
  const dispatch = useDispatch();

  const state = useSelector(
    // We need to work on "subscription basis", jaisa ki Manas bhai ne "zustand" mein bataya tha.
    (state) => {
      // Without any interference, we can return the full state.
      // As a result of this, the value in const state will have the value of state as in <return state>.
      return state;
    },
  );

  // just to see what is the value of state.
  console.log("state :", state);

  // React-redux mein action ke liye : "useDispatch" use karna hai.

  return (
    <div>
      <h1>Hello Vite</h1>
      <button
        onClick={
          /* Manas bhai told :
            > We will pass on reference of "addToProduct" function.
            > That too from : "./redux/reducer/productReducer";
          */

          // Without dispatch function, nothing will effectively happen, even if we click this button.

          // addToProduct

          () => {
            // We need to use dispatch function, because we need to dispatch an "action" to the "reducer". But for the dispatch function to build, we need to make use of hook via : const dispatch = useDispatch();
            // useDispatch() is the hook which we will use.

            dispatch(addToProduct());
          }
          // Or, we can make a callback function and call the "addToProduct" function from the callback function.
          /* Callback function.
          ()=>{
            addToProduct();
          }
          */
        }
      >
        Click
      </button>
    </div>
  );
}

export default App;

// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
// Jai Ma Shri Radhe
