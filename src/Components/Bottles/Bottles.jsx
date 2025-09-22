import React, { use } from "react";
import Bottle from "../Bottle/Bottle";

export default function Bottles({ bottlesPromise }) {
  const bottles = use(bottlesPromise);

  return (
    <>
      {/* <h2 className="mb-10 text-3xl font-black text-center">
        Total Bottles in Stoke: {bottles.length}
      </h2> */}

      <div className="grid grid-cols-5 gap-5">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </>
  );
}
