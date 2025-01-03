import React from "react";
import { cn } from "../../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useAnimation, keyframes } from "framer-motion";
import { Link } from "react-router-dom";

let prevButton: HTMLElement | null = null;

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,

}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      {/* <FloatingDockMobile items={items} className={mobileClassName} /> */}
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className
}) => {
  const [open, setOpen] = useState(false);
  return (
    (
      <div className={cn("relative block md:hidden z-50", className)}>

        <AnimatePresence>
          {
            open && (
              <motion.div
                layoutId="nav"
                className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2">
                {items.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      transition: {
                        delay: idx * 0.05,
                      },
                    }}
                    transition={{ delay: (items.length - 1 - idx) * 0.05 }}>
                    <Link
                      to={item.href}
                      key={item.title}
                      className="h-12 w-14 rounded-full bg-slate-50 border-2 border-slate-500 flex items-center justify-center dark:bg-slate-500 dark:border-slate-900 ">
                      <div className="h-full w-full p-3">{item.icon}</div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )
          }

        </AnimatePresence>

        <button
          onClick={() => setOpen(!open)}
          className="h-14 w-14 rounded-full bg-white border-2 border-slate-600 flex items-center justify-center dark:bg-slate-800 dark:border-slate-900">
          <IconLayoutNavbarCollapse className="text-slate-600 dark:text-slate-400" />
        </button>
      </div>)
  );
};

const FloatingDockDesktop = ({
  items,
  className
}) => {
  let mouseX = useMotionValue(Infinity);

  return (
    (
      <footer className="h-20 fixed flex items-end justify-center w-full bottom-0 z-50"> 
        
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className={cn(
            "mx-auto flex h-16 gap-4 max-sm:gap-2 items-end rounded-full px-3 pb-2.5 bg-slate-200  border-t border-slate-50 shadow-xl shadow-slate-600/40 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-zinc-950/40",
            className
          )}>
          {items.map((item) => (
            <IconContainer
              mouseX={mouseX}
              key={item.title}
              {...item}
            />
          ))}
        </motion.div>
      </footer>
    )
  );
};

function IconContainer({
  mouseX,
  id,
  title,
  icon,
  iconChange,
  href,
  upgradable,
  ariaLabel,
}: {
  mouseX: any;
  id: string;
  title: string;
  icon: React.ReactNode;
  iconChange: React.ReactNode;
  href: string;
  upgradable: boolean;
  ariaLabel: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [43, 80, 43]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [43, 80, 43]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [23, 46, 23]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [23, 46, 23]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);


  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const body = document.querySelector('body');
  if (body !== null) {
    useEffect(() => {
      if (theme === 'dark') {
        body.classList.add('dark');
      }
      else {
        body.classList.remove('dark');
      }
    }, [theme]);
  }

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  icon = theme === 'light' ? iconChange : icon;

  const controls = useAnimation();

  const handleClick = (e) => {
    controls.start({
      y: [0, -25, 5, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    });

    const currentButton = e.currentTarget as HTMLElement;
    let span = currentButton.querySelector("span") as HTMLElement;


    if (upgradable) {
      span.classList.remove("hidden");
      span.classList.add("block");
    }

    if (prevButton === null) {
      prevButton = currentButton;
    } else if (prevButton !== currentButton && upgradable) {
      span = prevButton.querySelector("span") as HTMLElement;
      span.classList.remove("block");
      span.classList.add("hidden");
      prevButton = currentButton;
    }

    if (id === "toggle-theme") {
      handleChangeTheme();

      const iconContainer = currentButton.querySelector("#container-toggle-theme");

      if (iconContainer !== null) {
        iconContainer.animate([
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(360deg)' }
        ], {
          duration: 400,
          iterations: 1,
          easing: 'ease-in-out'
        });
      }
    }
  };

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    (
      <Link to={href} id={id} aria-label={ariaLabel} className="rounded-full">
        <motion.div
          ref={ref}
          style={isTouchDevice ? {} : { width, height }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={(e) => handleClick(e)}
          animate={controls}

          className="bg-slate-50 aspect-square rounded-full flex items-center justify-center relative  shadow-md shadow-slate-500/65 border-t border-slate-50 dark:bg-zinc-800 dark:shadow-zinc-950/60 dark:border-zinc-700">

          <AnimatePresence>
            {hovered && !isTouchDevice && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{
                  opacity: 1,
                  y: 0, x: "-50%",
                  transition: {
                    delay: 0.35,
                    duration: 0.2,
                    ease: "easeOut",
                  }
                }}
                exit={{
                  opacity: 0,
                  y: 2, x: "-50%",
                  transition: {
                    duration: 0.2,
                  }
                }}
                className="px-2 py-0.5 whitespace-pre rounded-md bg-slate-50 text-slate-500 font-semibold absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs dark:bg-zinc-800  dark:text-zinc-300">
                {title}
              </motion.div>
            )}
          </AnimatePresence>

          <div id="container-toggle-theme">
            <motion.div
              style={ isTouchDevice ? {} : {width: widthIcon, height: heightIcon}}
              className="flex items-center justify-center"
            >
              {icon}
            </motion.div>
          </div>

          <span className="hidden absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-1.5 h-1 rounded-full bg-slate-50 shadow-sm shadow-slate-600 dark:bg-zinc-800 dark:shadow-zinc-950 dark:border-t dark:border-zinc-600"></span>

        </motion.div>
      </Link>
    )
  );
}