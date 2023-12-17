// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { store } from "./app/store";
// import { Provider } from "react-redux";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// index.js
import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './app/store';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>
);


