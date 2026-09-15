import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// This one is suggested by AI windsurf of Vscode.
// import provider from "./redux/store";

// This one is told by Manas bhai.
import { Provider } from "react-redux";

// Provider has to be a named export and not default export.
// We cannot do like this : import Provider from "./redux/store"; // default export and for Provider, it has to be named export { reason : syntactical thing }, also, being a react component, the first letter has to be uppercase letter.

// import Provider from "react-redux";  // not this.

// We also need to do :
import store from "./redux/store.js";
createRoot(document.getElementById("root")).render(
  // store ko provide kara diya store attribute ke help se
  // Jai Ma Shri Radhe
  <Provider store={store}>
    {/* the store will be with Provider first, how can App use the store attribute, if it doesn't pass through Provider ? As, we did not use any props in App */}
    <App />

    {/* It "cannot" be like : <App store={store} /> */}
    {/*
      >> We need to give store={store}, else we will get the error : Cannot read properties of undefined (reading 'getState')
    
      >> means :-
        <Provider> is trying to call store.getState(), but the store being passed to it is undefined.
    */}
  </Provider>,
);
