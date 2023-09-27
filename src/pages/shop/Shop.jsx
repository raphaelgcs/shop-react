import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <div>
          <h2>The best products for you</h2>
        </div>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
