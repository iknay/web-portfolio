import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4,5];
  return (
    <motion.div className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left justify-evenly md:flex-row text-paper'>
        <h3 className='absolute top-24 tracking-[15px] text-2xl'> projects </h3>
        <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F08080]/80'>
          {projects.map((project) => (
            <div className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44'>
              <img/>
              <div>
                <h4>Project 1</h4>
                <p>WHat the hell</p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F08080]/10 left-0 h-[400px] -skew-y-12'/>

    </motion.div>
  )
}

export default Projects