import React from "react";

function Card({ classNameAditional, title}) {
    return (
        <div className={`text-xs text-center text-white drop-shadow-md max-w-20 rounded-l-lg flex items-center ${classNameAditional}`}>
            <h1 className="p-1"> {title} </h1>
        </div>
    );
}

export default Card;