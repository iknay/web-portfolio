import React from 'react'
import {motion} from 'framer-motion';

type Props = {
  directionLeft?: boolean;
}

export default function MaterialUI({directionLeft}: Props) {
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
        src="https://www.frontendmag.com/wp-content/uploads/2023/01/material-ui-logo.png"
        className='object-cover w-20 h-20 xl:w-32 xl:h-32 md:w-28 md:h-28'
      />
    </div>
  )
}