import { createSlice } from "@reduxjs/toolkit";
import CartUpdate from "../components/CartUpdate";
// import { useParams } from "react-router-dom";

const eCommerceSlice = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      //   const { id, title, author, img, price, amount } = action.payload;
      state.push(action.payload);
      //   console.log("addtocart:", title);
      //   console.log("id:", id);
      //   console.log("author:", author);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;

      return state.filter((f) => f.id !== id);

      // destructure the list
      // let newList =  {...state.products}
      // let updatedList = newList.filter--
      // make a shallow copy
      // state= {...updatedList}
      // filter the list copy the list into state

      console.log(action);
      //   console.log(id);
      console.log("state", state);
      //   state.pop();
      //   return [...state];
      // state.filter((f) => {
      //   console.log("filter id: ", f.id, id, "filter id: ");
      //   return f.id !== id;
      // });

      //   return { ...state, data: state.filter((f) => f.id != id) };
    },
    // totalPrice: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = eCommerceSlice.actions;
export default eCommerceSlice.reducer;
