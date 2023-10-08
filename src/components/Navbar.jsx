import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Headroom from "react-headroom";

const Navbar = () => {
  const state = useSelector((state) => state.cartData);
  return (
    <Headroom>
      <div
        style={{
          backgroundColor: "#d7d3f4",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="/">E-commerce app</Link>
        <Link to="/cart-update" style={{ position: "relative" }}>
          <p>cart</p>
          <span
            style={{
              position: "absolute",
              top: "5px",
              right: "-15px",
              fontSize: "25px",
            }}
          >
            {state.length}
          </span>
        </Link>
      </div>
      <Outlet />
    </Headroom>
  );
};

export default Navbar;
