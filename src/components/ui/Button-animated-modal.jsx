"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./Animated-modal";

import { IconExternalLink } from '@tabler/icons-react';


export function ButtonAnimatedModal({ id, title, description, href, status, type }) {

  const typeColor = {
    "Ciencias Básicas": "bg-[#498379]",
    "Programación": "bg-[#492947]",
    "Infraestructura": "bg-[#ba792e]",
    "Desarrollo de SW": "bg-[#8f8f3f]",
    "Calidad y Seguridad de la Información": "bg-[#a2a384]",
    "Gestión y Complementarias": "bg-[#dd423e]",
    "Transversal": "bg-[#9ec5d5]",
  };

  return (
    <Modal>

      <ModalTrigger className={`h-36 w-36 text-white flex justify-center items-center ease-linear hover:scale-105 duration-200 max-sm:h-24 max-sm:w-24 max-sm:text-xs ${typeColor[type]} ${status === "pending" ? "opacity-60" : ""} `} >

        <span className="text-center transition duration-500 font-bold">
          {title}
        </span>


      </ModalTrigger>


      <ModalBody className={"bg-slate-200 dark:bg-zinc-900 text-slate-700 dark:text-zinc-200 border-transparent dark:border-neutral-800"}>

        <ModalContent className={""}>

          <div className="text-2xl font-bold pb-4 flex">
            <h2>{title + " - " + id}</h2>
          </div>
          <div className="flex w-full overflow-y-auto h-96">
            <p className="text-start flex items-center my-auto text-slate-700 dark:text-zinc-400">{description}</p>
          </div>
        </ModalContent>


        <ModalFooter className="">
          <a
            href={href}
            className="btn btn-primary"
            // target="_blank"
            rel="noreferrer"
          >
            <div className="flex group">

              <h3> {`Programa ${title}`}</h3>

              <IconExternalLink className="p-1 group-hover:scale-110 transition duration-200" />
            </div>
          </a>
        </ModalFooter>

      </ModalBody>

    </Modal>
  );
}