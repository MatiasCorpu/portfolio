import React, { useEffect } from "react";
import { ButtonAnimatedModal } from "../components/ui/Button-animated-modal";
import Card3d from "../components/ui/Card-3d";
import ExpandableContainer from "../components/ui/ExpandableContainer";
import Card from "../components/ui/Card";
import BlurGradient from "../components/ui/Blur-gradient";

function University({ items }) {

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  return (
    <>
      <div className="w-full h-full flex justify-center">

        <div className="flex items-center flex-col max-xl:hidden">
          <span className="w-[4px] ml-auto flex h-[100%] items-center m-auto bg-gradient-to-b from-transparent from-[2%] via-[#2EA043] to-transparent"></span>
        </div>

        <div className="flex w-10/12 flex-col justify-center gap-4 mb-28 mt max-md:mb-4 max-md:w-full max-md:mx-2">
          <h1 className="text-3xl font-bold ml-20 mt-6 mb-2 text-slate-600 dark:text-zinc-300 max-xl:ml-2 max-sm:text-2xl">University</h1>

          {Object.keys(groupedItems).map((year) => (

            <div className="flex items-center">

              <div className="flex justify-center items-center w-16 mr-2 animation-appear  max-xl:hidden">
                <img src="src\assets\orejaverde.svg" alt="" />
              </div>

              <Card3d classNameAditional={"w-full h-full"} paddingContent={"p-10 max-xl:p-5"} hoverScaleAnimation={"false"} clickAnimation={"false"}>

                <div className="h-full w-full flex max-lg:flex-col max-lg:gap-3">

                  <div className="flex items-center text-slate-400 dark:text-zinc-700">
                    <div className="flex justify-center items-center p-5 mr-10 max-xl:mr-3 max-lg:items-end max-lg:pt-0 max-sm:pl-0">
                      {year > 0 ? (
                        <>
                          <h1 className="text-9xl font-bold max-xl:text-7xl max-sm:text-5xl">{year}</h1>
                          <h2 className="flex text-2xl font-bold justify-center items-center -rotate-90 max-lg:rotate-0 max-lg:text-5xl max-lg:ml-3 max-sm:text-3xl">Año</h2>
                        </>
                      ) : (
                        <>
                          <h1 className="text-3xl font-bold">Transversales</h1>
                        </>
                      )}
                    </div>
                  </div>

                  <div key={year} className="w-full flex flex-wrap max-xl:justify-center gap-5 max-sm:gap-3">
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

                </div>
              </Card3d>

            </div>
          ))}
        </div>

        <ExpandableContainer classNameAditional={"mx-10 max-sm:mx-1 flex flex-wrap"}>
          <Card classNameAditional={"bg-green-500"} title={"Ciencias Básicas"} />
          <Card classNameAditional={"bg-blue-500"} title={"Programación"} />
          <Card classNameAditional={"bg-gray-500"} title={"Infraestructura"} />
          <Card classNameAditional={"bg-blue-700"} title={"Desarrollo de SW"} />
          <Card classNameAditional={"bg-orange-500"} title={"Calidad y Seguridad de la Información"} />
          <Card classNameAditional={"bg-violet-500"} title={"Gestión y Complementarias"} />
        </ExpandableContainer>

      </div>
      <BlurGradient className={"max-md:hidden"} />
    </>
  );
};


export default University;