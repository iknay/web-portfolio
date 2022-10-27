import { motion, Variants } from "framer-motion";

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
// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const MenuItem = ({i}) => {
  const style = { border: `2px solid ${[i.id]}` };
  return (
    <motion.div layout>
    <motion.li className="mt-1 cursor-pointer text-md text-secondary" variants={menuItemVariants} >
      {/* <span style={style} className="rounded w-45 h-45 full"></span>
      <span style={style} className="flex-1 mb-5 rounded-lg"> */}
        <text>{i.link}</text>
      {/* </span> */}
    </motion.li>
    </motion.div>
  );
};

export default MenuItem;
