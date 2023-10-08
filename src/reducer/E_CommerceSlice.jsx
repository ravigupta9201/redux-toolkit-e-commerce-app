import { createSlice } from "@reduxjs/toolkit";
import list from "../InitialState";
import CartUpdate from "../components/CartUpdate";
// import { useParams } from "react-router-dom";

const eComSlice = createSlice({
  name: "eComData",
  initialState: list,
  reducers: {},
});

// export const { addToCart, removeFromCart } = eCommerceSlice.actions;
export default eComSlice.reducer;
