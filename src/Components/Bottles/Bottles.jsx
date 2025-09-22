import React, { use, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import { addIdToStoredCart, getStoredCart } from "../../Utilitise/Localstorage";

export default function Bottles({ bottlesPromise, cart, setCart }) {
  const cartButton = (bottle) => {
    const newCartArr = [...cart, bottle];
    setCart(newCartArr);

    //* Saved the bottle id in the localStorage
    addIdToStoredCart(bottle.id);
  };

  const bottles = use(bottlesPromise);
  
  useEffect(() => {
    const storedCardIds = getStoredCart();
    
    const storedCart = [];

    for (let id of storedCardIds) {
      // console.log(id);
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      // console.log(cartBottle);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }

    setCart(storedCart);
  }, [bottles, setCart]);

  return (
    <>
      <h2 className="mb-10 text-2xl font-black text-center md:text-3xl">
        Total Bottles in Stoke: {bottles.length}
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {bottles.map((bottle) => (
          <Bottle
            cartButton={cartButton}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </>
  );
}
