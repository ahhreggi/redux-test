import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

// STORE -> GLOBALIZED STATE

// ACTION -> E.G., INCREMENT

// REDUCER -> MODIFIES STATE DEPENDING ON THE GIVEN ACTION

// DISPATCH -> "Dispatch this action to the reducer"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
