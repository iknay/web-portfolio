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
    <motion.nav className="md:hidden z-10 absolute top-0 right-0 bottom-0 w-full  h-screen" initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="bg-red-300 opacity-100 absolute top-0 right-0 bottom-0  w-full" variants={sidebarVariants} />
      <MenuToggler toggle={() => toggleOpen()} />
      <Navigation />
    </motion.nav>
  );
}
