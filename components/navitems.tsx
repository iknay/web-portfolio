import { motion, Variants } from "framer-motion";

interface MenuItemProps {
  i: {
    id: number;
    link: string;
    path?: string;
  };
  onClick: () => void;
}

const menuItemVariants: Variants = {
  open: {
    x: 0,
    y: 70,
    opacity: 1,
    transition: {
      duration: 0.4,

      ease: [0.6, 0.05, 0.2, 0.9],
    },
  },
  closed: {
    x: 0,
    y: -200,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.5, 0.6, 0.8],
    },
  },
};

const MenuItem = ({i, onClick }: MenuItemProps) => {
  const style = { border: `2px solid ${[i.id]}` };
  return (
    <motion.div layout>
    <motion.li className="mt-1 cursor-pointer text-md text-secondary" variants={menuItemVariants} onClick={onClick}>

        <a href={i.path}>{i.link}</a>
        {/* <text>{i.link}</text> */}
      {/* </span> */}
    </motion.li>
    </motion.div>
  );
};

export default MenuItem;
