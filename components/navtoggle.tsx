import { motion } from "framer-motion";

const Path = ({ openPath, closedPath, ...rest }) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      variants={{
        open: { d: openPath, transition: { duration: 0.3 } },
        closed: { d: closedPath, transition: { duration: 0.3 } },
      }}
      {...rest}
    ></motion.path>
  );
};

const MenuToggler = ({ toggle }) => {
  return (
    <button className={"border-0 outline-none focus:outline-none absolute top-5 right-5 w-50 h-50 rounded-full;"}onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path openPath="M 3 16.5 L 17 2.5" closedPath="M 2 2.5 L 20 2.5" />
        <Path closedPath="M 2 9.423 L 20 9.423" openPath="" />
        <Path closedPath="M 2 16.346 L 20 16.346" openPath="M 3 2.5 L 17 16.346" />
      </svg>
    </button>
  );
};

export default MenuToggler;
