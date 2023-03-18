import React from 'react'
import {motion} from 'framer-motion';

type Props = {
  directionLeft?: boolean;
}

export default function NextJs({directionLeft}: Props) {
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
        src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
        className='object-cover w-20 h-20 border border-gray-500 rounded-full xl:w-32 xl:h-32 md:w-28 md:h-28'
      />
    </div>
  )
}