import React from 'react'
import {motion} from 'framer-motion';

type Props = {
  directionBottom?: boolean;
}

export default function ReactJs({directionBottom}: Props) {
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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        className='object-cover h-20 w-22 xl:w-32 xl:h-28 md:w-28 md:h-24'
      />
    </div>
  )
}