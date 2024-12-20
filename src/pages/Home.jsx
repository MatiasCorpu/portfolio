import React from "react";
import Card3d from "../components/ui/Card-3d";


function Home({ items }) {
    return (
        <div className="h-screen w-screen flex justify-center items-center">

            <div className="absolute top-0 start-0 px-3 py-2">
                <div className="text-xs font-mono text-slate-700 dark:text-zinc-200">
                    <p>{new Date().toLocaleDateString()}</p>
                    <p>{new Date().toLocaleTimeString()}</p>
                </div>
            </div>

            <div className="w-10/12 h-5/6 flex m-auto text-slate-700 font-mono font-bold dark:text-zinc-200">

                <div className="grid grid-cols-12 grid-rows-3 gap-7 w-full">

                    <Card3d classNameAditional={"col-span-4 row-span-3"} paddingContent={"p-5"} clickAnimation={"false"}  >
                        <div className="h-full flex flex-col space-y-10 justify-center">
                            <div className={"flex overflow-hidden h-2/5 rounded-full"}>
                                <img src="src\assets\redondo.svg" alt="" className="flex w-full h-full object-cover" />
                            </div>
                            <div>
                                <h2 className="text-5xl py-5" >Soy Matías.</h2>
                                <p className="font-thin text-base text-slate-500  dark:text-zinc-400">
                                    Soy estudiante de Ingeniería en Informática, actualmente cursando el segundo año de la carrera. Aunque todavía no tengo experiencia en el sector, estoy comprometido con mi formación y apasionado por la tecnología y el desarrollo de soluciones innovadoras.
                                </p>
                            </div>
                        </div>

                    </Card3d>

                    <Card3d classNameAditional={"col-span-8 row-span-1"} paddingContent={"py-5 px-10"} clickAnimation={"false"}>
                        <h1 className="text-6xl flex items-center">Estudiante de Ingeniería en Informática.</h1>
                    </Card3d>

                    <Card3d classNameAditional={"col-span-8 row-span-2"} paddingContent={"p-5"} clickAnimation={"false"}>
                        <div className="flex flex-col h-full w-full">
                            <h3 className="text-4xl">Conocimientos Técnicos.</h3>
                            <div className="flex w-full h-full justify-center items-center">
                                <div className="grid grid-cols-5 grid-rows-2 gap-7">
                                    {
                                        items.map((item) => (
                                            <Card3d key={item.id} paddingContent={"p-2"}>
                                                <img src={item.icon} alt={item.alt} className="w-16" />
                                            </Card3d>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Card3d>
                </div>
            </div >
        </div>
    );
}

export default Home;