import React from "react";
import { useState } from "react";
import { IconBrandGithub, IconWorldWww, IconChevronDown } from "@tabler/icons-react";

import Card3d from "./Card-3d";

function CardProject({ classNameAditional, image, altImage, title, backgroundTitle, idLanguages, description, urlPage, urlGithub, items }) {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <Card3d classNameAditional={"ml-2 font-mono text-slate-700 dark:text-zinc-200"} clickAnimation={"false"}>

      <div>
        <div className="relative w-full">
          <div className={`absolute flex justify-between items-center w-full z-5 text-sm font-semibold py-2 px-3 ${backgroundTitle === "dark" ? "text-zinc-300" : "text-slate-700"}`}>
            <h1>{title}</h1>
            <div className="flex gap-3">
              {
                idLanguages.map((language) => (
                  items.map((item) => (
                    item.id === language ?
                      <img key={item.id} src={item.icon} alt={item.alt} className="w-6" />
                      : null
                  ))
                ))
              }
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg">
          <img className="rounded-xl" src={`src/assets/${image}`} alt={altImage} />
        </div>

        <button
          onClick={handleExpand}
          className={`relative py-2 px-2 my-[0.2rem] w-full justify-start flex flex-col items-center border border-slate-300 rounded-lg dark:border-zinc-950/50`}
        >
          <div className="flex w-full justify-between">
            <h2 className="font-semibold">Descripción</h2>
            <IconChevronDown className={`text-slate-600 dark:text-zinc-500 ${isExpanded ? "rotate-180" : "rotate-0"}`} />
          </div>

          <div className={`overflow-hidden ease-in-out duration-300 ${isExpanded ? "max-h-40" : "max-h-0"}`}>
            <div className="pt-3 font-thin text-base text-slate-700 dark:text-zinc-400">
              <p className="text-left">{description}</p>
            </div>
          </div>
        </button>

        <div className="flex w-full pb-1 h-14">
          <Card3d classNameAditional={"w-1/2"} >
            <a className="flex justify-center items-center w-full h-full" href={urlGithub} target="_blank" rel="noreferrer">
              <IconBrandGithub />
            </a>
          </Card3d>

          <Card3d classNameAditional={"w-1/2"} >
            <a className="flex justify-center items-center w-full h-full" href={urlPage} target="_blank" rel="noreferrer">
              <IconWorldWww />
            </a>
          </Card3d>
        </div>
      </div>

    </Card3d>
  );
}

export default CardProject;



