import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../reducer/CartSlice";

const View = () => {
  const state = useSelector((state) => state.eComData);
  const dispatch = useDispatch();
  // console.log(state);

  const handleCart = (s) => {
    dispatch(addToCart(s));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {state.map((s, index) => (
          <div key={index}>
            <h1>{s.id}</h1>
            <img src={s.img} alt="" />
            <p>{s.title}</p>
            <p>{s.author}</p>
            <p>Price:-{s.price}</p>
            <button onClick={() => handleCart(s)}>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default View;
