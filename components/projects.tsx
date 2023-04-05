import React from 'react'
import {motion} from 'framer-motion';
import ExperienceCard1 from './experiencecard/experiencecard1';
import ExperienceCard2 from './experiencecard/experiencecard2';
import ExperienceCard3 from './experiencecard/experiencecard3';
import ProjectsCard from './experiencecard/projectscard';

type Props = {}

function Projects({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly text-paper '>
      <h3 className='absolute top-24 tracking-[15px] text-2xl'>projects</h3>

        <div className='flex w-full mt-0 space-x-5 overflow-x-scroll xl:mt-24 snap-x'>
          <ProjectsCard/>
          <ProjectsCard/>
        </div>

    </motion.div>
  )
}

export default Projects