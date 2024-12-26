import React, { useEffect } from "react";
import { ButtonAnimatedModal } from "../components/ui/Button-animated-modal";
import Card3d from "../components/ui/Card-3d";
import ExpandableContainer from "../components/ui/ExpandableContainer";
import Card from "../components/ui/Card";

import { IconSchool } from "@tabler/icons-react";

function University({ items }) {

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex items-center flex-col">
        <span className="w-[3px] ml-auto flex h-full bg-gradient-to-b from-transparent via-[#2AC0BB] to-transparent"></span>
      </div>

      <div className="flex w-10/12 flex-col justify-center gap-4 mb-28 mt">

        <h1 className="text-4xl font-bold ml-20 mt-6 mb-2 text-slate-600 dark:text-zinc-300">University</h1>

        {Object.keys(groupedItems).map((year) => (

          <div className="flex items-center">

            <div className="flex justify-center items-center w-16 mr-2 animation-appear ">
              <img src="src\assets\orejaazul.svg" alt="" />
            </div>

            <Card3d classNameAditional={"w-full h-full"} paddingContent={"p-10 "} hoverScaleAnimation={"false"} clickAnimation={"false"}>
              <div className="flex items-center text-slate-400 dark:text-zinc-700">
                <div className="flex justify-center items-center p-5 mr-10">

                  {console.log(year)}

                  {
                    year > 0 ? (
                      <>
                        <h1 className="text-9xl font-bold">{year}</h1>
                        <h2 className="flex text-2xl font-bold justify-center items-center -rotate-90">Año</h2>
                      </>
                    ) : (
                      <>
                        <h1 className="text-3xl font-bold">Transversales</h1>
                      </>
                    )
                  }
                </div>
              </div>

              <div key={year} className="w-full flex flex-wrap gap-5">
                {groupedItems[year].map((item) => (
                  <ButtonAnimatedModal
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    status={item.status}
                    type={item.type}
                  />
                ))}
              </div>
            </Card3d>
          </div>
        ))}


      </div>

      <ExpandableContainer>
        <Card classNameAditional={"bg-green-500"} title={"Ciencias Básicas"} />
        <Card classNameAditional={"bg-blue-500"} title={"Programación"} />
        <Card classNameAditional={"bg-gray-500"} title={"Infraestructura"} />
        <Card classNameAditional={"bg-blue-700"} title={"Desarrollo de SW"} />
        <Card classNameAditional={"bg-orange-500"} title={"Calidad y Seguridad de la Información"} />
        <Card classNameAditional={"bg-violet-500"} title={"Gestión y Complementarias"} />
      </ExpandableContainer>

    </div>
  );
};


export default University;

{/* <Card classNameAditional={"bg-blue-500"} title={"Programación"} />
<Card classNameAditional={"bg-gray-500"} title={"Infraestructura"} />
<Card classNameAditional={"bg-blue-700"} title={"Desarrollo de SW"} />
<Card classNameAditional={"bg-orange-500"} title={"Calidad y Seguridad de la Información"} />
<Card classNameAditional={"bg-violet-500"} title={"Gestión y Complementarias"} /> */}