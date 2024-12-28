import React from "react";
import Card3d from "../components/ui/Card-3d";


function Home({ items }) {
    return (
        <div className="h-screen w-full flex justify-center items-center">

            <div className="w-full h-full justify-center items-center flex  text-slate-700 font-mono font-bold dark:text-zinc-200 max-lg:w-full">

                <div className="grid grid-cols-3 grid-rows-3 gap-7 w-[95%] h-[90%] max-lg:gap-2 max-lg:w-[98%] max-lg:h-[98%] w-">

                    <Card3d classNameAditional={"col-span-1 row-span-3"} paddingContent={"p-5"} clickAnimation={"false"}  >
                        <div className="h-full flex flex-col space-y-10 justify-center">
                            <div className={"flex overflow-hidden h-2/5 rounded-full"}>
                                <img src="src\assets\redondo.svg" alt="" className="flex w-full h-full object-cover" />
                            </div>
                            <div>
                                <h2 className="text-3xl py-5" >Lorem ipsum dolor.</h2>
                                <p className="font-thin text-base text-slate-500  dark:text-zinc-400">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, neque iste aliquid maxime ipsam nulla consequatur odit voluptatibus cumque excepturi voluptatum quae tempore corrupti amet dolorem sit, doloribus temporibus dolor.
                                </p>
                            </div>
                        </div>

                    </Card3d>

                    <Card3d classNameAditional={"col-span-2 row-span-1"} paddingContent={"py-5 px-7"} clickAnimation={"false"}>
                        <h1 className="text-4xl flex items-center">Lorem ipsum dolor sit amet consectetur</h1>
                    </Card3d>

                    <Card3d classNameAditional={"col-span-2 row-span-2"} paddingContent={"p-5"} clickAnimation={"false"}>
                        <div className="flex flex-col h-full w-full">
                            <h3 className="text-2xl">Lorem consectetur adipisicing</h3>
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


/*
col = 12
row = 3


col-span-4 row-span-3
col-span-8 row-span-1
col-span-8 row-span-2
*/