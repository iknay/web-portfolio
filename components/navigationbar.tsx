import MenuToggler from "./navtoggle";
import Navigation from "./nav";
import { motion, useCycle, Variants } from "framer-motion";
import { useState } from "react";

const sidebarVariants: Variants = {
  open: {
    clipPath: `circle(1000px at 40px 40px)`,
    transition: {
      duration: 1,
    },
  },
  closed: {
    clipPath: `circle(30px at 750px -30px)`,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

export default function Sidebar() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1.5,}}>
    <motion.nav className="fixed top-0 bottom-0 right-0 z-10 w-full h-screen md:hidden" initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="absolute top-0 bottom-0 right-0 w-full bg-primary" variants={sidebarVariants} />
      <MenuToggler toggle={() => toggleOpen()} />
      <Navigation />
    </motion.nav>
    </motion.div>
  );
}
