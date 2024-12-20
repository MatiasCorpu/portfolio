import React from "react";

function Card3d({ children, classNameAditional, paddingContent, clickAnimation, hoverScaleAnimation }) {
  return (
    <div className={`flex items-center justify-center p-[0.2rem] bg-gradient-to-b from-slate-50 to-transparent rounded-2xl dark:from-zinc-800/60  ${hoverScaleAnimation === "false" ? "" : "hover:scale-[1.009]"} transition-transform duration-500 ${classNameAditional}`}>

      <div className={`flex items-center justify-center w-full h-full group p-[0.2rem] rounded-xl bg-gradient-to-b from-slate-100 to-slate-400 shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.7)] transition-shadow duration-200 ease-in dark:from-zinc-700 dark:to-zinc-950/70 ${clickAnimation === "false" ? "" : "active:scale-[0.985] active:shadow-[0px_0px_2px_1px_rgba(0,0,0,0.8)]"}`}>

        <div className={`flex items-center justify-center w-full h-full bg-gradient-to-b from-slate-300 to-slate-200 rounded-lg dark:from-zinc-950/70 dark:to-zinc-900 ${paddingContent}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card3d;