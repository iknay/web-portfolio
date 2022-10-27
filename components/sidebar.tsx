import MenuToggler from "./navtoggle";
import Navigation from "./nav";
import { motion, useCycle, Variants } from "framer-motion";
import { useState } from "react";

const sidebarVariants: Variants = {
  open: {
    clipPath: `circle(80px at 150px 130px)`,
    transition: {
      duration: 0.8,
    },
  },
  closed: {
    clipPath: `circle(0px at 215px 20px)`,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

export default function Sidebar() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    // <motion.div initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // transition={{duration: 1.5,}}>
    <motion.nav className="fixed top-0 bottom-0 right-0 w-60 h-60 md:hidden" initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="absolute top-0 bottom-0 right-0 w-full shadow-inner bg-paper" variants={sidebarVariants}  />
      <MenuToggler toggle={() => toggleOpen()} />
      <Navigation />
    </motion.nav>
    
  );
}
