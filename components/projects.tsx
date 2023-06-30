import React, {Component} from 'react'
import {motion} from 'framer-motion';
import ProjectsCard1 from './projectscard/projectscard1';
import ProjectsCard2 from './projectscard/projectscard2';
import ProjectsCard3 from './projectscard/projectscard3';

export default function Projects () {
  return(
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative flex flex-col items-center justify-center max-w-full min-h-screen mt-8 overflow-hidden text-left text-paper '>
      <h3 className='md:mb-24 mb-8 tracking-[15px] text-2xl'>projects</h3>
      <div className='flex flex-col pb-4 space-y-8 md:flex-row md:space-y-0 md:space-x-8'>
        <ProjectsCard1/>
        <ProjectsCard2/>
        <ProjectsCard3/>
      </div>
          
    </motion.div>
  );
}

