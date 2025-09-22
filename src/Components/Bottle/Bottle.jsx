import React from "react";

export default function Bottle({ bottle }) {
const {name, img} = bottle;

  return (
    <>
      <div className="p-5 rounded-xl bg-[#ebeeef] text-center">
        <img src={img} alt="" className="size-60 w-full rounded-xl"/>
        <p className="mb-3 text-xl font-semibold text-black">{name}</p>
        <button className="mx-auto">Buy Now</button>
      </div>
    </>
  );
}
