import React from 'react'
import {motion} from 'framer-motion';

type Props = {
  directionBottom?: boolean;
}

export default function Figma({directionBottom}: Props) {
  return (
    <div className='relative flex cursor-pointer group'>
      <motion.img
        initial={{
          y: directionBottom ? -90 : 90,
          opacity: 0
        }}
        transition={{duration: 0.5}}
        whileInView={{opacity: 1, y: 0}}
        whileHover={{scale: 1.2}}
        whileTap={{scale:1.1}}
        src="https://play-lh.googleusercontent.com/efwNlvQ3pch_-hZ9xeHf6YF-f_rHzQQo21IVevPLOxpzSVfxuVKom2_7C6axFbC-3rU"
        className='object-cover w-20 h-20 xl:w-28 xl:h-28 md:w-24 md:h-24'
      />
    </div>
  )
}