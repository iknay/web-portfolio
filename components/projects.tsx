import React from 'react'
import {motion} from 'framer-motion';
import ProjectsCard from './projectscard/projectscard';
import ProjectsCard1 from './projectscard/projectscard1';

type Props = {}

function Projects({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly text-paper '>
      <h3 className='absolute top-24 tracking-[15px] text-2xl'>projects</h3>

        <div className='flex w-full mt-0 space-x-5 overflow-x-scroll xl:mt-28 snap-x'>
          <ProjectsCard/>
          <ProjectsCard1/>
        </div>

    </motion.div>
  )
}

export default Projects