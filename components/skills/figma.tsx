import React from 'react'
import {motion} from 'framer-motion';

type Props = {
  directionLeft?: boolean;
}

export default function Figma({directionLeft}: Props) {
  return (
    <div className='relative flex cursor-pointer group'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{duration: 0.5}}
        whileInView={{opacity: 1, x: 0}}
        whileHover={{scale: 1.2}}
        whileTap={{scale:1.1}}
        src="https://play-lh.googleusercontent.com/efwNlvQ3pch_-hZ9xeHf6YF-f_rHzQQo21IVevPLOxpzSVfxuVKom2_7C6axFbC-3rU"
        className='object-cover w-20 h-20 xl:w-32 xl:h-32 md:w-28 md:h-28'
      />
    </div>
  )
}