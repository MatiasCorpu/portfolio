import React from "react";

function Card({ classNameAditional, title }) {
  return (
    <div className={`text-xs max-xl:text-[11px] max-md:text-[10px] text-center text-white rounded-lg flex items-center flex-wrap max-[606px]:h-full ${classNameAditional}`}>
      <h1 className="p-[2px]"> {title} </h1>
    </div>
  );
}

export default Card;