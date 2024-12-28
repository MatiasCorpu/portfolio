import React from "react";
import { IconBrandGithub, IconWorldWww, IconChevronDown } from "@tabler/icons-react";

import Card3d from "./Card-3d";

function CardProject({ classNameAditional, image, altImage, title, backgroundTitle, idLanguages, description, urlPage, urlGithub, items }) {
  return (
    <Card3d classNameAditional={"ml-2 text-sm font-mono text-slate-700 dark:text-zinc-200"} clickAnimation={"false"}>

      <div className="w-full">
        <div className="relative w-full">
          <div className={`absolute flex z-30 justify-between items-center w-full z-5 font-semibold py-2 px-3 ${backgroundTitle === "dark" ? "text-zinc-300" : "text-slate-700"}`}>
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

        <div className="relative overflow-hidden rounded-lg w-full flex">
          
          <img className="rounded-xl" src={`src/assets/${image}`} alt={altImage} />

          
          <div className="absolute bg-slate-200 dark:bg-zinc-900 w-full h-full pt-12 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <div className="absolute bg-slate-200 dark:bg-zinc-900 w-full h-full overflow-y-auto opacity-100">
              <p className="w-full flex items-center px-7 pb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae, iusto ullam earum nam rem quis velit atque labore laboriosam inventore debitis placeat perspiciatis ut sint, mollitia dolor molestiae exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, unde incidunt perspiciatis at iure consectetur numquam. Labore, modi minus dolor cupiditate magnam libero maxime eum vel ullam tempora itaque accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil aliquam asperiores optio sed at omnis? Dignissimos ad quis repellat voluptatibus aliquid tempore recusandae ipsam nihil sunt corporis? Magnam, rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente recusandae reprehenderit, fugiat alias explicabo minus optio dignissimos obcaecati labore quasi perspiciatis? Veniam magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae, iusto ullam earum nam rem quis v </p>
            </div>
          </div>
        </div>

        <div className="flex w-full pb-1 mt-2 h-14">
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



