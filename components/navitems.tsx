import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 50,
    opacity: 1,
    transition: {
      y: { stiffness: 0, velocity: 0 }
    }
  },
  closed: {
    y: 90,
    opacity: 0,
    transition: {
      y: { stiffness: 0 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `1px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 2 }}
      whileTap={{ scale: 2}}
    >
      <div className="icon-placeholder" style={style} />
      <div className="asd" style={style}>
      </div>
    </motion.li>
  );
};
