import React, { use } from "react";
import Bottle from "../Bottle/Bottle";

export default function Bottles({ bottlesPromise, cart, setCart }) {
  const cartButton = (bottle) => {
    const newCartArr = [...cart, bottle];
    setCart(newCartArr);
  };

  const bottles = use(bottlesPromise);

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
