import React from "react";
import logoImage from "../assets/bottle-favicon.png";

export default function Header({ cart }) {
  return (
    <div className="flex items-center justify-between pt-5 pb-10">
      <div>
        <a href="/index.html">
          <img src={logoImage} alt="It is website logo" className="size-12" />
        </a>
      </div>

      <div>
        <h4>Add to cart: {cart.length}</h4>
        
        {/* <ul>
          {cart.map((item, i) => (
            <li key={i}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
