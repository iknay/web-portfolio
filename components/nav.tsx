import { motion } from "framer-motion";
import { link } from "fs";
import MenuItem from "./navitems";

const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: +1 },
  },
};
const links = [
  {
      id: 1,
      link: '// about'
  },
  {
      id: 2,
      link: '// skills'
  },
  {
      id: 3,
      link: '// projects'
  },
  {
      id: 4,
      link: '// contact me'
  },
]
const Navigation = () => {
  return (
    <motion.ul className="absolute top-0 right-10" variants={navigationVariants}>
      {links.map(i => (
      <MenuItem i={i} key={i.id} />
    ))}
    </motion.ul>
  );
};

export default Navigation;
