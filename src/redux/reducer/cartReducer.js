const initialState = {
  cart: [],
};
// > Iss reducer pe hum kaam nahi karenge, just we are learning, in the sense, how to handle multiple reducers.

export const cartReducer = (state = initialState, action) => {
  // > Although we will not return like this. We will not work now with this, but we have just made this, for learning purpose.
  if (action.type === "ADD_TO_CART") {
    return state;
  } else {
    return state;
  }

  // Here, we cannot have the syntax like the below thing :-
  // return <div>cartReducer</div>;
};
