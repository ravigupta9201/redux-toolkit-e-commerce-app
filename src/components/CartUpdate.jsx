import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../reducer/CartSlice";

const CartUpdate = () => {
  const state = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.log(state);
  const { amount, author, price } = state;
  //   console.log(amount);

  const getTotalPrice = () => {
    // const length = state.length;
    // console.log(length);
    const allPrice = state.map((s) => s.price);
    console.log("total", allPrice);
    const totalPrice = allPrice.reduce((t, num) => t + num);
    return totalPrice;
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart({ id: id }));
  };

  return (
    <>
      <div>
        <h1>hello</h1>
        <div style={{ display: "flex", gap: "40px", margin: "20px" }}>
          {state.map((s, index) => (
            <div key={index}>
              <img src={s.img} alt="" />
              {/* <p>{s.id}</p> */}
              <p>{s.title}</p>
              {/* <p>{s.author}</p> */}
              <p>Price:- {s.price}</p>
              <button onClick={() => handleDelete(s.id)}>Remove</button>
            </div>
          ))}
        </div>
        <h4>Total Price: {getTotalPrice()}</h4>
      </div>
    </>
  );
};

export default CartUpdate;
