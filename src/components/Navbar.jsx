import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from "../assets/rshop.png";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="links">
        <Link to="/"> Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
