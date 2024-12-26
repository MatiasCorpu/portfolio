import { div } from "framer-motion/client";
import React from "react";

function BlurGradient({ className }) {
  return (
    <div className={`w-full h-[clamp(80px,10vh,200px)] fixed bottom-0 pointer-events-none mask-gradient backdrop-blur-[8px] ${className}`}></div>
  );
}

export default BlurGradient;