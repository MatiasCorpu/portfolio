import { React, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";

import {IconChevronDown} from "@tabler/icons-react";

function ExpandableContainer({ children }) {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed w-full flex flex-col">
      
      <div className="bg-slate-200 shadow-md shadow-slate-500 dark:shadow-zinc-950 dark:bg-zinc-900 ">
        {expanded && (
          <motion.div
            className="flex justify-center items-center w-full gap-4 py-5"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: -40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: -40,
            }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 15,
            }}
          >
            {children}
          </motion.div>
        )}
      </div>

      
      <motion.button
        className={`bg-slate-200 border-b border-slate-400 shadow-md shadow-slate-600 p-2 ml-auto rounded-bl-2xl text-slate-500 dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-950 dark:shadow-zinc-950/60`}
        onClick={() => setExpanded(!expanded)}>

        <IconChevronDown className={`m-2 flex justify-center items-center active:rotate-180 transition-all ease-in duration-200  ${expanded ? "rotate-180": ""}`} />
      </motion.button>

    </div>
  );
}

export default ExpandableContainer;