import React, { useEffect } from "react";
import { ButtonAnimatedModal } from "../components/ui/Button-animated-modal";
import Card3d from "../components/ui/Card-3d";
import ExpandableContainer from "../components/ui/ExpandableContainer";
import Card from "../components/ui/Card";


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

      <div className="flex w-10/12 flex-col justify-center gap-4 mb-28 mt-4">
        {Object.keys(groupedItems).map((year) => (
          <Card3d paddingContent={"p-10"} hoverScaleAnimation={"false"} clickAnimation={"false"}>

            <div className="flex items-center text-slate-400 dark:text-zinc-700">
              <div className="flex justify-center items-center p-5 mr-10">
                <h1 className="text-9xl font-bold">{year}</h1>
                <h2 className="flex text-2xl font-bold justify-center items-center -rotate-90">Año</h2>
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