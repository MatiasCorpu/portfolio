import React from "react";

function Card({ classNameAditional, title }) {
  return (
    <div className={`text-xs max-xl:text-[11px] max-sm:text-[10px] text-center text-white drop-shadow-md  rounded-lg flex items-center ${classNameAditional}`}>
      <h1 className="p-[2px]"> {title} </h1>
    </div>
  );
}

export default Card;