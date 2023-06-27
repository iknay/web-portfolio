import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./usefollowpointer";

export default function Pointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="relative w-24 h-24 pointer-events-none opacity-80"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 50,
        restDelta: 0.0005
      }}
    >
    <img src="./assets/matcha.png" />
    </motion.div>
  );
}