import { React, useState } from "react";
import { IconBrandGithub, IconWorldWww, IconFileDescription } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";


import Card3d from "./Card-3d";

function CardProject({ classNameAditional, image, altImage, title, backgroundTitle, idLanguages, description, urlPage, urlGithub, items }) {

  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };


  return (
    <Card3d classNameAditional={"ml-2 text-sm font-mono text-slate-700 dark:text-zinc-200"} clickAnimation={"false"}>

      <div className="w-full">
        <div className="relative w-full">
          <div className={`absolute flex z-10 justify-between items-center w-full z-5 font-semibold py-2 px-3 ${(backgroundTitle === "dark" && !isVisible) ? "text-zinc-300" : ""}
          ${(backgroundTitle !== "dark" && !isVisible) ? "text-slate-700" : ""}`
          }>
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

          <AnimatePresence>
            {isVisible &&
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: 400,
                  y: 300,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  x: 400,
                  y: 300,
                }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}

                className="w-full h-full flex absolute bg-slate-200 pt-12 pl-3 dark:bg-zinc-900 pr-14">

                <div className="w-full h-full overflow-y-auto">
                  <p className="text-sm  text-zinc-600 dark:text-slate-300">
                    {description}
                  </p>
                </div>

              </motion.div>
            }
          </AnimatePresence>

          <Card3d classNameAditional={"w-1/2 absolute bottom-0 right-0 m-1 w-max h-max"}
            onClick={() => console.log("click")}>
            <button
              className="p-2 flex justify-center items-center w-full h-full"
              onClick={handleButtonClick}
            >
              <IconFileDescription className="w-5" />
            </button>
          </Card3d>
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



