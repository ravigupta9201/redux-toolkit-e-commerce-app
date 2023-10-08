import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider } from "react-redux";
import E_CommerceSlice from "./reducer/E_CommerceSlice";
import CartSlice from "./reducer/CartSlice";
const store = configureStore({
  reducer: {
    eComData: E_CommerceSlice,
    cartData: CartSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
