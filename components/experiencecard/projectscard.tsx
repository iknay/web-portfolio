import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ProjectsCard({}: Props) {
  return (
    <article className='flex flex-col items-center flex-shrink-0 w-[400px] md:w-[400px] xl:w-[600px]
    snap-center bg-[#292929] pb-6 px-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
    '>
      <motion.img
      initial={{
        y:-200,
        opacity:0
      }}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      className='h-40 w-40 xl:w-[350px] xl:h-[350px]'
      src='https://media.discordapp.net/attachments/1091002910588018748/1091006181797011546/laptop_view.png?width=670&height=670'
      alt=''
      />

      <div className='px-0 space-y-4 md:px-10 text-[10px] xl:text-[14px]'>
        <h4 className='tracking-[5px] font-semibold'>TATERS ENTERPRISES INC.</h4>
        <p>Software Developer Intern</p>
        <p>Web Developer handling front-end web development activities <br></br>
           using react.js and tailwind css and QA activities for <br></br>
           functions and features of the web application.</p>
      </div>
    </article>
  )
}

export default ProjectsCard