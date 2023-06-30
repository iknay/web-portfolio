import React, {Component} from 'react'
import {motion} from 'framer-motion';
import ProjectsCard1 from './projectscard/projectscard1';
import ProjectsCard2 from './projectscard/projectscard2';

export default function Projects () {
  return(
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative flex flex-col items-center justify-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left text-paper '>
      <h3 className='mb-24 tracking-[15px] text-2xl'>projects</h3>
      <div className='flex space-y-8 md:space-y-0 md:space-x-8'>
        <ProjectsCard1/>
        <ProjectsCard2/>
      </div>
          
    </motion.div>
  );
}

