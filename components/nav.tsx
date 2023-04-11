import { motion } from "framer-motion";
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
      link: '// about',
      path: '#about'
  },
  {
      id: 2,
      link: '// skills',
      path: '#skills'
  },
  {
      id: 3,
      link: '// projects',
      path: '#projects'
  },
  {
      id: 4,
      link: '// contact me',
      path: '#contactme'
  }
]
const Navigation = () => {

  return (
    <motion.ul className="absolute top-0 right-10" variants={navigationVariants}>
      {links.map(i => (
      <MenuItem i={i} key={i.id} onClick={function (): void {;
        } }/>
    ))}
    </motion.ul>
  );
};

export default Navigation;
