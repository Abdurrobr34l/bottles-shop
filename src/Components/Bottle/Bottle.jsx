import React from "react";

export default function Bottle({ bottle }) {
  return (
    <>
      <div className="p-5 rounded-xl bg-[#ebeeef]">
        <img src={bottle.img} alt="" className="size-60 w-full rounded-xl"/>
        <p className="mb-3 text-xl font-semibold text-black text-center">{bottle.name}</p>
      </div>
    </>
  );
}
