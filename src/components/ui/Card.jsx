import React from "react";

function Card({ classNameAditional, title}) {
    return (
        <div className={`h-full text-sm px-2 font-bold text-center text-slate-300 ${classNameAditional}`}>
            <h1 className="h-full"> {title} </h1>
        </div>
    );
}

export default Card;