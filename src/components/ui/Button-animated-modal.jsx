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
    "Ciencias Básicas": "bg-green-500",
    "Programación": "bg-blue-500",
    "Infraestructura": "bg-gray-500",
    "Desarrollo de SW": "bg-blue-700",
    "Calidad y Seguridad de la Información": "bg-orange-500",
    "Gestión y Complementarias": "bg-violet-500",
  };


  return (
    <Modal>

      <ModalTrigger className={`h-36 w-36 text-white drop-shadow-md flex justify-center items-center group/modal-btn ${typeColor[type]} ${status === "pending" ? "opacity-60" : "" } `}>

        <span className="group-hover/modal-btn:translate-x-40 drop-shadow-md text-center transition duration-500">
          {title}
        </span>

        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          ✈️
        </div>

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