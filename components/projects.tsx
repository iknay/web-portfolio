import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

function Projects({}: Props) {
  return (
    <motion.div className='relative z-0 flex flex-col items-center justify-center h-screen max-w-full px-10 mx-auto text-center xl:px-10 md:flex-row text-paper'>
        <h3 className='absolute top-24 tracking-[15px] text-2xl'> projects </h3>
    </motion.div>
  )
}

export default Projects