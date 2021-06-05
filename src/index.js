import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

// STORE -> GLOBALIZED STATE

// ACTION -> DESCRIBES WHAT YOU WANT TO DO (E.G., INCREMENT) -> A SIMPLE FUNCTION THAT RETURNS AN OBJECT
const increment = () => {
  return {
    type: "INCREMENT"
  }
};
const decrement = () => {
  return {
    type: "DECREMENT"
  }
};

// REDUCER -> MODIFIES STATE DEPENDING ON THE GIVEN ACTION
const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(counter)

// Display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH -> "Dispatch <action> to the reducer"
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
