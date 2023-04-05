import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ProjectsCard({}: Props) {
  return (
    <article className='flex flex-col items-center flex-shrink-0 w-[300px] md:w-[400px] xl:w-[1000px]
    snap-center bg-[#292929] pb-6 px-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
    '>
      <motion.img
      initial={{
        y:-200,
        opacity:0
      }}
      transition={{duration:1.2}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      className='h-45 w-40 xl:w-[400px] xl:h-[350px] '
      src='https://media.discordapp.net/attachments/1091002910588018748/1093137055325884536/project-taters.png?width=781&height=670'
      alt=''
      />

      <div className='px-0 space-y-4 md:px-10  xl:px-0 text-[10px] xl:text-[14px]'>
        <h4 className='tracking-[5px] font-semibold'>TATERS ENTERPRISES INC.</h4>
        <p>Web Developer Intern</p>
        <p>I handled front-end web development activities
           using react.js and tailwind css and QA activities for
           functions and features of the web application. I mostly
           worked on the admin page of the company and a bit of
           backend using php and mysql.</p>
        <p>Check out <a className='tracking-wide underline hover:text-[#F08080]' href='https://www.ilovetaters.com' target="_blank">ilovetaters.com</a></p>
      </div>
    </article>
  )
}

export default ProjectsCard