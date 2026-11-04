"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

// One tool in the orbit that you can grab and fling: it stretches a little
// past where you let go, then wobbles back into its slot on a spring. It sits
// inside the counter-rotating .orbit-upright wrapper, so dragging follows the
// pointer even while its ring turns.
export default function DraggableTool({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className="flex flex-col items-center gap-1.5">{children}</div>;
  return (
    <motion.div
      className="flex flex-col items-center gap-1.5 cursor-grab active:cursor-grabbing touch-none"
      drag
      dragSnapToOrigin
      dragElastic={0.55}
      dragTransition={{ bounceStiffness: 320, bounceDamping: 11 }}
      whileDrag={{ scale: 1.15, zIndex: 10 }}
      whileHover={{ scale: 1.06 }}
    >
      {children}
    </motion.div>
  );
}
